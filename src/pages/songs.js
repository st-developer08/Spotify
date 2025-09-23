import db from "../../db.json";

export function openSongsPage(trackId, options = {}) {
  const container =
    document.querySelector("#main-content") ||
    document.querySelector("#playlists") ||
    document.querySelector("main") ||
    document.body;

  if (!container) return;

  const tracks = Array.isArray(options.playlist)
    ? options.playlist.slice()
    : db.sidebarTracks.slice();

  let idx =
    typeof options.index === "number"
      ? options.index
      : tracks.findIndex((t) => String(t.id) === String(trackId));
  if (idx < 0) idx = 0;

  const selected =
    tracks[idx] || tracks[0] || { cover: "/img/default.jpg", title: "Unknown", artist: "" };

  const rowsHtml = tracks
    .map((t, i) => {
      const cover = t.cover || "/img/song-cover.png";
      return `
      <tr
        class="song-row ${i === idx ? "bg-gradient-to-r from-[#1DB954]/20 to-transparent" : "hover:bg-white/5"}
               transition-all duration-300 cursor-pointer group rounded-md"
        data-index="${i}" data-id="${t.id}"
      >
        <td class="py-3 px-4 text-neutral-400 w-[60px] group-hover:text-white font-medium text-sm text-center">${i + 1}</td>

        <td class="py-3 px-4 flex items-center gap-4 min-w-[280px]">
          <div class="relative w-12 h-12 flex-shrink-0">
            <img src="${escapeHtml(cover)}" alt="${escapeHtml(t.title)}"
                 class="w-12 h-12 rounded-lg object-cover shadow-md transition-transform duration-300 group-hover:scale-105" />
            <div class="absolute inset-0 rounded-lg bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
          </div>
          <div class="min-w-0">
            <p class="text-white font-semibold truncate max-w-[420px] group-hover:text-[#1DB954] transition-colors">${escapeHtml(t.title)}</p>
            <p class="text-neutral-400 text-xs truncate group-hover:text-white">${escapeHtml(t.artist)}</p>
          </div>
        </td>

        <td class="py-3 px-4 text-neutral-400 hidden md:table-cell truncate max-w-[220px]">${escapeHtml(t.album || "")}</td>
        <td class="py-3 px-4 text-neutral-400 hidden md:table-cell">${escapeHtml(t.added || "")}</td>

        <td class="py-3 px-3 w-[72px] text-right">
          <button class="add-btn opacity-0 group-hover:opacity-100 transition inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/8">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-neutral-300 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
          </button>
        </td>
      </tr>
      `;
    })
    .join("");

  container.innerHTML = `
<div class="songs-page relative h-[90%]  overflow-y-auto rounded-xl bg-black/80 shadow-xl">
  <!-- Локальный фон только внутри контейнера -->
  <div class="absolute inset-0 -z-10 overflow-hidden rounded-xl">
    <img src="${escapeHtml(selected.cover)}"
         class="w-full h-full object-cover scale-110 blur-3xl opacity-60"
         alt="bg" />
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/90 to-black"></div>
  </div>

  <!-- Header -->
  <section class="flex items-end gap-8 px-[40px] pt-16 relative z-10">
    <div class="relative">
      <img class="object-cover w-[260px] h-[260px] rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-[1.03]"
           src="${escapeHtml(selected.cover)}" alt="playlist cover" />
      <div class="absolute bottom-[5px] left-4 px-3 py-1 rounded-full text-xs bg-black/40 border border-white/5 text-neutral-300">
        ${tracks.length} songs
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <p class="text-neutral-300 text-sm font-semibold uppercase tracking-wide">Public Playlist</p>
      <h1 class="text-white font-extrabold text-[48px] md:text-[64px] leading-tight tracking-tight drop-shadow-[0_8px_30px_rgba(0,0,0,0.7)]">
        ${escapeHtml(selected.title)}
      </h1>
      <div class="flex items-center gap-4">
        <span class="text-neutral-300">${escapeHtml(selected.artist)}</span>
        <div class="h-1 w-1 rounded-full bg-neutral-600"></div>
        <span class="text-neutral-400">${Math.max(0, tracks.length)} tracks</span>
      </div>

      <div class="mt-4 flex items-center gap-3">
        <button id="play-all" class="flex items-center gap-3 px-5 py-3 bg-[#ffffff] hover:bg-[#17a84a] text-black font-semibold rounded-xl  transition-transform transform hover:-translate-y-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 3v18l15-9z"/>
          </svg>
          Play
        </button>

        <button id="like-playlist" class="p-3 rounded-md bg-white/5 hover:bg-white/8 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-neutral-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
          </svg>
        </button>

        <div class="text-neutral-400 text-sm ml-3">Created by <span class="text-white font-semibold">You</span></div>
      </div>
    </div>
  </section>

  <!-- Table -->
  <div class="mt-7 px-[20px] pb-20 relative z-10">
    <div class="rounded-2xl shadow-2xl overflow-hidden">
      <div class="grid grid-cols-[60px_minmax(0,1fr)_320px_150px_72px] items-center py-3 px-4 text-xs uppercase text-neutral-400 tracking-wider border-b border-neutral-800">
        <div class="text-center">#</div>
        <div>Title</div>
        <div class="hidden md:block">Album</div>
        <div class="hidden md:block">Date added</div>
        <div></div>
      </div>

      <div class="pb-9">
        <table class="w-full text-left">
          <tbody class="text-sm text-white divide-y divide-neutral-800">
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
`;


  const playAllBtn = container.querySelector("#play-all");
  if (playAllBtn) {
    playAllBtn.addEventListener("click", () => {
      if (typeof window.setPlaylist === "function") window.setPlaylist(tracks, true);
      else console.warn("setPlaylist not found");
    });
  }

  const rows = container.querySelectorAll(".song-row");
  rows.forEach((row) => {
    row.addEventListener("click", () => {
      const index = Number(row.dataset.index);
      if (typeof window.setPlaylist === "function") window.setPlaylist(tracks, false);
      if (typeof window.playTrack === "function") window.playTrack(index);
      highlightRow(index);
    });
  });

  function highlightRow(index) {
    const rows = container.querySelectorAll(".song-row");
    rows.forEach((r) => r.classList.remove("bg-gradient-to-r", "from-[#1DB954]/20", "to-transparent"));
    const target = container.querySelector(`.song-row[data-index="${index}"]`);
    if (target) target.classList.add("bg-gradient-to-r", "from-[#1DB954]/20", "to-transparent");

    const t = tracks[index];
    if (t) {
      const headerImg = container.querySelector("section img.object-cover");
      const headerTitle = container.querySelector("section h1, section h2");
      const headerArtist = container.querySelector("section .text-neutral-300");
      if (headerImg) headerImg.src = t.cover || "/img/default.jpg";
      if (headerTitle) headerTitle.textContent = t.title || "";
      if (headerArtist) headerArtist.textContent = `${t.artist || ""} • ${tracks.length} songs`;
      window.__currentSongsView.selectedIndex = index;
    }
  }

  if (options.autoplay) {
    if (typeof window.setPlaylist === "function") window.setPlaylist(tracks, false);
    if (typeof window.playTrack === "function") window.playTrack(idx);
  }
}

document.addEventListener("player:trackChange", (e) => {
  try {
    const { playlist, index, track } = e.detail || {};
    if (!playlist || playlist.length === 0) return;

    const incomingIds = playlist.map((t) => String(t.id));
    const current = window.__currentSongsView;

    if (current && arraysEqual(current.playlistIds, incomingIds)) {
      const container =
        document.querySelector("#main-content") ||
        document.querySelector("#playlists") ||
        document.querySelector("main") ||
        document.body;
      const idx = Number(index || 0);
      const target = container.querySelector(`.song-row[data-index="${idx}"]`);
      if (target) {
        container.querySelectorAll(".song-row").forEach((r) =>
          r.classList.remove("bg-gradient-to-r", "from-[#1DB954]/20", "to-transparent")
        );
        target.classList.add("bg-gradient-to-r", "from-[#1DB954]/20", "to-transparent");

        const headerImg = container.querySelector("section img.object-cover");
        const headerTitle = container.querySelector("section h1, section h2");
        const headerArtist = container.querySelector("section .text-neutral-300");
        if (headerImg && track) headerImg.src = track.cover || "/img/default.jpg";
        if (headerTitle && track) headerTitle.textContent = track.title || "";
        if (headerArtist && track)
          headerArtist.textContent = `${track.artist || ""} • ${incomingIds.length} songs`;
        window.__currentSongsView.selectedIndex = idx;
      }
      return;
    }

    if (typeof openSongsPage === "function") {
      const tid = track && track.id ? track.id : playlist[0]?.id;
      openSongsPage(tid, { playlist, index, autoplay: false });
    }
  } catch (err) {
    console.error("player:trackChange handler error:", err);
  }
});

// --- helpers ---
function arraysEqual(a, b) {
  if (!a || !b) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (String(a[i]) !== String(b[i])) return false;
  return true;
}

function escapeHtml(s) {
  if (s === null || s === undefined) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
