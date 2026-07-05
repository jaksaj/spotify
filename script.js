// --------------------------------------------------
// LOCAL STATIC MOCK DATASET (CORS & FALLBACK)
// --------------------------------------------------
const DEMO_DATA = [
  { "added_at": "2026-01-01", "title": "New Year's Day", "artist": "Taylor Swift", "album_art": "https://i.scdn.co/image/ab67616d00001e023f3d3278a94646700c25a4d6", "spotify_url": "https://open.spotify.com/track/12wtmGwt2ao37s95SCoC2y", "genres": ["pop", "synth-pop"], "release_year": 2017 },
  { "added_at": "2026-01-02", "title": "Cruel Summer", "artist": "Taylor Swift", "album_art": "https://i.scdn.co/image/ab67616d00001e02e8b066f70c206e5124d08f85", "spotify_url": "https://open.spotify.com/track/1BxfEXaarw1nLhj58jOIj2", "genres": ["pop", "synth-pop"], "release_year": 2019 },
  { "added_at": "2026-01-03", "title": "Espresso", "artist": "Sabrina Carpenter", "album_art": "https://i.scdn.co/image/ab67616d00001e02164a66a13d7d3d752df25b3a", "spotify_url": "https://open.spotify.com/track/2qSkz4ug5FTgXlu4Mo4zje", "genres": ["pop"], "release_year": 2024 },
  { "added_at": "2026-01-08", "title": "Flowers", "artist": "Miley Cyrus", "album_art": "https://i.scdn.co/image/ab67616d00001e02f4299cfae558f52f41f437cf", "spotify_url": "https://open.spotify.com/track/0y457Nspv281SV1A11494e", "genres": ["pop"], "release_year": 2023 },
  { "added_at": "2026-01-15", "title": "Blinding Lights", "artist": "The Weeknd", "album_art": "https://i.scdn.co/image/ab67616d00001e028863d6e38f5c11d95748c04d", "spotify_url": "https://open.spotify.com/track/0VjIjW4GlUZtiYRSvQkeEv", "genres": ["pop", "r&b"], "release_year": 2020 },
  { "added_at": "2026-01-20", "title": "Save Your Tears", "artist": "The Weeknd", "album_art": "https://i.scdn.co/image/ab67616d00001e028863d6e38f5c11d95748c04d", "spotify_url": "https://open.spotify.com/track/5QO79kh1R51j3Q9R81jQ13", "genres": ["pop", "r&b"], "release_year": 2020 },
  { "added_at": "2026-02-14", "title": "Valentine", "artist": "Laufey", "album_art": "https://i.scdn.co/image/ab67616d00001e02d6b38466b03362a4d3df8f58", "spotify_url": "https://open.spotify.com/track/3v9222mGwt2ao37s95SCoC2", "genres": ["jazz", "pop"], "release_year": 2022 },
  { "added_at": "2026-02-28", "title": "From The Start", "artist": "Laufey", "album_art": "https://i.scdn.co/image/ab67616d00001e024f2b3f114674ffcf8984931e", "spotify_url": "https://open.spotify.com/track/5r854YVK6xgV3mmsxaDBKs", "genres": ["jazz", "pop"], "release_year": 2023 },
  { "added_at": "2026-03-01", "title": "TEXAS HOLD 'EM", "artist": "Beyoncé", "album_art": "https://i.scdn.co/image/ab67616d00001e021bdfc545de90e0c03c51804f", "spotify_url": "https://open.spotify.com/track/0Z7R6mVP7PtJREfN6bOAIO", "genres": ["pop", "r&b"], "release_year": 2024 },
  { "added_at": "2026-03-17", "title": "Irish Celebration", "artist": "Macklemore", "album_art": "https://i.scdn.co/image/ab67616d00001e02ef2f059c235552b7194f4c6e", "spotify_url": "https://open.spotify.com/track/4k5c9ZlT-_jrvS0W_YTPyx", "genres": ["hip hop"], "release_year": 2009 },
  { "added_at": "2026-04-01", "title": "April Showers", "artist": "Proleter", "album_art": "https://i.scdn.co/image/ab67616d00001e0293158c3db08f300c0f86bdf8", "spotify_url": "https://open.spotify.com/track/3v3d3278a94646700c25a4", "genres": ["electro swing"], "release_year": 2013 },
  { "added_at": "2026-04-20", "title": "As It Was", "artist": "Harry Styles", "album_art": "https://i.scdn.co/image/ab67616d00001e02b4695c11ff497b70cf27732a", "spotify_url": "https://open.spotify.com/track/4PTG3Z6ehGkBFmDYzUVg7X", "genres": ["pop"], "release_year": 2022 },
  { "added_at": "2026-05-01", "title": "First of May", "artist": "Jonathan Coulton", "album_art": "https://i.scdn.co/image/ab67616d00001e021a8d052fe21262d1bf0a2cfa", "spotify_url": "https://open.spotify.com/track/0ErtIOErtI6mVP7PtJREfN", "genres": ["geek rock"], "release_year": 2005 },
  { "added_at": "2026-05-05", "title": "Cinco de Mayo", "artist": "Gipsy Kings", "album_art": "https://i.scdn.co/image/ab67616d00001e0236a282f9b8c0a876778f657a", "spotify_url": "https://open.spotify.com/track/3dffcf8984931e5r854YVK", "genres": ["flamenco", "latin"], "release_year": 1997 },
  { "added_at": "2026-05-18", "title": "Starboy", "artist": "The Weeknd", "album_art": "https://i.scdn.co/image/ab67616d00001e024718dec70337583f71c4c8d5", "spotify_url": "https://open.spotify.com/track/7MXVCl0gPlmOI5J4r4G5k3", "genres": ["pop", "r&b"], "release_year": 2016 },
  { "added_at": "2026-06-01", "title": "Please Please Please", "artist": "Sabrina Carpenter", "album_art": "https://i.scdn.co/image/ab67616d00001e02164a66a13d7d3d752df25b3a", "spotify_url": "https://open.spotify.com/track/56u4Mo4zje2qSkz4ug5FTgX", "genres": ["pop"], "release_year": 2024 },
  { "added_at": "2026-06-15", "title": "Birds of a Feather", "artist": "Billie Eilish", "album_art": "https://i.scdn.co/image/ab67616d00001e0271d2ecee446d3e86c0d8efd5", "spotify_url": "https://open.spotify.com/track/6d1bf0a2cfa0ErtIOErtI6", "genres": ["pop", "art pop"], "release_year": 2024 },
  { "added_at": "2026-06-27", "title": "Not Like Us", "artist": "Kendrick Lamar", "album_art": "https://i.scdn.co/image/ab67616d00001e02d60db566580f4f9f4a7c0303", "spotify_url": "https://open.spotify.com/track/6AI3ezQ4oFIh923r5HbHty", "genres": ["rap", "west coast hip hop"], "release_year": 2024 }
];

// --------------------------------------------------
// APPLICATION STATE
// --------------------------------------------------
const YEAR = 2026;

// Determine current date in 2026 dynamically
const now = new Date();
const CURRENT_DATE_2026 = (now.getFullYear() === YEAR) ? now : new Date(YEAR, 11, 31);
const CURRENT_MONTH_INDEX = CURRENT_DATE_2026.getMonth();

let playlistData = [];
let showFullYear = false; 

// Unified Filters State
let activeEraFilter = null;
let activeArtistFilter = null;
let activeSongFilter = "";
let activeLanguageFilter = "all";

const MONTHS = [
  { name: "January", days: 31 },
  { name: "February", days: 28 }, // 2026 is a standard year
  { name: "March", days: 31 },
  { name: "April", days: 30 },
  { name: "May", days: 31 },
  { name: "June", days: 30 },
  { name: "July", days: 31 },
  { name: "August", days: 31 },
  { name: "September", days: 30 },
  { name: "October", days: 31 },
  { name: "November", days: 30 },
  { name: "December", days: 31 }
];

const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];

// DOM Elements
const calendarContainer = document.getElementById("calendar-container");
const viewCurrentBtn = document.getElementById("view-current-btn");
const viewFullBtn = document.getElementById("view-full-btn");
const statusDot = document.getElementById("status-dot");
const statusText = document.getElementById("status-text");
const demoAlert = document.getElementById("demo-alert");
const tooltip = document.getElementById("tooltip");
const tooltipArt = document.getElementById("tooltip-art");
const tooltipDate = document.getElementById("tooltip-date");
const tooltipTitle = document.getElementById("tooltip-title");
const tooltipArtist = document.getElementById("tooltip-artist");

// Stats Elements
const statSongsCount = document.getElementById("stat-songs-count");
const statElapsedDays = document.getElementById("stat-elapsed-days");
const statSongsProgress = document.getElementById("stat-songs-progress");
const statPercentageText = document.getElementById("stat-percentage-text");
const topArtistsList = document.getElementById("top-artists-list");

const BUILD_VERSION = "20260705-4";

// --------------------------------------------------
// APPLICATION INITIALIZATION
// --------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Set default view button text dynamically depending on the month
  if (CURRENT_MONTH_INDEX < 11) {
    viewCurrentBtn.innerText = `Up to ${MONTHS[CURRENT_MONTH_INDEX].name}`;
  } else {
    viewCurrentBtn.style.display = "none";
    showFullYear = true;
    viewFullBtn.classList.add("active");
  }

  // Calculate total days elapsed in 2026
  const elapsedDays = calculateElapsedDays2026(CURRENT_DATE_2026);
  statElapsedDays.innerText = elapsedDays;
  
  initEventListeners();
  loadPlaylistData();
});

function initEventListeners() {
  const artistInput = document.getElementById("artist-filter-input");
  const artistSelect = document.getElementById("artist-filter-dropdown");
  const artistSuggestions = document.getElementById("artist-suggestions");
  const songInput = document.getElementById("song-filter-input");
  const songSuggestions = document.getElementById("song-suggestions");
  const languageSelect = document.getElementById("language-filter-dropdown");
  const clearBtn = document.getElementById("clear-filters-btn");

  const closeSuggestionPanels = () => {
    if (artistSuggestions) {
      artistSuggestions.hidden = true;
    }
    if (songSuggestions) {
      songSuggestions.hidden = true;
    }
  };

  const renderSuggestionPanel = (panel, items, onPick) => {
    if (!panel) return;

    panel.innerHTML = "";
    if (!items.length) {
      const emptyState = document.createElement("div");
      emptyState.className = "suggestion-empty";
      emptyState.textContent = "No matches";
      panel.appendChild(emptyState);
      panel.hidden = false;
      return;
    }

    items.forEach(item => {
      const optionButton = document.createElement("button");
      optionButton.type = "button";
      optionButton.className = "suggestion-item";
      optionButton.textContent = item;
      optionButton.addEventListener("mousedown", (event) => {
        event.preventDefault();
        onPick(item);
        panel.hidden = true;
      });
      panel.appendChild(optionButton);
    });

    panel.hidden = false;
  };

  const getArtistMatches = (query) => {
    const artistValues = Array.from(new Set(
      playlistData.flatMap(track => track.artist ? track.artist.split(",").map(a => a.trim()) : [])
    ))
      .filter(artist => artist && artist !== "Unknown Artist")
      .sort((a, b) => a.localeCompare(b));

    if (!query) return artistValues;

    const normalizedQuery = normalizeText(query);
    return artistValues.filter(artist => normalizeText(artist).includes(normalizedQuery));
  };

  const getSongMatches = (query) => {
    const songValues = Array.from(new Set(
      playlistData.map(track => track.title).filter(Boolean).map(title => title.trim())
    )).sort((a, b) => a.localeCompare(b));

    if (!query) return songValues;

    const normalizedQuery = normalizeText(query);
    return songValues.filter(title => normalizeText(title).includes(normalizedQuery));
  };

  const updateArtistSuggestions = () => {
    if (!artistInput || !artistSuggestions) return;
    const matches = getArtistMatches(artistInput.value.trim());
    renderSuggestionPanel(artistSuggestions, matches, value => {
      artistInput.value = value;
      activeArtistFilter = value || null;
      applyFilters();
    });
  };

  const updateSongSuggestions = () => {
    if (!songInput || !songSuggestions) return;
    const matches = getSongMatches(songInput.value.trim());
    renderSuggestionPanel(songSuggestions, matches, value => {
      songInput.value = value;
      activeSongFilter = value.trim();
      applyFilters();
    });
  };

  // Artist typed filter or legacy dropdown fallback
  if (artistInput) {
    artistInput.addEventListener("input", (e) => {
      activeArtistFilter = e.target.value;
      updateArtistSuggestions();
      applyFilters();
    });

    artistInput.addEventListener("change", (e) => {
      activeArtistFilter = e.target.value;
      updateArtistSuggestions();
      applyFilters();
    });

    artistInput.addEventListener("focus", updateArtistSuggestions);
  } else if (artistSelect) {
    artistSelect.addEventListener("change", (e) => {
      activeArtistFilter = e.target.value === "all" ? null : e.target.value;
      applyFilters();
    });
  }

  // Song typed filter
  if (songInput) {
    songInput.addEventListener("input", (e) => {
      activeSongFilter = e.target.value;
      updateSongSuggestions();
      applyFilters();
    });

    songInput.addEventListener("change", (e) => {
      activeSongFilter = e.target.value;
      updateSongSuggestions();
      applyFilters();
    });

    songInput.addEventListener("focus", updateSongSuggestions);
  }

  // Language dropdown filter
  languageSelect.addEventListener("change", (e) => {
    activeLanguageFilter = e.target.value;
    applyFilters();
  });

  // Clear all filters action
  clearBtn.addEventListener("click", () => {
    activeEraFilter = null;
    activeArtistFilter = null;
    activeSongFilter = "";
    activeLanguageFilter = "all";
    
    if (artistInput) {
      artistInput.value = "";
    }
    if (artistSelect) {
      artistSelect.value = "all";
    }
    if (songInput) {
      songInput.value = "";
    }
    if (languageSelect) {
      languageSelect.value = "all";
    }

    closeSuggestionPanels();
    
    applyFilters();
  });

  document.addEventListener("click", (event) => {
    const target = event.target instanceof Node ? event.target : null;
    const insideArtistField = Boolean(target && artistSuggestions && (artistSuggestions.contains(target) || artistInput?.contains(target)));
    const insideSongField = Boolean(target && songSuggestions && (songSuggestions.contains(target) || songInput?.contains(target)));

    if (!insideArtistField && !insideSongField) {
      closeSuggestionPanels();
    }
  });

  // View toggles
  viewCurrentBtn.addEventListener("click", () => {
    if (showFullYear) {
      showFullYear = false;
      viewCurrentBtn.classList.add("active");
      viewFullBtn.classList.remove("active");
      renderCalendar();
      applyFilters();
    }
  });

  viewFullBtn.addEventListener("click", () => {
    if (!showFullYear) {
      showFullYear = true;
      viewFullBtn.classList.add("active");
      viewCurrentBtn.classList.remove("active");
      renderCalendar();
      applyFilters();
    }
  });

  // Tooltip position tracking
  document.addEventListener("mousemove", (e) => {
    if (tooltip.classList.contains("visible")) {
      const tooltipWidth = tooltip.offsetWidth;
      const tooltipHeight = tooltip.offsetHeight;
      const padding = 15;
      
      let x = e.clientX + padding;
      let y = e.clientY + padding;

      // Prevent edge collision
      if (x + tooltipWidth > window.innerWidth) {
        x = e.clientX - tooltipWidth - padding;
      }
      if (y + tooltipHeight > window.innerHeight) {
        y = e.clientY - tooltipHeight - padding;
      }

      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
    }
  });
}

// --------------------------------------------------
// DATA LOADING & FALLBACK
// --------------------------------------------------
async function loadPlaylistData() {
  try {
    const response = await fetch(`playlist.json?v=${BUILD_VERSION}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Could not find playlist.json");
    }
    playlistData = await response.json();
    
    // Update connection status
    statusDot.className = "status-dot active";
    statusText.innerText = "Loaded playlist.json";
    demoAlert.style.display = "none";
  } catch (err) {
    console.warn("Loading playlist.json failed, falling back to rich demo dataset.", err);
    playlistData = DEMO_DATA;
    
    // Update connections status to demo mode
    statusDot.className = "status-dot";
    statusText.innerText = "Demo Preview Mode";
    demoAlert.style.display = "flex";
  }
  
  calculateStats();
  populateArtistSuggestions();
  populateSongSuggestions();
  renderCalendar();
}

// --------------------------------------------------
// STATS CALCULATION
// --------------------------------------------------
function calculateStats() {
  // 1. Total Songs
  const totalSongs = playlistData.length;
  statSongsCount.innerText = totalSongs;

  // 2. Percent complete
  const elapsedDays = parseInt(statElapsedDays.innerText, 10);
  const percentage = Math.round((totalSongs / elapsedDays) * 100);
  statSongsProgress.style.width = `${Math.min(percentage, 100)}%`;
  statPercentageText.innerText = `${percentage}% of elapsed year logged`;

  // 3. Top 3 Artists
  const artistCounts = {};
  playlistData.forEach(track => {
    if (!track.artist) return;
    const artists = track.artist.split(",").map(a => a.trim());
    artists.forEach(artist => {
      if (artist && artist !== "Unknown Artist") {
        artistCounts[artist] = (artistCounts[artist] || 0) + 1;
      }
    });
  });

  const sortedArtists = Object.entries(artistCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  topArtistsList.innerHTML = "";
  if (sortedArtists.length === 0) {
    topArtistsList.innerHTML = `<div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">No artist data available</div>`;
  } else {
    sortedArtists.forEach(([name, count], index) => {
      const row = document.createElement("div");
      row.className = "artist-row clickable";
      row.dataset.artist = name;
      row.innerHTML = `
        <div class="artist-info">
          <span class="artist-rank">#${index + 1}</span>
          <span class="artist-name" title="${name}">${name}</span>
        </div>
        <span class="artist-count">${count} song${count > 1 ? 's' : ''}</span>
      `;
      row.addEventListener("click", () => {
        activeArtistFilter = activeArtistFilter === name ? null : name;
        applyFilters();
      });
      topArtistsList.appendChild(row);
    });
  }

  // 3b. Duplicate Songs
  const duplicatesList = document.getElementById("duplicates-list");
  if (duplicatesList) {
    const duplicateMap = {};
    playlistData.forEach(track => {
      const title = normalizeText(track.title);
      const artist = normalizeText(track.artist);
      if (!title || !artist) return;

      const key = `${title}__${artist}`;
      if (!duplicateMap[key]) {
        duplicateMap[key] = { title: track.title, artist: track.artist, count: 0 };
      }
      duplicateMap[key].count += 1;
    });

    const duplicateEntries = Object.values(duplicateMap)
      .filter(entry => entry.count > 1)
      .sort((a, b) => b.count - a.count || a.title.localeCompare(b.title));

    duplicatesList.innerHTML = "";
    if (duplicateEntries.length === 0) {
      duplicatesList.innerHTML = `<div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">No duplicates found</div>`;
    } else {
      duplicateEntries.forEach(entry => {
        const row = document.createElement("div");
        row.className = "artist-row";
        row.innerHTML = `
          <div class="artist-info">
            <span class="artist-rank" style="color: #f7df9d;">×${entry.count}</span>
            <span class="artist-name" title="${entry.title} — ${entry.artist}">${entry.title}</span>
          </div>
          <span class="artist-count" title="${entry.artist}">${entry.artist}</span>
        `;
        duplicatesList.appendChild(row);
      });
    }
  }

  // 4. Genres stats (conditional support if genres array exists)
  const genresCard = document.getElementById("genres-card");
  const topGenresList = document.getElementById("top-genres-list");
  
  if (genresCard && topGenresList) {
    const genreCounts = {};
    let hasGenres = false;
    playlistData.forEach(track => {
      if (track.genres && track.genres.length > 0) {
        hasGenres = true;
        track.genres.forEach(genre => {
          genreCounts[genre] = (genreCounts[genre] || 0) + 1;
        });
      }
    });

    if (hasGenres) {
      genresCard.style.display = "flex";
      const sortedGenres = Object.entries(genreCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);
      
      topGenresList.innerHTML = "";
      sortedGenres.forEach(([name, count], index) => {
        const row = document.createElement("div");
        row.className = "artist-row";
        row.innerHTML = `
          <div class="artist-info">
            <span class="artist-rank" style="color: #2be275;">#${index + 1}</span>
            <span class="artist-name" style="text-transform: capitalize;" title="${name}">${name}</span>
          </div>
          <span class="artist-count">${count}</span>
        `;
        topGenresList.appendChild(row);
      });
    } else {
      genresCard.style.display = "none";
    }
  }

  // 5. Song Eras and Average Release Year (conditional support if release_year exists)
  const eraCounts = {
    "2020s": 0,
    "2010s": 0,
    "2000s": 0,
    "90s": 0,
    "Classics": 0
  };
  let totalYears = 0;
  let yearCount = 0;

  playlistData.forEach(track => {
    if (track.release_year) {
      totalYears += track.release_year;
      yearCount++;
      const y = track.release_year;
      if (y >= 2020) eraCounts["2020s"]++;
      else if (y >= 2010) eraCounts["2010s"]++;
      else if (y >= 2000) eraCounts["2000s"]++;
      else if (y >= 1990) eraCounts["90s"]++;
      else eraCounts["Classics"]++;
    }
  });

  const avgYearEl = document.getElementById("stat-avg-year");
  if (avgYearEl) {
    if (yearCount > 0) {
      avgYearEl.innerText = Math.round(totalYears / yearCount);
    } else {
      avgYearEl.innerText = "-";
    }
  }

  const songErasList = document.getElementById("song-eras-list");
  if (songErasList) {
    songErasList.innerHTML = "";
    const sortedEras = Object.entries(eraCounts)
      .filter(([_, count]) => count > 0)
      .sort((a, b) => b[1] - a[1]);

    if (sortedEras.length === 0 || yearCount === 0) {
      songErasList.innerHTML = `<div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">No release year data</div>`;
    } else {
      sortedEras.forEach(([eraName, count]) => {
        const pct = Math.round((count / yearCount) * 100);
        const row = document.createElement("div");
        row.className = "artist-row clickable";
        row.dataset.era = eraName;
        row.style.flexDirection = "column";
        row.style.alignItems = "stretch";
        row.style.gap = "0.35rem";
        row.innerHTML = `
          <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 500;">
            <span>${eraName}</span>
            <span style="color: var(--text-secondary);">${count} song${count > 1 ? 's' : ''} (${pct}%)</span>
          </div>
          <div style="height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden;">
            <div style="width: ${pct}%; height: 100%; background: var(--spotify-green); border-radius: 2px;"></div>
          </div>
        `;
        row.addEventListener("click", () => {
          activeEraFilter = activeEraFilter === eraName ? null : eraName;
          applyFilters();
        });
        songErasList.appendChild(row);
      });
    }
  }
}

function calculateElapsedDays2026(targetDate) {
  const start = Date.UTC(YEAR, 0, 1);
  const end = Date.UTC(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor((end - start) / oneDay) + 1;
}

function normalizeText(value) {
  return (value || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

// --------------------------------------------------
// CALENDAR GENERATOR
// --------------------------------------------------
function renderCalendar() {
  calendarContainer.innerHTML = "";
  
  // Determine how many months to display (full year or up to current month)
  const endMonth = showFullYear ? 11 : CURRENT_MONTH_INDEX;

  for (let m = 0; m <= endMonth; m++) {
    const monthInfo = MONTHS[m];
    const monthCard = document.createElement("div");
    monthCard.className = "month-card";
    
    // Title
    const title = document.createElement("h3");
    title.className = "month-name";
    title.innerText = monthInfo.name;
    monthCard.appendChild(title);
    
    // Days Grid Header (Mon - Sun)
    const weekdaysHeader = document.createElement("div");
    weekdaysHeader.className = "weekdays-header";
    WEEKDAYS.forEach(day => {
      const dayEl = document.createElement("div");
      dayEl.className = "weekday";
      dayEl.innerText = day;
      weekdaysHeader.appendChild(dayEl);
    });
    monthCard.appendChild(weekdaysHeader);

    // Days Grid
    const daysGrid = document.createElement("div");
    daysGrid.className = "days-grid";

    // Calculate offset (Monday start)
    const firstDay = new Date(YEAR, m, 1);
    const startDayOfWeek = firstDay.getDay(); // 0 is Sunday, 1 is Monday...
    const offset = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

    // Render Offset Spacer Days
    for (let o = 0; o < offset; o++) {
      const spacer = document.createElement("div");
      spacer.className = "day-cell spacer";
      daysGrid.appendChild(spacer);
    }

    // Render Days of Month
    for (let d = 1; d <= monthInfo.days; d++) {
      const dateStr = formatDateStr(YEAR, m, d);
      const track = playlistData.find(t => t.added_at === dateStr);
      
      const dayCell = document.createElement("div");
      dayCell.className = "day-cell";
      dayCell.dataset.date = dateStr;
      
      // Day Number
      const numSpan = document.createElement("span");
      numSpan.className = "cell-day-num";
      numSpan.innerText = d;
      dayCell.appendChild(numSpan);

      if (track) {
        dayCell.classList.add("has-song");
        dayCell.dataset.title = track.title.toLowerCase();
        dayCell.dataset.artist = track.artist.toLowerCase();
        
        // Image
        if (track.album_art) {
          const img = document.createElement("img");
          img.className = "cell-artwork";
          img.src = track.album_art;
          img.alt = track.title;
          img.loading = "lazy";
          dayCell.appendChild(img);
        }
        
        // Overlay gradient
        const overlay = document.createElement("div");
        overlay.className = "cell-overlay";
        dayCell.appendChild(overlay);

        // Hover actions
        dayCell.addEventListener("mouseenter", () => showTooltip(track, dateStr));
        dayCell.addEventListener("mouseleave", hideTooltip);

        // Click to open on Spotify
        if (track.spotify_url) {
          dayCell.addEventListener("click", () => {
            openSpotifyTrack(track.spotify_url);
          });
        }
      } else {
        dayCell.classList.add("empty");
      }

      daysGrid.appendChild(dayCell);
    }

    monthCard.appendChild(daysGrid);
    calendarContainer.appendChild(monthCard);
  }
}

// --------------------------------------------------
// DYNAMIC FILTERS DATA INJECTORS
// --------------------------------------------------
function populateArtistSuggestions() {
  const artistList = document.getElementById("artist-options");
  if (!artistList) return;

  artistList.innerHTML = "";

  const artistsSet = new Set();
  playlistData.forEach(track => {
    if (track.artist) {
      track.artist.split(",").forEach(a => artistsSet.add(a.trim()));
    }
  });
  
  const sortedArtists = Array.from(artistsSet).sort();
  sortedArtists.forEach(artist => {
    if (artist && artist !== "Unknown Artist") {
      const opt = document.createElement("option");
      opt.value = artist;
      artistList.appendChild(opt);
    }
  });
}

function populateSongSuggestions() {
  const songList = document.getElementById("song-options");
  if (!songList) return;

  songList.innerHTML = "";

  const titlesSet = new Set();
  playlistData.forEach(track => {
    if (track.title) {
      titlesSet.add(track.title.trim());
    }
  });

  Array.from(titlesSet)
    .sort((a, b) => a.localeCompare(b))
    .forEach(title => {
      const opt = document.createElement("option");
      opt.value = title;
      songList.appendChild(opt);
    });
}

// Heuristic Language Guesser (analyzes patterns in character set and vocabulary)
function guessLanguage(title, artist) {
  const text = (title + " " + artist).toLowerCase();
  
  // Slavic specific characters or key artist names
  const slavicChars = /[ćčšžđ]/i;
  const slavicWords = ["zlatnik", "lutkica", "savic", "ravel", "prijovic", "ceca", "seka", "dincha", "saban", "joksimovic"];
  if (slavicChars.test(text) || slavicWords.some(w => text.includes(w))) {
    return "Ex-Yu / Slavic";
  }
  
  // Spanish / Latin vocabulary
  const latinWords = ["cinco", "mayo", "gipsy", "kings", "amor", "ella", "sol", "bailar", "corazon", "te quiero"];
  if (latinWords.some(w => text.includes(w))) {
    return "Spanish / Latin";
  }
  
  return "English";
}

// Unified Composite Filtering System
function applyFilters() {
  const activeCells = document.querySelectorAll(".day-cell.has-song");
  
  // Sync dropdown values
  const artistInput = document.getElementById("artist-filter-input");
  const artistSelect = document.getElementById("artist-filter-dropdown");
  if (!artistInput && artistSelect) {
    artistSelect.value = activeArtistFilter || "all";
  }

  const songInput = document.getElementById("song-filter-input");
  
  const languageSelect = document.getElementById("language-filter-dropdown");
  if (languageSelect) {
    languageSelect.value = activeLanguageFilter;
  }

  // Sync active styles in sidebar lists
  updateSidebarFilterStyles();

  activeCells.forEach(cell => {
    const dateStr = cell.dataset.date;
    const track = playlistData.find(t => t.added_at === dateStr);
    if (!track) return;
    
    // 1. Era Match
    let eraMatch = true;
    if (activeEraFilter && track.release_year) {
      const year = track.release_year;
      if (activeEraFilter === "2020s" && year < 2020) eraMatch = false;
      else if (activeEraFilter === "2010s" && (year < 2010 || year >= 2020)) eraMatch = false;
      else if (activeEraFilter === "2000s" && (year < 2000 || year >= 2010)) eraMatch = false;
      else if (activeEraFilter === "90s" && (year < 1990 || year >= 2000)) eraMatch = false;
      else if (activeEraFilter === "Classics" && year >= 1990) eraMatch = false;
    }
    
    // 2. Artist Match
    let artistMatch = true;
    if (activeArtistFilter && activeArtistFilter.trim()) {
      artistMatch = normalizeText(track.artist).includes(normalizeText(activeArtistFilter));
    }

    // 2b. Song title Match
    let titleMatch = true;
    if (activeSongFilter && activeSongFilter.trim()) {
      titleMatch = normalizeText(track.title).includes(normalizeText(activeSongFilter));
    }
    
    // 3. Language Match
    let languageMatch = true;
    if (activeLanguageFilter !== "all") {
      const lang = guessLanguage(track.title, track.artist);
      if (activeLanguageFilter === "english" && lang !== "English") languageMatch = false;
      else if (activeLanguageFilter === "slavic" && lang !== "Ex-Yu / Slavic") languageMatch = false;
      else if (activeLanguageFilter === "latin" && lang !== "Spanish / Latin") languageMatch = false;
      else if (activeLanguageFilter === "other" && ["English", "Ex-Yu / Slavic", "Spanish / Latin"].includes(lang)) languageMatch = false;
    }
    
    // Apply dimming / highlighting states
    if (eraMatch && artistMatch && titleMatch && languageMatch) {
      cell.classList.remove("dimmed");
      if (activeEraFilter || (activeArtistFilter && activeArtistFilter.trim()) || (activeSongFilter && activeSongFilter.trim()) || activeLanguageFilter !== "all") {
        cell.classList.add("highlighted");
      } else {
        cell.classList.remove("highlighted");
      }
    } else {
      cell.classList.remove("highlighted");
      cell.classList.add("dimmed");
    }
  });
}

function updateSidebarFilterStyles() {
  // Highlight active Era card
  const eraCards = document.querySelectorAll("#song-eras-list .artist-row");
  eraCards.forEach(card => {
    if (activeEraFilter && card.dataset.era === activeEraFilter) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });

  // Highlight active Artist card
  const artistCards = document.querySelectorAll("#top-artists-list .artist-row");
  artistCards.forEach(card => {
    if (activeArtistFilter && card.dataset.artist === activeArtistFilter) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });

  // Toggle Clear Filters Button
  const clearBtn = document.getElementById("clear-filters-btn");
  if (clearBtn) {
    if (activeEraFilter || (activeArtistFilter && activeArtistFilter.trim()) || (activeSongFilter && activeSongFilter.trim()) || activeLanguageFilter !== "all") {
      clearBtn.style.display = "inline-block";
    } else {
      clearBtn.style.display = "none";
    }
  }
}

// --------------------------------------------------
// TOOLTIP CONTROLLERS
// --------------------------------------------------
function showTooltip(track, dateStr) {
  tooltipArt.src = track.album_art || "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=150&auto=format&fit=crop";
  tooltipDate.innerText = formatDateFriendly(dateStr);
  tooltipTitle.innerText = track.title;
  tooltipArtist.innerText = track.artist;
  
  const tooltipYear = document.getElementById("tooltip-year");
  const tooltipGenres = document.getElementById("tooltip-genres");
  
  if (tooltipYear) {
    if (track.release_year) {
      tooltipYear.innerText = track.release_year;
      tooltipYear.style.display = "inline-block";
    } else {
      tooltipYear.style.display = "none";
    }
  }
  
  if (tooltipGenres) {
    if (track.genres && track.genres.length > 0) {
      tooltipGenres.innerText = track.genres.slice(0, 2).join(", ");
      tooltipGenres.style.display = "inline-block";
    } else {
      tooltipGenres.style.display = "none";
    }
  }
  
  tooltip.classList.add("visible");
}

function hideTooltip() {
  tooltip.classList.remove("visible");
}

function formatDateStr(year, monthIndex, day) {
  const mm = String(monthIndex + 1).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  return `${year}-${mm}-${dd}`;
}

function formatDateFriendly(dateStr) {
  const parts = dateStr.split("-");
  if (parts.length !== 3) return dateStr;
  const dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
  return dateObj.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function openSpotifyTrack(url) {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  link.remove();
}
