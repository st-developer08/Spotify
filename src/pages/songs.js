// src/pages/songs.js
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

  // --- строки треков
  const rowsHtml = tracks
    .map((t, i) => {
      const cover = t.cover || "/img/song-cover.png";
      return `
      <tr class="song-row ${
        i === idx ? "bg-[#1DB954]/20" : "hover:bg-white/5"
      } transition-colors duration-200 cursor-pointer group" 
          data-index="${i}" data-id="${t.id}">
        <td class="py-3 px-4 text-neutral-400 w-[50px] group-hover:text-white">${i + 1}</td>
        <td class="py-3 flex items-center gap-3 min-w-[200px]">
          <img src="${escapeHtml(cover)}" alt="${escapeHtml(
        t.title
      )}" class="w-11 h-11 rounded-md object-cover shadow-md"/>
          <div>
            <p class="text-white font-medium truncate max-w-[220px] group-hover:text-green-400">${escapeHtml(
              t.title
            )}</p>
            <span class="text-neutral-400 text-sm group-hover:text-white">${escapeHtml(
              t.artist
            )}</span>
          </div>
        </td>
        <td class="py-3 text-neutral-400 hidden md:table-cell">${escapeHtml(t.album || "")}</td>
        <td class="py-3 text-neutral-400 hidden md:table-cell">${escapeHtml(t.added || "")}</td>
        <td class="py-3 w-[40px] text-neutral-400 opacity-0 group-hover:opacity-100 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
        </td>
      </tr>
    `;
    })
    .join("");

  // --- вставка
  container.innerHTML = `
  <!-- Background Blur -->
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <img src="${escapeHtml(
      selected.cover
    )}" class="w-full h-full object-cover scale-110 blur-3xl opacity-40" alt="bg"/>
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black"></div>
  </div>

  <!-- Header -->
  <section class="flex items-end gap-8 px-[40px] pt-16 relative z-10">
    <img class="object-cover w-[260px] h-[260px] rounded-lg shadow-2xl" 
         src="${escapeHtml(selected.cover)}" alt="playlist cover" />
    <div class="flex flex-col gap-5">
      <p class="text-neutral-300 text-sm font-semibold uppercase">Public Playlist</p>
      <h2 class="text-white font-black text-[72px] leading-[1.1] tracking-tight drop-shadow-2xl">
        ${escapeHtml(selected.title)}
      </h2>
      <span class="text-neutral-300 text-base">${escapeHtml(
        selected.artist
      )} • ${tracks.length} songs</span>
    </div>
  </section>

  <div class="mt-12 px-[40px] relative z-10">
    <div class="bg-black/60 rounded-xl shadow-2xl  overflow-hidden">
      
      <table class="w-full text-left ">
        <thead class="sticky top-0 z-20 bg-black/80 backdrop-blur border-b border-neutral-800 text-neutral-400 text-xs uppercase tracking-wider">
          <tr>
            <th class="py-3 px-4 font-medium">#</th>
            <th class="py-3 font-medium">Title</th>
            <th class="py-3 font-medium hidden md:table-cell">Album</th>
            <th class="py-3 font-medium hidden md:table-cell">Date Added</th>
            <th class="py-3 w-[40px]"></th>
          </tr>
        </thead>
      </table>

      <div class="max-h-[calc(100vh-400px)] overflow-y-auto pb-[140px] custom-scroll">
        <table class="w-full text-left ">
          <tbody class="text-sm text-white divide-y divide-neutral-800" id="songs-table-body">
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  </div>
`;

  window.__currentSongsView = {
    playlistIds: tracks.map((t) => String(t.id)),
    playlist: tracks,
    selectedIndex: idx,
  };

  // клики
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
    rows.forEach((r) => r.classList.remove("bg-[#1DB954]/20"));
    const target = container.querySelector(`.song-row[data-index="${index}"]`);
    if (target) target.classList.add("bg-[#1DB954]/20");

    const t = tracks[index];
    if (t) {
      const headerImg = container.querySelector("section img.object-cover");
      const headerTitle = container.querySelector("section h2");
      const headerArtist = container.querySelector("section span");
      if (headerImg) headerImg.src = t.cover || "/img/default.jpg";
      if (headerTitle) headerTitle.textContent = t.title || "";
      if (headerArtist)
        headerArtist.textContent = `${t.artist || ""} • ${tracks.length} songs`;
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
          r.classList.remove("bg-[#1DB954]/20")
        );
        target.classList.add("bg-[#1DB954]/20");

        const headerImg = container.querySelector("section img.object-cover");
        const headerTitle = container.querySelector("section h2");
        const headerArtist = container.querySelector("section span");
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
