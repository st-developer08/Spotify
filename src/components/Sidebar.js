// src/components/Sidebar.js
import db from "../../db.json";
import "../../src/style.css";
import { openSongsPage } from "../pages/songs.js";

export function createSidebar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar.className = "flex flex-col gap-2 w-full h-full overflow-hidden";

  sidebar.innerHTML = `
    <div class="bg-neutral-900 rounded-xl pb-[100px] flex flex-col flex-1 min-h-0 overflow-hidden">
      <div class="flex items-center justify-between px-6 pt-6 mb-4 flex-shrink-0">
        <div class="flex items-center gap-3 text-sm font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer">
          <img src="/svg/library.svg" class="w-5 h-5" alt="library" />
          <p class="text-xl font-bold text-white">Your Library</p>
        </div>
      </div>
      <div class="flex-1 min-h-0 px-6" data-simplebar>
        <ul id="sidebar-tracks" class="flex flex-col"></ul>
      </div>
    </div>
  `;

  const list = sidebar.querySelector("#sidebar-tracks");

  function clearSidebarPlaying() {
    list.querySelectorAll(".play-button.playing").forEach((el) => {
      el.classList.remove("playing");
      el.querySelector(".play-icon").classList.remove("hidden");
      el.querySelector(".equalizer").classList.add("hidden");
    });
  }

  db.sidebarTracks.forEach((track) => {
    const li = document.createElement("li");
    li.className =
      "playlist-item group relative flex items-center justify-between gap-3 cursor-pointer hover:bg-neutral-800 p-2 rounded-lg transition-colors";

    li.innerHTML = `
      <div class="flex items-center gap-3">
        <img src="${track.cover}" alt="${track.title}" class="w-12 h-12 rounded" />
        <div class="flex flex-col">
          <span class="playlist-title text-white font-medium">${track.title}</span>
          <span class="text-gray-400 text-sm">${track.artist}</span>
        </div>
      </div>
      <div class="play-button absolute right-2 flex items-center justify-center transition-all duration-300 ease-out rounded-full p-2 shadow-lg bg-[#1DB954] opacity-0 group-hover:opacity-100">
        <svg class="w-6 h-6 play-icon" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
        <div class="equalizer hidden" aria-hidden="true">
          <span class="bar"></span><span class="bar"></span><span class="bar"></span><span class="bar"></span>
        </div>
      </div>
    `;

    li.addEventListener("click", () => {
      // 1) открываем songs view
      openSongsPage(track.id, { playlist: db.sidebarTracks, index: db.sidebarTracks.findIndex(t => t.id === track.id), autoplay: false });

      // 2) ставим и запускаем в плеере
      const index = db.sidebarTracks.findIndex((t) => t.id === track.id);
      if (typeof window.setPlaylist === "function") {
        window.setPlaylist(db.sidebarTracks, false);
      }
      if (typeof window.playTrack === "function") {
        window.playTrack(index);
      }

      // визуал для sidebar
      clearSidebarPlaying();
      const btn = li.querySelector(".play-button");
      btn.classList.add("playing", "opacity-100");
      btn.querySelector(".play-icon").classList.add("hidden");
      btn.querySelector(".equalizer").classList.remove("hidden");
    });

    list.appendChild(li);
  });

  window.__setSidebarEqualizer = function (index) {
    clearSidebarPlaying();
    const btn = list.querySelectorAll(".play-button")[index];
    if (btn) {
      btn.classList.add("playing", "opacity-100");
      btn.querySelector(".play-icon").classList.add("hidden");
      btn.querySelector(".equalizer").classList.remove("hidden");
    }
  };

  window.__clearSidebarEqualizer = function () {
    clearSidebarPlaying();
  };
}
