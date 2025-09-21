import db from "../../db.json";

export function createSidebar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar.className = "flex flex-col gap-2 w-full h-full overflow-hidden";

  sidebar.innerHTML = `
    <div class="bg-neutral-900 rounded-xl pb-36 flex flex-col flex-1 min-h-0 overflow-hidden">
      <!-- Library header -->
      <div class="flex items-center justify-between px-6 pt-6 mb-4 flex-shrink-0">
        <div class="flex items-center gap-3 text-sm font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer">
          <img src="/svg/library.svg" class="w-5 h-5" alt="library" />
          <p class="text-xl font-bold text-white">Your Library</p>
        </div>
      </div>

      <!-- Library list -->
      <div class="flex-1 min-h-0 px-6" data-simplebar>
        <ul id="sidebar-tracks" class="flex flex-col"></ul>
      </div>
    </div>
  `;

  const list = sidebar.querySelector("#sidebar-tracks");

  db.sidebarTracks.forEach((track) => {
    const li = document.createElement("li");
    li.className =
      "playlist-item flex items-center justify-between gap-3 cursor-pointer hover:bg-neutral-800 p-2 rounded-lg transition-colors";
    li.innerHTML = `
      <div class="flex items-center gap-3">
        <img src="${track.cover}" alt="${track.title}" class="w-12 h-12 rounded" />
        <div class="flex flex-col">
          <span class="playlist-title text-white font-medium">${track.title}</span>
          <span class="text-gray-400 text-sm">${track.artist}</span>
        </div>
      </div>
      <img src="/svg/play.svg" class="playlist-icon w-10 h-10 opacity-0 transition-opacity" alt="play" />
    `;

    li.addEventListener("click", () => {
      const index = db.sidebarTracks.findIndex(t => t.id === track.id);
      window.setPlaylist(db.sidebarTracks, false); 
      window.playTrack(index);                   
    });

    list.appendChild(li);
  });
}
