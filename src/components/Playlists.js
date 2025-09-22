import db from "../../db.json";
import "../../src/style.css"; 

export function createPlaylists() {
  const playlist = document.querySelector("#playlists");

  const randomSidebar = [...db.sidebarTracks]
    .sort(() => 0.5 )
    .slice(0, 6);

  playlist.className =
    "home-center h-full rounded-xl flex flex-col overflow-hidden";

  playlist.innerHTML = `
    <div class="convert overflow-y-auto">
      <!-- Top Tracks -->
      <div class="relative rounded-2xl p-5 mb-2 overflow-hidden 
            shadow-xl border border-white/10 backdrop-blur-lg
            bg-animated-dark">

        <div class="relative z-10">
          <h2 class="text-3xl font-extrabold mb-5 tracking-tight text-white">
            Top Tracks
          </h2>
          <div class="grid grid-cols-3 gap-4">
            ${randomSidebar
              .map(
                (track, index) => `
                <div class="group relative flex items-center gap-4 
                            bg-white/5 rounded-xl p-2 cursor-pointer 
                            hover:bg-white/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                     data-top-index="${index}">

                  <img src="${track.cover}" alt="${track.title}" 
                       class="w-[65px] h-[65px] rounded-lg object-cover shadow-md group-hover:scale-105 transition-transform"/>

                  <div class="flex flex-col overflow-hidden">
                    <span class="text-white font-bold truncate text-lg">${track.title}</span>
                    <span class="text-gray-400 text-sm truncate">${track.artist}</span>
                  </div>

                  <div class="absolute right-3 flex items-center justify-center 
                              group-hover:translate-y-0
                              transition-all duration-500 ease-out rounded-full p-2 shadow-xl
                              bg-[#1DB954] play-button"
                       data-index="${index}">
                    
                    <svg class="w-7 h-7 play-icon" xmlns="http://www.w3.org/2000/svg" 
                         fill="black" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z"/>
                    </svg>

                    <!-- Equalizer -->
                    <div class="equalizer" aria-hidden="true">
                      <span class="bar"></span>
                      <span class="bar"></span>
                      <span class="bar"></span>
                      <span class="bar"></span>
                    </div>
                  </div>
                </div>
              `
              )
              .join("")}
          </div>
        </div>
      </div>

      <!-- Playlists -->
      <div class="rounded-xl p-5 flex-1 bg-neutral-900/95 backdrop-blur-lg pb-40" data-simplebar>
        <div class="flex justify-between mb-8 items-center">
          <h3 class="text-4xl font-extrabold text-white tracking-tight">Playlists for you</h3>
          <a class="font-bold text-sm text-gray-400 hover:underline hover:text-white transition" href="#">Show all</a>
        </div>
        <div class="grid grid-cols-5 gap-6">
          ${db.mainTracks
            .map(
              (pl, index) => `
                <div class="group relative bg-gradient-to-br from-neutral-800 via-neutral-900 to-black 
                            rounded-2xl p-4 hover:from-neutral-700 hover:to-neutral-900 transition-all 
                            duration-500 cursor-pointer hover:scale-[1.04] hover:shadow-2xl"
                     onclick='window.setPlaylist(${JSON.stringify(
                       db.mainTracks
                     )}, false); window.playTrack(${index})'>
                  <div class="relative overflow-hidden rounded-xl mb-4">
                    <img src="${pl.cover}" alt="${pl.title}" 
                         class="rounded-xl w-full h-[180px] object-cover shadow-lg group-hover:scale-110 transition-transform duration-500"/>
                    <div class="absolute bottom-1 right-2 opacity-0 group-hover:opacity-100 
                                group-hover:translate-y-0
                                transition-all duration-500 ease-out rounded-full p-4 shadow-2xl 
                                bg-[#1DB954]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                           fill="black" class="w-7 h-7">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <span class="text-white font-bold block truncate text-lg">${pl.title}</span>
                  <span class="text-gray-400 text-sm block truncate">${pl.artist}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;

  // ---------- Управление equalizer ----------
  function clearTopPlaying() {
    const playing = playlist.querySelectorAll(".play-button.playing");
    playing.forEach((b) => b.classList.remove("playing"));
  }

  const topGroups = playlist.querySelectorAll("[data-top-index]");
  topGroups.forEach((card) => {
    const idx = Number(card.dataset.topIndex);
    card.addEventListener("click", () => {
      if (typeof window.setPlaylist === "function") {
        window.setPlaylist(randomSidebar, false);
      }
      setTimeout(() => {
        if (typeof window.playTrack === "function") {
          window.playTrack(idx);
        }
      }, 0);

      clearTopPlaying();
      const btn = card.querySelector(".play-button");
      if (btn) btn.classList.add("playing");
    });
  });

  // Глобальные функции для синхронизации с плеером
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

  function pulseBackground(intensity) {
  const el = document.querySelector(".bg-animated-dark");
  if (!el) return;

  const scale = 1 + intensity * 0.05; 
  const bright = 1 + intensity * 0.2;
  const sat = 1 + intensity * 0.1;

  el.style.transform = `scale(${scale})`;
  el.style.filter = `brightness(${bright}) saturate(${sat})`;
}

setInterval(() => {
  const fakeBeat = Math.random() * 0.1;
  pulseBackground(fakeBeat);
}, 10000);

}
