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
               transition-all duration-200 cursor-pointer group rounded-md"
        data-index="${i}" data-id="${t.id}"
      >
        <td class="py-3 px-4 text-neutral-400 w-[48px] md:w-[60px] group-hover:text-white font-medium text-sm text-center">${i + 1}</td>

        <td class="py-3 px-4 flex items-center gap-3 md:gap-4 min-w-[180px] md:min-w-[280px]">
          <div class="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
            <img src="${escapeHtml(cover)}" alt="${escapeHtml(t.title)}"
                 class="row-cover w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover shadow-md transition-transform duration-200 group-hover:scale-105" />
            <div class="absolute inset-0 rounded-lg bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
          </div>
          <div class="min-w-0">
            <p class="text-white font-semibold truncate max-w-[360px] group-hover:text-[#ffffff] transition-colors">${escapeHtml(t.title)}</p>
            <p class="text-neutral-400 text-xs truncate group-hover:text-white">${escapeHtml(t.artist)}</p>
          </div>
        </td>

        <td class="py-3 px-4 text-neutral-400 hidden md:table-cell truncate max-w-[220px]">${escapeHtml(t.album || "")}</td>
        <td class="py-3 px-4 text-neutral-400 hidden md:table-cell">${escapeHtml(t.added || "")}</td>

        <td class="py-3 px-3 w-[56px] text-right">
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
<div class="songs-page relative h-full overflow-y-auto rounded-xl bg-black/80 shadow-xl">
  <div class="absolute inset-0 -z-10 overflow-hidden rounded-xl">
    <img src="${escapeHtml(selected.cover)}"
         class="w-full h-full object-cover scale-100 blur-2xl opacity-70 saturate-1500"
         alt="bg" />
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/90 to-black"></div>
  </div>

  <section class="flex flex-col md:flex-row items-start md:items-end gap-6 px-4 md:px-[40px] pt-8 md:pt-16 relative z-10">
    <div class="relative flex-shrink-0">
      <img class="object-cover w-[180px] h-[180px] md:w-[260px] md:h-[260px] rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-[1.03]"
           src="${escapeHtml(selected.cover)}" alt="playlist cover" />
      <div class="absolute bottom-[6px] left-3 px-3 py-1 rounded-full text-xs bg-black/40 border border-white/5 text-neutral-300">
        ${tracks.length} songs
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <p class="text-neutral-300 text-sm font-semibold uppercase tracking-wide">Public Playlist</p>
      <h1 class="text-white font-extrabold text-2xl md:text-[48px] leading-tight tracking-tight drop-shadow-[0_8px_30px_rgba(0,0,0,0.7)]">${escapeHtml(selected.title)}</h1>
      <div class="flex items-center gap-3 text-neutral-300">
        <span class="text-neutral-300">${escapeHtml(selected.artist)}</span>
        <div class="h-1 w-1 rounded-full bg-neutral-600"></div>
        <span class="text-neutral-400">${Math.max(0, tracks.length)} tracks</span>
      </div>

      <div class="mt-3 flex items-center gap-3">
        <button id="play-all" class="flex items-center gap-3 px-4 md:px-5 py-2 md:py-3 bg-white hover:bg-[#17a84a] text-black font-semibold rounded-xl transition-transform transform hover:-translate-y-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 3v18l15-9z"/>
          </svg>
          Play
        </button>

        <button id="like-playlist" class="p-2 md:p-3 rounded-md bg-white/5 hover:bg-white/8 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 md:w-5 h-4 md:h-5 text-neutral-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
          </svg>
        </button>

        <div class="text-neutral-400 text-sm ml-2 md:ml-4">Created by <span class="text-white font-semibold">You</span></div>
      </div>
    </div>
  </section>

  <div class="mt-6 md:mt-7 px-4 md:px-[20px] pb-24 relative z-10">
    <div class="rounded-2xl shadow-2xl overflow-hidden">
      <div class="grid grid-cols-[48px_minmax(0,1fr)_1fr_1fr_56px] items-center py-3 px-4 text-xs uppercase text-neutral-400 tracking-wider border-b border-neutral-800">
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

  const rows = Array.from(container.querySelectorAll(".song-row"));

  (function precomputeColors(rowsList) {
    rowsList.forEach((row) => {
      if (row.dataset.color) return;
      const img = row.querySelector(".row-cover");
      if (!img) return;
      getDominantColorFromImageElement(img).then((color) => {
        if (!color) {
          return getDominantColorFromUrl(img.src);
        }
        return color;
      }).then((color) => {
        if (color) row.dataset.color = JSON.stringify(color);
      }).catch(() => {});
    });
  })(rows);

  rows.forEach((row) => {
    row.addEventListener("click", async () => {
      const index = Number(row.dataset.index);
      if (typeof window.setPlaylist === "function") window.setPlaylist(tracks, false);
      if (typeof window.playTrack === "function") window.playTrack(index);
      await highlightRow(index);
    });
  });

  async function highlightRow(index) {
    const allRows = container.querySelectorAll(".song-row");
    allRows.forEach((r) => {
      r.classList.remove("bg-gradient-to-r", "from-[#1DB954]/20", "to-transparent");
      r.style.backgroundImage = "";
      r.style.boxShadow = "";
    });

    const target = container.querySelector(`.song-row[data-index="${index}"]`);
    if (!target) return;

    target.classList.add("bg-gradient-to-r", "from-[#1DB954]/20", "to-transparent");

    let color = null;
    if (target.dataset.color) {
      try { color = JSON.parse(target.dataset.color); } catch(e){ color = null; }
    }

    const img = target.querySelector(".row-cover");
    if (!color) {
      color = await getDominantColorFromImageElement(img).catch(() => null);
      if (!color) color = await getDominantColorFromUrl(img?.src).catch(() => null);
      if (!color) color = { r: 29, g: 185, b: 84, hex: "#1DB954" }; // fallback
      target.dataset.color = JSON.stringify(color);
    }

    applyGradientToRow(target, color);
    applyGradientToHeader(container, color);

    const t = tracks[index];
    if (t) {
      const headerImg = container.querySelector("section img.object-cover");
      const headerTitle = container.querySelector("section h1, section h2");
      const headerArtist = container.querySelector("section .text-neutral-300");
      if (headerImg) headerImg.src = t.cover || "/img/default.jpg";
      if (headerTitle) headerTitle.textContent = t.title || "";
      if (headerArtist) headerArtist.textContent = `${t.artist || ""} • ${tracks.length} songs`;

      const textColor = contrastTextColor(color);
      if (headerTitle) headerTitle.style.color = textColor === "#fff" ? "#fff" : "#000";
    }

    window.__currentSongsView = window.__currentSongsView || {};
    window.__currentSongsView.selectedIndex = index;
    window.__currentSongsView.playlistIds = tracks.map(t => String(t.id));
  }

  if (options.autoplay) {
    if (typeof window.setPlaylist === "function") window.setPlaylist(tracks, false);
    if (typeof window.playTrack === "function") window.playTrack(idx);
    highlightRow(idx);
  } else {
    highlightRow(idx);
  }

  window.__applySongColor = async function(containerEl, targetEl, coverUrl) {
    if (!targetEl || !containerEl) return;
    let color = null;
    if (targetEl.dataset.color) {
      try { color = JSON.parse(targetEl.dataset.color); } catch(e) { color = null; }
    }
    if (!color) {
      const img = targetEl.querySelector(".row-cover");
      color = await getDominantColorFromImageElement(img).catch(() => null);
      if (!color) color = await getDominantColorFromUrl(coverUrl).catch(() => null);
      if (!color) color = { r: 29, g: 185, b: 84, hex: "#1DB954" };
      targetEl.dataset.color = JSON.stringify(color);
    }
    applyGradientToRow(targetEl, color);
    applyGradientToHeader(containerEl, color);
  };

  window.__currentSongsView = {
    playlistIds: tracks.map(t => String(t.id)),
    selectedIndex: idx
  };
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

        if (typeof window.__applySongColor === "function") {
          window.__applySongColor(container, target, track?.cover);
        }

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

function rgbToHex([r, g, b]) {
  const toHex = (v) => v.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function contrastTextColor({ r, g, b }) {
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#000" : "#fff";
}


function getDominantColorFromImageElement(img) {
  return new Promise((resolve) => {
    if (!img) return resolve(null);

    function process() {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const W = 40;
        const H = Math.round((img.naturalHeight / img.naturalWidth) * W) || 40;
        canvas.width = W;
        canvas.height = H;
        ctx.drawImage(img, 0, 0, W, H);

        const data = ctx.getImageData(0, 0, W, H).data;
        const buckets = {}; 
        let total = 0;

        for (let i = 0; i < data.length; i += 4) {
          const a = data[i + 3];
          if (a < 125) continue;

          let r = data[i], g = data[i + 1], b = data[i + 2];

          
          if (r > 240 && g > 240 && b > 240) continue;
          if (r < 10 && g < 10 && b < 10) continue;

          
          const qr = r >> 4;
          const qg = g >> 4;
          const qb = b >> 4;
          const key = (qr << 8) | (qg << 4) | qb;

          if (!buckets[key]) buckets[key] = { count: 0, rSum: 0, gSum: 0, bSum: 0 };
          buckets[key].count++;
          buckets[key].rSum += r;
          buckets[key].gSum += g;
          buckets[key].bSum += b;
          total++;
        }

        let best = null;
        for (const key in buckets) {
          if (!best || buckets[key].count > buckets[best].count) best = key;
        }

        if (!best) {
          
          let rSum = 0, gSum = 0, bSum = 0, cnt = 0;
          for (let i = 0; i < data.length; i += 4) {
            const a = data[i + 3]; if (a < 125) continue;
            rSum += data[i]; gSum += data[i + 1]; bSum += data[i + 2]; cnt++;
          }
          if (cnt === 0) return resolve(null);
          const r = Math.round(rSum / cnt), g = Math.round(gSum / cnt), b = Math.round(bSum / cnt);
          return resolve({ r, g, b, hex: rgbToHex([r, g, b]) });
        }

        const bucket = buckets[best];
        const r = Math.round(bucket.rSum / bucket.count);
        const g = Math.round(bucket.gSum / bucket.count);
        const b = Math.round(bucket.bSum / bucket.count);
        resolve({ r, g, b, hex: rgbToHex([r, g, b]) });
      } catch (err) {
      
        resolve(null);
      }
    }

    if (img.complete && img.naturalWidth) process();
    else {
      const onload = () => { img.removeEventListener("load", onload); img.removeEventListener("error", onerror); process(); };
      const onerror = () => { img.removeEventListener("load", onload); img.removeEventListener("error", onerror); resolve(null); };
      img.addEventListener("load", onload);
      img.addEventListener("error", onerror);
    }
  });
}


function getDominantColorFromUrl(url) {
  return new Promise((resolve) => {
    if (!url) return resolve(null);
    const tmp = new Image();
    tmp.crossOrigin = "Anonymous";
    tmp.src = url;
    tmp.onload = async () => {
      const clr = await getDominantColorFromImageElement(tmp);
      resolve(clr);
    };
    tmp.onerror = () => resolve(null);
  });
}


function applyGradientToRow(row, color) {
  if (!row) return;
  if (!color) {
    
    color = { r: 29, g: 185, b: 84, hex: "#1DB954" };
  }
  const { r, g, b } = color;

  row.style.backgroundImage = `linear-gradient(90deg, rgba(${r},${g},${b},0.18) 0%, rgba(${r},${g},${b},0.06) 40%, transparent 100%)`;
  row.style.boxShadow = `inset 6px 0 18px rgba(${r},${g},${b},0.07)`;
}


function applyGradientToHeader(container, color) {
  if (!container) return;
  if (!color) color = { r: 29, g: 185, b: 84 };
  const { r, g, b } = color;

  const bgWrap = container.querySelector(".songs-page .absolute.inset-0");
  if (!bgWrap) return;
  const overlay = bgWrap.querySelector("div");
  if (!overlay) return;

  overlay.style.background = `linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(${r},${g},${b},0.10) 30%, rgba(0,0,0,0.95) 100%)`;
  overlay.style.transition = "background 300ms ease";
}

