import db from "../../db.json";
import "../../src/style.css";
import { openSongsPage } from "../pages/songs.js";

export function createSidebar() {
  const sidebar = document.querySelector("#sidebar");
  if (!sidebar) return;

  sidebar.className ="hidden md:flex flex-col gap-2 w-full h-[95%] overflow-hidden";

  sidebar.innerHTML = `
    <div class="bg-transparent bg-animated-dark  rounded-xl flex flex-col flex-1 min-h-0 overflow-hidden h-full">
      <div class="flex items-center justify-between px-4 pt-4 pb-2 flex-shrink-0">
        <div class="flex items-center gap-3 text-sm font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer">
          <img src="/svg/library.svg" class="w-5 h-5" alt="library" />
          <p class="text-lg font-bold text-white">My Library</p>
        </div>
      </div>
      <div class="flex-1 min-h-0 px-2 pb-4" data-simplebar>
        <ul id="sidebar-tracks" class="flex flex-col gap-1"></ul>
      </div>
    </div>
  `;

  
  const mobileHolder = document.getElementById("mobile-sidebar-placeholder");
if (mobileHolder) {
  mobileHolder.innerHTML = `<ul id="mobile-sidebar-tracks" class="flex flex-col gap-2"></ul>`;
}


  const list = sidebar.querySelector("#sidebar-tracks");
  const mobileList = document.querySelector("#mobile-sidebar-tracks");

  function clearSidebarActive() {
    list.querySelectorAll(".playlist-item").forEach((el) => {
      el.classList.remove("bg-gradient-to-r", "from-[#1db95433]", "to-transparent");
      const cover = el.querySelector("img");
      const title = el.querySelector(".playlist-title");
      const artist = el.querySelector(".playlist-artist");
      const playIcon = el.querySelector(".active-icon");
      if (cover) cover.classList.remove("ring-2", "ring-[#1DB954]");
      if (title) {
        title.classList.remove("text-[#1DB954]");
        title.classList.add("text-white");
      }
      if (artist) artist.classList.remove("text-gray-300");
      if (playIcon) playIcon.classList.add("hidden");
    });

    if (mobileList) {
      mobileList.querySelectorAll(".playlist-item").forEach((el) => {
        el.classList.remove("bg-gradient-to-r", "from-[#1db95433]", "to-transparent", "opacity-100");
      });
    }
  }

  db.sidebarTracks.forEach((track, idx) => {
    const li = document.createElement("li");
    li.className =
      "playlist-item group relative flex items-center gap-3 cursor-pointer hover:bg-neutral-800 p-2 rounded-lg transition-colors";
    li.dataset.index = String(idx);

    li.innerHTML = `
      <img src="${track.cover}" alt="${track.title}" class="w-12 h-12 rounded transition-all object-cover" />
      <div class="flex flex-col flex-1 min-w-0">
        <div class="flex items-center gap-2">
          <svg class="active-icon w-4 h-4 text-[#1DB954] hidden flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <span class="playlist-title text-white font-medium truncate">${track.title}</span>
        </div>
        <span class="playlist-artist text-gray-400 text-sm truncate">${track.artist}</span>
      </div>
    `;

    const cloneLi = li.cloneNode(true);

    const handleClick = () => {
      openSongsPage(track.id, {
        playlist: db.sidebarTracks,
        index: idx,
        autoplay: false,
      });

      if (typeof window.setPlaylist === "function") {
        window.setPlaylist(db.sidebarTracks, false);
      }
      if (typeof window.playTrack === "function") {
        window.playTrack(idx);
      }

      clearSidebarActive();
      li.classList.add("bg-gradient-to-r", "from-[#1db95433]", "to-transparent");
      li.querySelector("img").classList.add("ring-2", "ring-[#1DB954]");
      li.querySelector(".playlist-title").classList.remove("text-white");
      li.querySelector(".playlist-title").classList.add("text-[#1DB954]");
      li.querySelector(".playlist-artist").classList.add("text-gray-300");
      li.querySelector(".active-icon").classList.remove("hidden");

      if (cloneLi) {
        cloneLi.classList.add("bg-gradient-to-r", "from-[#1db95433]", "to-transparent");
        const mimg = cloneLi.querySelector("img");
        if (mimg) mimg.classList.add("ring-2", "ring-[#1DB954]");
        const mt = cloneLi.querySelector(".playlist-title");
        if (mt) mt.classList.remove("text-white"), mt.classList.add("text-[#1DB954]");
      }

      const offcanvas = document.getElementById("offcanvas-sidebar");
      if (offcanvas && window.innerWidth < 768) {
        offcanvas.classList.add("translate-x-[-100%]", "opacity-0");
      }
    };

    li.addEventListener("click", handleClick);
    li.addEventListener("touchstart", () => li.classList.add("active"));
    li.addEventListener("touchend", () => li.classList.remove("active"));

    list.appendChild(li);

    if (mobileList) {
      cloneLi.addEventListener("click", handleClick);
      mobileList.appendChild(cloneLi);
    }
  });

  const sidebarIds = db.sidebarTracks.map((t) => String(t.id));

  document.addEventListener("player:trackChange", (e) => {
    try {
      const { playlist, index } = e.detail || {};
      if (!playlist || !Array.isArray(playlist)) {
        clearSidebarActive();
        return;
      }
      const incomingIds = playlist.map((t) => String(t.id));
      if (arraysEqual(incomingIds, sidebarIds)) {
        const idx = Number(index);
        if (!Number.isNaN(idx) && idx >= 0 && idx < list.children.length) {
          if (typeof window.__setSidebarActive === "function") {
            window.__setSidebarActive(idx);
          } else {
            clearSidebarActive();
            const li = list.querySelectorAll(".playlist-item")[idx];
            if (li) {
              li.classList.add("bg-gradient-to-r", "from-[#1db95433]", "to-transparent");
              li.querySelector("img").classList.add("ring-2", "ring-[#1DB954]");
              li.querySelector(".playlist-title").classList.remove("text-white");
              li.querySelector(".playlist-title").classList.add("text-[#1DB954]");
              li.querySelector(".playlist-artist").classList.add("text-gray-300");
              li.querySelector(".active-icon").classList.remove("hidden");
              li.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
          }
        } else {
          clearSidebarActive();
        }
      } else {
        clearSidebarActive();
      }
    } catch (err) {
      alert.warn("sidebar sync error:", err);
    }
  });

  window.__setSidebarActive = function (index) {
    clearSidebarActive();
    const li = list.querySelectorAll(".playlist-item")[Number(index)];
    if (li) {
      li.classList.add("bg-gradient-to-r", "from-[#1db95433]", "to-transparent");
      li.querySelector("img").classList.add("ring-2", "ring-[#1DB954]");
      li.querySelector(".playlist-title").classList.remove("text-white");
      li.querySelector(".playlist-title").classList.add("text-[#1DB954]");
      li.querySelector(".playlist-artist").classList.add("text-gray-300");
      const ai = li.querySelector(".active-icon");
      if (ai) ai.classList.remove("hidden");
      li.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  window.__clearSidebarActive = function () {
    clearSidebarActive();
  };

  function arraysEqual(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) if (String(a[i]) !== String(b[i])) return false;
    return true;
  }
}
