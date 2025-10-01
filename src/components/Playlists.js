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
      <div class="rounded-xl p-5 flex-1 bg-[#0f0f0f] backdrop-blur-lg pb-40" data-simplebar>
        <div class="flex  mb-8 items-center">
          <h3
  class="text-3xl md:text-5xl font-extrabold spotify-title bg-clip-text text-transparent tracking-tight"
>
  Playlists for you
</h3>

          
        </div>
        
        
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6" id="main-tracks"></div>
      </div>
    </div>
  `;

  const topContainer = playlist.querySelector("#top-tracks");
  randomSidebar.forEach((track, index) => {
    const card = document.createElement("div");
card.className = `
  group relative flex items-center gap-4 
  bg-white/5 rounded-2xl p-3 cursor-pointer
  hover:bg-white/10 transition-all duration-300
`;

card.innerHTML = `
  <div class="">
    <div class="w-[70px] h-[70px] rounded-xl   overflow-hidden shadow-md ">
      <img 
        src="${track.cover}" 
        alt="${track.title}" 
        class="w-full h-full object-cover 
               transition-transform duration-700"
      />
    </div>
    <button class="absolute inset-0 flex items-center justify-center 
                   text-white opacity-0 
                   group-hover:opacity-100 transition-opacity duration-300">
      
    </button>
    <button class="absolute bottom-6 z-20 right-3 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" class="w-6 h-6">
        <path d="M5 3v18l15-9-15-9z"/>
      </svg>
    </button>
  </div>

  <div class="flex flex-col overflow-hidden min-w-0">
    <span class="text-white font-bold truncate text-sm md:text-lg">
      ${track.title}
    </span>
    <span class="text-gray-400 text-xs md:text-sm truncate">
      ${track.artist}
    </span>
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
card.className =
  "group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-br before:from-[#1DB954] before:to-[#191414] before:opacity-0 hover:before:opacity-100 before:transition-opacity";
    card.classList.add("fade-in");
card.style.animationDelay = `${index * 0.05}s`;

card.innerHTML = `
  <div class="relative rounded-2xl overflow-hidden">
    <img src="${pl.cover}" alt="${pl.title}" 
      class="w-full h-[150px] md:h-[210px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110" />
    <button class="absolute bottom-3 z-20 right-3 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" class="w-6 h-6">
        <path d="M5 3v18l15-9-15-9z"/>
      </svg>
    </button>
  </div>
  <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <span class="text-white font-bold block truncate text-sm md:text-base">${pl.title}</span>
    <span class="text-gray-300 text-xs md:text-sm block truncate">${pl.artist}</span>
  </div>
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
    <h3 class="text-3xl md:text-5xl font-extrabold spotify-title bg-clip-text text-transparent tracking-tight">Top Tracks</h3>
  </div>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" id="top-tracks-grid"></div>
`;

playlist.querySelector(".convert .flex-1").appendChild(topTracksWrapper);

const topTracksContainer = topTracksWrapper.querySelector("#top-tracks-grid");

db.topTracks.forEach((track, index) => {
  const card = document.createElement("div");
card.className =
  "group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-br before:from-[#1DB954] before:to-[#191414] before:opacity-0 hover:before:opacity-100 before:transition-opacity";
card.innerHTML = `
  <div class="relative rounded-2xl overflow-hidden">
    <img src="${track.cover}" alt="${track.title}" 
      class="w-full h-[150px] md:h-[210px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110" />
    <button class="absolute bottom-3 right-3 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" class="w-6 h-6">
        <path d="M5 3v18l15-9-15-9z"/>
      </svg>
    </button>
  </div>
  <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <span class="text-white font-bold block truncate text-sm md:text-base">${track.title}</span>
    <span class="text-gray-300 text-xs md:text-sm block truncate">${track.artist}</span>
  </div>
  
`;







  card.addEventListener("click", () => {
    openSongsPage(track.id, { playlist: db.topTracks, index, autoplay: false });
    if (typeof window.setPlaylist === "function") window.setPlaylist(db.topTracks, false);
    if (typeof window.playTrack === "function") window.playTrack(index);
  });
  topTracksContainer.appendChild(card);
});


const listenTodayWrapper = document.createElement('div')
listenTodayWrapper.className = 'mt-12'
listenTodayWrapper.innerHTML = `
  <div class="flex mb-8 items-center">
    <h3 class="text-3xl md:text-5xl font-extrabold spotify-title bg-clip-text text-transparent tracking-tight">Listen Today</h3>
  </div>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" id="top-tracks-grid"></div>
`;

playlist.querySelector('.convert .flex-1').appendChild(listenTodayWrapper);

const listenTodayContainer = listenTodayWrapper.querySelector('#top-tracks-grid')

db.listenToday.forEach((track,index) => {
  const card = document.createElement('div')
  card.className =
  "group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-br before:from-[#1DB954] before:to-[#191414] before:opacity-0 hover:before:opacity-100 before:transition-opacity";
  card.innerHTML = `
  <div class="relative rounded-2xl overflow-hidden">
    <img src="${track.cover}" alt="${track.title}" 
      class="w-full h-[150px] md:h-[210px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110" />
    <button class="absolute bottom-3 right-3 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" class="w-6 h-6">
        <path d="M5 3v18l15-9-15-9z"/>
      </svg>
    </button>
  </div>
  <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <span class="text-white font-bold block truncate text-sm md:text-base">${track.title}</span>
    <span class="text-gray-300 text-xs md:text-sm block truncate">${track.artist}</span>
  </div>
  
`;

card.addEventListener('click', () => {
  openSongsPage(track.id, {playlist: db.listenToday,index, autoplay:false});
  if(typeof window.setPlaylist === "function") window.setPlaylist(db.listenToday,false);
  if(typeof window.playTrack === "function") window.playTrack(index)
})
listenTodayContainer.appendChild(card)

})
  

}
