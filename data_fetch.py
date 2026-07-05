import os
import json
import sys
import datetime
import webbrowser
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import requests

auth_code = None

class AuthHandler(BaseHTTPRequestHandler):
    """
    A temporary local web server handler to receive the Spotify OAuth redirect callback.
    """
    def do_GET(self):
        global auth_code
        query = urlparse(self.path).query
        params = parse_qs(query)
        
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.end_headers()
        
        if "code" in params:
            auth_code = params["code"][0]
            self.wfile.write(b"<h1>Authorization Successful!</h1><p>You can close this tab and return to the terminal.</p>")
        else:
            self.wfile.write(b"<h1>Authorization Failed!</h1><p>No code returned.</p>")
            
    def log_message(self, format, *args):
        pass

def load_local_env():
    """
    Loads environment variables from a local .env file if it exists.
    This enables running the script locally without manual environment configuration.
    """
    env_path = ".env"
    if os.path.exists(env_path):
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith("#"):
                    continue
                if "=" in line:
                    key, val = line.split("=", 1)
                    key = key.strip()
                    val = val.strip().strip('"').strip("'")
                    os.environ[key] = val

def update_env_file(key, val, env_path=".env"):
    """
    Saves a variable back to the .env file.
    """
    lines = []
    updated = False
    if os.path.exists(env_path):
        with open(env_path, "r", encoding="utf-8") as f:
            lines = f.readlines()
            
        for i, line in enumerate(lines):
            if line.strip().startswith(key + "="):
                lines[i] = f"{key}={val}\n"
                updated = True
                break
                
    if not updated:
        lines.append(f"{key}={val}\n")
        
    with open(env_path, "w", encoding="utf-8") as f:
        f.writelines(lines)

def refresh_access_token(client_id, client_secret, refresh_token):
    """
    Exchanges a refresh token for a new user access token headlessly.
    """
    token_url = "https://accounts.spotify.com/api/token"
    payload = {
        "grant_type": "refresh_token",
        "refresh_token": refresh_token,
        "client_id": client_id,
        "client_secret": client_secret
    }
    try:
        response = requests.post(token_url, data=payload, timeout=10)
        if response.status_code == 200:
            return response.json().get("access_token")
        else:
            print(f"Failed to refresh access token: HTTP {response.status_code} - {response.text}", file=sys.stderr)
            return None
    except Exception as e:
        print(f"Network error refreshing access token: {e}", file=sys.stderr)
        return None

def get_user_tokens_via_browser(client_id, client_secret):
    """
    Initiates User Authorization Code Flow via the default web browser.
    Spins up a local server on port 8888 to catch the OAuth code.
    """
    global auth_code
    auth_code = None
    redirect_uri = "http://127.0.0.1:8888/callback"
    scope = "playlist-read-private playlist-read-collaborative"
    
    auth_url = (
        f"https://accounts.spotify.com/authorize"
        f"?client_id={client_id}"
        f"&response_type=code"
        f"&redirect_uri={redirect_uri}"
        f"&scope={scope}"
    )
    
    print("\n==========================================")
    print("      SPOTIFY USER AUTHORIZATION          ")
    print("==========================================")
    print("Opening your browser to authorize access to the playlist...")
    print(f"If your browser doesn't open automatically, visit this URL:\n\n{auth_url}\n")
    
    try:
        server = HTTPServer(("127.0.0.1", 8888), AuthHandler)
    except Exception as e:
        print(f"Error starting local auth server (make sure port 8888 is free): {e}", file=sys.stderr)
        return None, None
        
    webbrowser.open(auth_url)
    
    try:
        server.handle_request()
    except KeyboardInterrupt:
        print("\nAuthorization cancelled by user.")
        return None, None
    finally:
        server.server_close()
        
    if not auth_code:
        print("Failed to capture authorization code from browser callback.", file=sys.stderr)
        return None, None
        
    print("Exchanging authorization code for tokens...")
    token_url = "https://accounts.spotify.com/api/token"
    payload = {
        "grant_type": "authorization_code",
        "code": auth_code,
        "redirect_uri": redirect_uri,
        "client_id": client_id,
        "client_secret": client_secret
    }
    
    try:
        response = requests.post(token_url, data=payload)
        if response.status_code == 200:
            res_data = response.json()
            return res_data.get("access_token"), res_data.get("refresh_token")
        else:
            print(f"Auth Error: HTTP {response.status_code} - {response.text}", file=sys.stderr)
            return None, None
    except Exception as e:
        print(f"Connection error while fetching token: {e}", file=sys.stderr)
        return None, None

def main():
    # 1. Load configuration
    load_local_env()
    
    client_id = os.environ.get("SPOTIFY_CLIENT_ID")
    client_secret = os.environ.get("SPOTIFY_CLIENT_SECRET")
    refresh_token = os.environ.get("SPOTIFY_REFRESH_TOKEN")
    
    if not client_id or not client_secret:
        print("CRITICAL ERROR: SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET is missing.", file=sys.stderr)
        print("Please ensure they are set in your environment variables or local .env file.", file=sys.stderr)
        sys.exit(1)
        
    playlist_id = os.environ.get("PLAYLIST_ID", "6mVP7PtJREfN6bOAIOErtI")
    access_token = None
    
    # 2. Authenticate
    if refresh_token:
        print("Found SPOTIFY_REFRESH_TOKEN. Attempting to refresh access token...")
        access_token = refresh_access_token(client_id, client_secret, refresh_token)
        
    if not access_token:
        # If in headless workflow, fail
        if os.environ.get("GITHUB_ACTIONS"):
            print("CRITICAL ERROR: Missing or invalid SPOTIFY_REFRESH_TOKEN in GitHub Actions.", file=sys.stderr)
            sys.exit(1)
            
        print("No valid session. Starting local interactive browser authentication flow...")
        access_token, new_refresh_token = get_user_tokens_via_browser(client_id, client_secret)
        if access_token and new_refresh_token:
            update_env_file("SPOTIFY_REFRESH_TOKEN", new_refresh_token)
            print("Successfully retrieved tokens and saved SPOTIFY_REFRESH_TOKEN to .env file.")
        else:
            print("CRITICAL ERROR: Failed to obtain user access token.", file=sys.stderr)
            sys.exit(1)
            
    # 3. Fetch playlist tracks using new /items endpoint
    print(f"Fetching playlist tracks using /items endpoint for playlist: {playlist_id}...")
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    
    url = f"https://api.spotify.com/v1/playlists/{playlist_id}/items?limit=100"
    tracks_data = []
    
    try:
        while url:
            response = requests.get(url, headers=headers, timeout=10)
            if response.status_code != 200:
                print(f"API Error: HTTP {response.status_code} - {response.text}", file=sys.stderr)
                break
                
            data = response.json()
            items = data.get("items", [])
            
            for item in items:
                track = item.get("track")
                if not track:
                    continue
                
                # Title
                title = track.get("name", "Unknown Title")
                
                # Artist(s)
                artists = [artist.get("name") for artist in track.get("artists", []) if artist.get("name")]
                artist_name = ", ".join(artists) if artists else "Unknown Artist"
                
                # Small album art URL (usually 64x64 is the last one in the list)
                images = track.get("album", {}).get("images", [])
                album_art_url = ""
                if images:
                    smallest_img = min(images, key=lambda img: img.get("width", 9999) or 9999)
                    album_art_url = smallest_img.get("url", "")
                
                # Added date formatted as YYYY-MM-DD
                added_at_raw = item.get("added_at", "")
                added_at_formatted = added_at_raw[:10] if added_at_raw else ""
                
                tracks_data.append({
                    "title": title,
                    "artist": artist_name,
                    "album_art": album_art_url,
                    "added_at": added_at_formatted
                })
                
            url = data.get("next")
            if url:
                print(f"Fetched {len(tracks_data)} tracks so far. Paginating...")
                
        # 4. Handle bulk addition safety fallback
        if tracks_data:
            unique_dates = set(t["added_at"] for t in tracks_data if t["added_at"])
            if len(unique_dates) <= 3 and len(tracks_data) > 5:
                print("\n[INFO] Bulk-addition detected: All tracks were added on the same date.")
                print("Distributing tracks sequentially starting from 2026-01-01 to populate the calendar grid...")
                
                start_date = datetime.date(2026, 1, 1)
                for i, track in enumerate(tracks_data):
                    assigned_date = start_date + datetime.timedelta(days=i)
                    track["added_at"] = assigned_date.strftime("%Y-%m-%d")
                    
        # 5. Output directly into playlist.json
        output_file = "playlist.json"
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(tracks_data, f, indent=2, ensure_ascii=False)
            
        print(f"\nSuccess! Saved {len(tracks_data)} tracks to '{output_file}'.")
        
    except Exception as e:
        print(f"Error fetching playlist tracks: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
