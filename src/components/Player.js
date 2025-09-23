// src/components/player.js
export function createPlayer(initialTracks = []) {
  const prevPlayer = document.querySelector(".player");
  if (prevPlayer) prevPlayer.remove();

  const player = document.createElement("div");
  player.className =
    "player z-50 fixed bottom-0 left-0 w-full md:left-1/2 md:-translate-x-1/2 md:w-[100%] " +
    "bg-black/95 backdrop-blur-3xl rounded-t-xl md:rounded-1xl shadow-[0_8px_25px_rgba(0,0,0,0.7)] transition-all duration-300";

  player.innerHTML = `
    <audio id="audio" preload="metadata"></audio>

    <div class="max-w-[1600px] mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center gap-3">
      <!-- Left: cover + title (mobile condensed) -->
      <div class="flex items-center gap-3 min-w-0 md:w-[300px]">
        <img id="player-cover" src="/img/default.jpg"
             class="w-12 h-12 md:w-20 md:h-20 rounded-2xl object-cover transition-transform duration-300"
             alt="cover" />
        <div class="flex flex-col min-w-0">
          <span id="player-title" class="text-white font-semibold text-sm md:text-lg truncate max-w-[220px]">Song Name</span>
          <span id="player-artist" class="text-gray-400 text-xs md:text-sm truncate max-w-[220px]">Artist Name</span>
        </div>
      </div>

      <!-- Center: controls (responsive) -->
      <div class="flex-1 flex flex-col items-center md:items-center gap-2">
        <div class="flex items-center gap-4 md:gap-7 text-white">
          <button id="random-btn" class="rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-colors active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 md:w-5 md:h-5">
              <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"/>
              <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"/>
            </svg>
          </button>

          <button id="prev" class="rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-300 hover:text-[#1DB954] active:scale-95 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5 md:w-6 md:h-6">
              <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7z"/>
            </svg>
          </button>

          <button id="play-btn" class="rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white text-black shadow-lg hover:scale-105 active:scale-95 transition">
            <svg id="play-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6 md:w-10 md:h-10" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>

          <button id="next" class="rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-300 hover:text-[#1DB954] active:scale-95 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5 md:w-6 md:h-6">
              <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7z"/>
            </svg>
          </button>

          <button id="repeat-btn" class="hidden md:inline-flex rounded-full w-8 h-8 items-center justify-center active:scale-95 transition">
            <svg id="repeat-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M17 1l4 4-4 4V6H7a3 3 0 0 0-3 3v2H2V9a5 5 0 0 1 5-5h10V1zM7 23l-4-4 4-4v3h10a3 3 0 0 0 3-3v-2h2v2a5 5 0 0 1-5 5H7v3z"/>
            </svg>
          </button>
        </div>

        <!-- Progress bar: on mobile show small bar, on md show times -->
        <div class="flex items-center gap-3 w-full mt-1 md:mt-0">
          <span id="current-time" class="text-gray-400 text-xs hidden md:inline">0:00</span>
          <input id="progress-bar" type="range" min="0" max="100" value="0"
            class="w-full h-1 rounded-full cursor-pointer accent-[#ffffff] shadow-inner" />
          <span id="total-time" class="text-gray-400 text-xs hidden md:inline">0:00</span>
        </div>
      </div>

      <!-- Right: volume & extra (hide on small screens) -->
      <div class="hidden md:flex items-center gap-4 md:w-[170px] justify-end">
        <svg id="volume-icon" xmlns="http://www.w3.org/2000/svg"
             fill="currentColor" class="w-6 h-6 text-gray-200 transition-colors" viewBox="0 0 23 23">
          <path d="M4 9v6h4l5 5V4L8 9H4z"/>
        </svg>
        <input id="volume-bar" type="range" min="0" max="100" value="60"
               class="w-[120px] h-1 rounded-full cursor-pointer accent-[#ffffff] bg-gray-700/50 shadow-inner" />
      </div>
    </div>
  `;

  document.body.appendChild(player);

  const audio = player.querySelector("#audio");
  const playBtn = player.querySelector("#play-btn");
  const playIcon = player.querySelector("#play-icon");
  const cover = player.querySelector("#player-cover");
  const title = player.querySelector("#player-title");
  const artist = player.querySelector("#player-artist");
  const progressBar = player.querySelector("#progress-bar");
  const currentTimeEl = player.querySelector("#current-time");
  const totalTimeEl = player.querySelector("#total-time");
  const volumeBar = player.querySelector("#volume-bar");
  const prevBtn = player.querySelector("#prev");
  const nextBtn = player.querySelector("#next");
  const repeatBtn = player.querySelector("#repeat-btn");
  const repeatIcon = player.querySelector("#repeat-icon");
  const randomBtn = player.querySelector("#random-btn");
  const volumeIcon = player.querySelector("#volume-icon");

  let playlist = Array.isArray(initialTracks) ? initialTracks.slice() : [];
  let currentIndex = 0;
  let isPlaying = false;
  let repeatMode = 0;
  let isRandom = false;
  audio.volume = (volumeBar && volumeBar.value ? volumeBar.value : 60) / 100;

  function formatTime(sec) {
    if (!sec || isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  function updatePlayIcon() {
    if (isPlaying) {
      playIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
    } else {
      playIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
    }
  }

  function updateRepeatIcon() {
    repeatBtn.classList.remove("text-[#1DB954]");
    repeatIcon.innerHTML = `<path d="M17 1l4 4-4 4V6H7a3 3 0 0 0-3 3v2H2V9a5 5 0 0 1 5-5h10V1zM7 23l-4-4 4-4v3h10a3 3 0 0 0 3-3v-2h2v2a5 5 0 0 1-5 5H7v3z"/>`;

    if (repeatMode === 1) {
      repeatBtn.classList.add("text-[#1DB954]");
    } else if (repeatMode === 2) {
      repeatBtn.classList.add("text-[#1DB954]");
      repeatIcon.innerHTML += `<text x="12" y="16" text-anchor="middle" font-size="10" fill="currentColor">1</text>`;
    }
  }

  function updateVolumeIcon(volume) {
    const volNum = Number(volume) || 0;
    volumeIcon.innerHTML = "";
    if (volNum === 0) {
      volumeIcon.innerHTML = `<path d="M16.5 12L19 14.5l1.5-1.5L19 11l-2.5 2.5zM4 9v6h4l5 5V4L8 9H4z" />`;
    } else if (volNum <= 30) {
      volumeIcon.innerHTML = `<path d="M4 9v6h4l5 5V4L8 9H4z"/><path d="M14.5 12c0 .8-.4 1.5-1 2"/></svg>`;
    } else if (volNum <= 70) {
      volumeIcon.innerHTML = `<path d="M4 9v6h4l5 5V4L8 9H4z"/><path d="M14 8v8c1-0.7 2-1.8 2-4s-1-3.3-2-4z"/>`;
    } else {
      volumeIcon.innerHTML = `<path d="M4 9v6h4l5 5V4L8 9H4z"/><path d="M15 7v10c2-1.6 3-3.8 3-5s-1-3.4-3-5z"/><path d="M18.5 5.5l1 1"/>`;
    }
  }

  function dispatchTrackChange() {
    try {
      const data = {
        playlist: playlist.slice(),
        index: currentIndex,
        track: playlist[currentIndex] || null
      };
      document.dispatchEvent(new CustomEvent("player:trackChange", { detail: data }));
    } catch (e) {
      console.warn("dispatchTrackChange failed", e);
    }
  }

  function loadTrack(index, autoplay = false) {
    if (!playlist.length || index < 0 || index >= playlist.length) {
      cover.src = "/svg/whiteSpotify.svg";
      title.textContent = "Your Track";
      artist.textContent = "";
      audio.removeAttribute("src");
      progressBar && (progressBar.value = 0);
      currentTimeEl && (currentTimeEl.textContent = "0:00");
      totalTimeEl && (totalTimeEl.textContent = "0:00");
      isPlaying = false;
      updatePlayIcon();
      if (typeof window.__clearTopEqualizer === "function") {
        window.__clearTopEqualizer();
      }
      dispatchTrackChange();
      return;
    }

    currentIndex = index;
    const track = playlist[index];
    cover.src = track.cover || "/img/default.jpg";
    title.textContent = track.title || "Unknown";
    artist.textContent = track.artist || "";
    audio.src = track.file;

    if (typeof window.__setTopEqualizer === "function") {
      window.__setTopEqualizer(index);
    }

    audio.load();
    progressBar && (progressBar.value = 0);
    currentTimeEl && (currentTimeEl.textContent = "0:00");
    totalTimeEl && (totalTimeEl.textContent = "0:00");
    audio.loop = repeatMode === 2;

    dispatchTrackChange();

    if (autoplay) {
      audio.play()
        .then(() => {
          isPlaying = true;
          updatePlayIcon();
        })
        .catch(() => {
          isPlaying = false;
          updatePlayIcon();
        });
    } else {
      isPlaying = false;
      updatePlayIcon();
    }
  }

  function playCurrent() {
    if (!audio.src && playlist.length) {
      loadTrack(currentIndex, true);
      return;
    }
    audio.play()
      .then(() => {
        isPlaying = true;
        updatePlayIcon();
      })
      .catch((err) => console.warn("play() blocked:", err));
  }

  window.setPlaylist = (tracks = [], autoplay = false) => {
    playlist = Array.isArray(tracks) ? tracks.slice() : [];
    currentIndex = 0;
    loadTrack(0, autoplay);
  };

  window.playTrack = (payload) => {
    if (typeof payload === "number") {
      loadTrack(payload, true);
      return;
    }
    if (payload && typeof payload === "object") {
      const idx = playlist.findIndex(
        (t) => (t.id && payload.id && t.id === payload.id) || t.file === payload.file
      );
      if (idx >= 0) {
        loadTrack(idx, true);
      }
    }
  };

  // обработчики
  playBtn.addEventListener("click", () => {
    if (!audio.src) {
      if (playlist.length) loadTrack(currentIndex, true);
      return;
    }
    if (audio.paused) {
      playCurrent();
    } else {
      audio.pause();
      isPlaying = false;
      updatePlayIcon();
      if (typeof window.__clearTopEqualizer === "function") {
        window.__clearTopEqualizer();
      }
      return;
    }
  });

  nextBtn.addEventListener("click", () => {
    if (!playlist.length) return;
    if (isRandom) {
      currentIndex = Math.floor(Math.random() * playlist.length);
    } else {
      currentIndex = (currentIndex + 1) % playlist.length;
    }
    loadTrack(currentIndex, true);
  });

  prevBtn.addEventListener("click", () => {
    if (!playlist.length) return;
    if (isRandom) {
      currentIndex = Math.floor(Math.random() * playlist.length);
    } else {
      currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    }
    loadTrack(currentIndex, true);
  });

  repeatBtn?.addEventListener("click", () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatIcon();
    audio.loop = repeatMode === 2;
  });

  randomBtn.addEventListener("click", () => {
    isRandom = !isRandom;
    randomBtn.classList.toggle("text-[#1DB954]", isRandom);
  });

  audio.addEventListener("loadedmetadata", () => {
    totalTimeEl && (totalTimeEl.textContent = formatTime(audio.duration));
  });

  audio.addEventListener("timeupdate", () => {
    if (audio.duration && !isNaN(audio.duration) && progressBar) {
      progressBar.value = (audio.currentTime / audio.duration) * 100;
    }
    currentTimeEl && (currentTimeEl.textContent = formatTime(audio.currentTime));
  });

  audio.addEventListener("ended", () => {
    if (repeatMode === 2) {
      audio.currentTime = 0;
      audio.play();
    } else if (playlist.length) {
      if (isRandom) {
        currentIndex = Math.floor(Math.random() * playlist.length);
      } else if (repeatMode === 1) {
        currentIndex = (currentIndex + 1) % playlist.length;
      } else if (currentIndex < playlist.length - 1) {
        currentIndex++;
      } else {
        isPlaying = false;
        updatePlayIcon();
        if (typeof window.__clearTopEqualizer === "function") {
          window.__clearTopEqualizer();
        }
        return;
      }
      loadTrack(currentIndex, true);
    }
  });

  progressBar?.addEventListener("input", () => {
    if (audio.duration && !isNaN(audio.duration)) {
      audio.currentTime = (progressBar.value / 100) * audio.duration;
    }
  });

  volumeBar?.addEventListener("input", () => {
    const vol = volumeBar.value;
    audio.volume = vol / 100;
    updateVolumeIcon(vol);
  });

  if (initialTracks && initialTracks.length) {
    loadTrack(0, false);
  } else {
    loadTrack(-1, false);
  }

  updateRepeatIcon();
  updateVolumeIcon(volumeBar ? volumeBar.value : 60);

  return {
    setPlaylist: window.setPlaylist,
    playTrack: window.playTrack,
  };
}
