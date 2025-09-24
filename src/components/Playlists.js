import db from "../../db.json";
import "../../src/style.css";
import { openSongsPage } from "../pages/songs.js";

export function createPlaylists() {
  const playlist = document.querySelector("#playlists");
  if (!playlist) return;

  const randomSidebar = [...db.sidebarTracks]
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  playlist.className = "home-center  h-full rounded-xl flex flex-col overflow-hidden min-h-0";

  playlist.innerHTML = `
    <div class="convert  overflow-y-auto h-full min-h-0">
      <div class="relative rounded-2xl p-5 mb-2 overflow-hidden shadow-xl border border-white/10 backdrop-blur-lg bg-animated-dark">
        <div class="relative z-10">
          
          <div class="grid grid-cols-2  md:grid-cols-3 gap-4" id="top-tracks"></div>
        </div>
      </div>
      <div class="rounded-xl p-5 flex-1 bg-[#0f0f0f] backdrop-blur-lg pb-40 h-full" data-simplebar>
        <div class="flex  mb-8 items-center">
          <h3 class="text-2xl md:text-4xl font-extrabold text-white tracking-tight">Playlists for you</h3>
          
        </div>
        
        
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" id="main-tracks"></div>
      </div>
    </div>
  `;

  const topContainer = playlist.querySelector("#top-tracks");
  randomSidebar.forEach((track, index) => {
    const card = document.createElement("div");
    card.className = "group relative flex items-center gap-4 bg-white/5 rounded-xl p-2 cursor-pointer hover:bg-white/10 transition-all duration-200";
    card.innerHTML = `
      <img src="${track.cover}" alt="${track.title}" class="w-[60px] h-[60px] rounded-lg object-cover shadow-md group-hover:scale-105 transition-transform"/>
      <div class="flex flex-col overflow-hidden min-w-0">
        <span class="text-white font-bold truncate text-sm md:text-lg">${track.title}</span>
        <span class="text-gray-400 text-xs md:text-sm truncate">${track.artist}</span>
      </div>
    `;
    card.addEventListener("click", () => {
      openSongsPage(track.id, { playlist: randomSidebar, index, autoplay: false });
      if (typeof window.setPlaylist === "function") window.setPlaylist(randomSidebar, false);
      if (typeof window.playTrack === "function") window.playTrack(index);
    });
    topContainer.appendChild(card);
  });

  const mainContainer = playlist.querySelector("#main-tracks");
  db.mainTracks.forEach((pl, index) => {
    const card = document.createElement("div");
    card.className = "group relative bg-gradient-to-br from-neutral-800 via-neutral-900 to-black rounded-2xl p-3 transition-all duration-300 cursor-pointer hover:scale-[1.03] hover:shadow-2xl";
    card.innerHTML = `
      <div class="relative overflow-hidden rounded-xl mb-3">
        <img src="${pl.cover}" alt="${pl.title}" class="rounded-xl w-full h-[140px] md:h-[180px] object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"/>
      </div>
      <span class="text-white font-bold block truncate text-sm md:text-lg">${pl.title}</span>
      <span class="text-gray-400 text-xs md:text-sm block truncate">${pl.artist}</span>
    `;
    card.addEventListener("click", () => {
      openSongsPage(pl.id, { playlist: db.mainTracks, index, autoplay: false });
      if (typeof window.setPlaylist === "function") window.setPlaylist(db.mainTracks, false);
      if (typeof window.playTrack === "function") window.playTrack(index);
    });
    mainContainer.appendChild(card);
  });
  
  const topTracksWrapper = document.createElement("div");
topTracksWrapper.className = "mt-12"; 
topTracksWrapper.innerHTML = `
  <div class="flex mb-8 items-center">
    <h3 class="text-2xl md:text-4xl font-extrabold text-white tracking-tight">Top Tracks</h3>
  </div>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" id="top-tracks-grid"></div>
`;

playlist.querySelector(".convert .flex-1").appendChild(topTracksWrapper);

const topTracksContainer = topTracksWrapper.querySelector("#top-tracks-grid");

db.topTracks.forEach((track, index) => {
  const card = document.createElement("div");
  card.className =
    "group relative bg-gradient-to-br from-neutral-800 via-neutral-900 to-black rounded-2xl p-3 transition-all duration-300 cursor-pointer hover:scale-[1.03] hover:shadow-2xl";
  card.innerHTML = `
    <div class="relative overflow-hidden rounded-xl mb-3">
      <img src="${track.cover}" alt="${track.title}" class="rounded-xl w-full h-[140px] md:h-[180px] object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"/>
    </div>
    <span class="text-white font-bold block truncate text-sm md:text-lg">${track.title}</span>
    <span class="text-gray-400 text-xs md:text-sm block truncate">${track.artist}</span>
  `;
  card.addEventListener("click", () => {
    openSongsPage(track.id, { playlist: db.topTracks, index, autoplay: false });
    if (typeof window.setPlaylist === "function") window.setPlaylist(db.topTracks, false);
    if (typeof window.playTrack === "function") window.playTrack(index);
  });
  topTracksContainer.appendChild(card);
});
}
