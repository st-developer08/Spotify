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
  <div class="flex items-center gap-3 w-full max-w-full">
    <!-- обложка -->
    <div class="relative min-w-[60px] h-[60px] md:min-w-[70px] md:h-[70px] rounded-xl overflow-hidden shadow-md group">
      <img 
        src="${track.cover}" 
        alt="${track.title}" 
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <button class="absolute inset-0 flex items-center justify-center 
                     text-white opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300">
      </button>

      <button class="absolute bottom-3 right-3 w-10 h-10 md:w-12 md:h-12 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" class="w-5 h-5 md:w-6 md:h-6">
          <path d="M5 3v18l15-9-15-9z"/>
        </svg>
      </button>
    </div>

    <div class="flex flex-col min-w-0 overflow-hidden">
      <span class="text-white font-bold truncate text-sm sm:text-base md:text-lg lg:text-xl block w-full max-w-[65vw] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px]">
        ${track.title}
      </span>
      <span class="text-gray-400 truncate text-xs sm:text-sm md:text-base lg:text-lg block w-full max-w-[60vw] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px]">
        ${track.artist}
      </span>
    </div>
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
  <div class="absolute bottom-0 pr-16 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
  <div class="absolute bottom-0 pr-16 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
  <div class="absolute bottom-0 pr-16 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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


  const footer = document.createElement("footer");
  footer.className = " text-gray-400 mt-12 px-8 py-12  ";

  footer.innerHTML = `
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
    <div>
      <h3 class="text-white font-bold mb-3">Компания</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-white transition-colors duration-200">О нас</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Вакансии</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">For the Record</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-white font-bold mb-3">Сообщества</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-white transition-colors duration-200">Для исполнителей</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Для разработчиков</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Реклама</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Для инвесторов</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Для вендоров</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-white font-bold mb-3">Полезные ссылки</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-white transition-colors duration-200">Справка</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Бесплатное мобильное приложение</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Популярное в разных странах</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Import your music</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-white font-bold mb-3">Планы Spotify</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-white transition-colors duration-200">Индивидуальная подписка</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Spotify Premium</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Premium для двоих</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Premium для семьи</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Premium для студентов</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Бесплатная версия Spotify</a></li>
      </ul>
    </div>
  </div>
  <div class="border-t border-gray-700 mt-8 pt-6 text-sm flex flex-wrap justify-between">
    <div class="flex flex-wrap gap-4 mb-4 md:mb-0">
      <a href="#" class="hover:text-white transition-colors duration-200">Юридическая информация</a>
      <a href="#" class="hover:text-white transition-colors duration-200">Центр безопасности и конфиденциальности</a>
      <a href="#" class="hover:text-white transition-colors duration-200">Политика конфиденциальности</a>
      <a href="#" class="hover:text-white transition-colors duration-200">Файлы cookie</a>
      <a href="#" class="hover:text-white transition-colors duration-200">О рекламе</a>
      <a href="#" class="hover:text-white transition-colors duration-200">Специальные возможности</a>
    </div>
    <p>© 2025 Spotify AB</p>
  </div>
`;


 playlist.querySelector(".convert .flex-1").appendChild(footer);

  
}




