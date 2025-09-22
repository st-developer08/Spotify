// src/components/Playlists.js
import db from "../../db.json";
import "../../src/style.css";
import { openSongsPage } from "../pages/songs.js";

export function createPlaylists() {
  const playlist = document.querySelector("#playlists");

  const randomSidebar = [...db.sidebarTracks]
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  playlist.className = "home-center h-full rounded-xl flex flex-col overflow-hidden";

  playlist.innerHTML = `
    <div class="convert overflow-y-auto">
      <div class="relative rounded-2xl p-5 mb-2 overflow-hidden shadow-xl border border-white/10 backdrop-blur-lg bg-animated-dark">
        <div class="relative z-10">
          <h2 class="text-3xl font-extrabold mb-5 tracking-tight text-white">Top Tracks</h2>
          <div class="grid grid-cols-3 gap-4" id="top-tracks"></div>
        </div>
      </div>
      <div class="rounded-xl p-5 flex-1 bg-neutral-900/95 backdrop-blur-lg pb-40" data-simplebar>
        <div class="flex justify-between mb-8 items-center">
          <h3 class="text-4xl font-extrabold text-white tracking-tight">Playlists for you</h3>
          <a class="font-bold text-sm text-gray-400 hover:underline hover:text-white transition" href="#">Show all</a>
        </div>
        <div class="grid grid-cols-5 gap-6" id="main-tracks"></div>
      </div>
    </div>
  `;

  // top tracks
  const topContainer = playlist.querySelector("#top-tracks");
  randomSidebar.forEach((track, index) => {
    const card = document.createElement("div");
    card.className = "group relative flex items-center gap-4 bg-white/5 rounded-xl p-2 cursor-pointer hover:bg-white/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg";
    card.innerHTML = `
      <img src="${track.cover}" alt="${track.title}" class="w-[65px] h-[65px] rounded-lg object-cover shadow-md group-hover:scale-105 transition-transform"/>
      <div class="flex flex-col overflow-hidden">
        <span class="text-white font-bold truncate text-lg">${track.title}</span>
        <span class="text-gray-400 text-sm truncate">${track.artist}</span>
      </div>
    `;
    card.addEventListener("click", () => {
      openSongsPage(track.id, { playlist: randomSidebar, index, autoplay: false });
      if (typeof window.setPlaylist === "function") window.setPlaylist(randomSidebar, false);
      if (typeof window.playTrack === "function") window.playTrack(index);
    });
    topContainer.appendChild(card);
  });

  // main tracks grid
  const mainContainer = playlist.querySelector("#main-tracks");
  db.mainTracks.forEach((pl, index) => {
    const card = document.createElement("div");
    card.className = "group relative bg-gradient-to-br from-neutral-800 via-neutral-900 to-black rounded-2xl p-4 transition-all duration-500 cursor-pointer hover:scale-[1.04] hover:shadow-2xl";
    card.innerHTML = `
      <div class="relative overflow-hidden rounded-xl mb-4">
        <img src="${pl.cover}" alt="${pl.title}" class="rounded-xl w-full h-[180px] object-cover shadow-lg group-hover:scale-110 transition-transform duration-500"/>
      </div>
      <span class="text-white font-bold block truncate text-lg">${pl.title}</span>
      <span class="text-gray-400 text-sm block truncate">${pl.artist}</span>
    `;
    card.addEventListener("click", () => {
      openSongsPage(pl.id, { playlist: db.mainTracks, index, autoplay: false });
      if (typeof window.setPlaylist === "function") window.setPlaylist(db.mainTracks, false);
      if (typeof window.playTrack === "function") window.playTrack(index);
    });
    mainContainer.appendChild(card);
  });

  // equalizer helpers (оставляем как было)
  function clearTopPlaying() {
    const playing = playlist.querySelectorAll(".play-button.playing");
    playing.forEach((b) => b.classList.remove("playing"));
  }

  window.__setTopEqualizer = function (index) {
    try {
      clearTopPlaying();
      const btn = playlist.querySelector(`.play-button[data-index="${index}"]`);
      if (btn) btn.classList.add("playing");
    } catch (e) {}
  };

  window.__clearTopEqualizer = function () {
    try {
      clearTopPlaying();
    } catch (e) {}
  };
}
