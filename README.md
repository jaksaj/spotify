# Spotify Daily Calendar 2026

A lightweight, local web application that visualizes a Spotify playlist as a daily calendar for 2026. Designed with a Spotify-inspired glassmorphic dark theme, it tracks daily updates, computes streaming metrics, and provides an interactive filterable calendar mosaic of album art.

## Setup & Running Guide

### 1. Extract Spotify Playlist Data
The Python script extracts tracks, parses the dates they were added, and maps them to the calendar.

1. **Install requirements:**
   Make sure you have your virtual environment activated, or install requests:
   ```bash
   pip install requests
   ```

2. **Configure your credentials:**
   Open the `.env` file in the root of the project and set:
   * `PLAYLIST_ID`: The Spotify Playlist ID (from the playlist's shareable link).
   * `SPOTIFY_ACCESS_TOKEN`: A manual Spotify Developer Access Token.
   * **OR** (Recommended): Provide your `SPOTIFY_CLIENT_SECRET` alongside the already filled `SPOTIFY_CLIENT_ID` to let the script fetch temporary access tokens automatically.
     * **Important**: You must add `http://127.0.0.1:8888/callback` to the **Redirect URIs** in your Spotify Developer App settings.

3. **Run the script:**
   Execute the python script using your virtual environment:
   ```bash
   .venv\Scripts\python data_fetch.py
   ```

### 2. Run the Local Web Server
To bypass browser CORS policies and read local data files like `playlist.json`, you must run the page via a local web server.

Run the following 1-line terminal command in your workspace directory:
```bash
python -m http.server 8000
```

Once running, open your browser and navigate to:
**[http://localhost:8000](http://localhost:8000)**

---

## Technical Features

* **Vanilla Stack**: Strictly client-side HTML5, CSS Grid/Flexbox, and ES6+ JavaScript. No build steps or heavy frameworks.
* **Auto Demo Fallback**: If opened directly via `file://` or if `playlist.json` is missing, it dynamically switches to a demo data state so you can see the calendar layout and stats immediately.
* **Interactive Tooltips**: Detailed overlay cards follow your cursor on track cells to show full song, artist, date, and higher-resolution album art.
* **Real-time Live Stats**: Calculates playlist progress/completeness against days elapsed in 2026, and counts/extracts top artists (splitting collaborators).
* **Live Search**: Highlight matching songs instantly across the full calendar grid as you type, dimming out other cells.
