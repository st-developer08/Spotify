export function createPlayer() {
  const player = document.createElement("div");
  player.className =
    "player z-1000 fixed bottom-0 left-0 w-full h-[90px] bg-black border-t border-neutral-800 flex items-center justify-between px-6";

  player.innerHTML = `
    <div class="flex items-center gap-4">
      <img src="/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp" 
           class="w-14 h-14 rounded" alt="cover" />
      <div class="flex flex-col">
        <span class="text-white font-semibold">Song Name</span>
        <span class="text-gray-400 text-sm">Artist Name</span>
      </div>
    </div>

    <div class="flex flex-col items-center gap-2 flex-1">
      <div class="flex items-center gap-6">
        <img src="/svg/shuffle.svg" class="w-4 h-4 cursor-pointer hover:opacity-100 opacity-70" alt="shuffle" />
        <img src="/svg/prev.svg" class="w-4 h-4 cursor-pointer hover:scale-110 transition-transform" alt="prev" />
        <button class="rounded-full p-2 hover:scale-110 transition-transform">
          <img src="/svg/play-black.svg" alt="play" />
        </button>
        <img src="/svg/next.svg" class="w-4 h-4 cursor-pointer hover:scale-110 transition-transform" alt="next" />
        <img src="/svg/repeat.svg" class="cursor-pointer hover:opacity-100 opacity-70" alt="repeat" />
      </div>

      <div class="flex items-center gap-3 w-[500px]">
        <span id="current-time" class="text-gray-400 text-xs">0:00</span>
        <input 
          id="progress-bar" 
          type="range" 
          min="0" 
          max="100" 
          value="30"
          class="w-full appearance-none bg-[#404040] h-1 rounded-lg cursor-pointer"
        />
        <span id="total-time" class="text-gray-400 text-xs">3:45</span>
      </div>
    </div>

    <div class="flex items-center gap-4">
      <img src="/svg/playlist.svg" class="cursor-pointer hover:opacity-100 opacity-70" alt="queue" />
      <img src="/svg/devices.svg" class="cursor-pointer hover:opacity-100 opacity-70" alt="device" />
      <div class="flex items-center gap-2 w-[120px]">
        <img src="/svg/volume.svg" alt="volume" />
        <input 
          id="volume-bar" 
          type="range" 
          min="0" 
          max="100" 
          value="60"
          class="w-full appearance-none bg-[#404040] h-1 rounded-lg cursor-pointer"
        />
      </div>
    </div>
  `;

  document.body.appendChild(player);

  const progressBar = player.querySelector("#progress-bar");
  const volumeBar = player.querySelector("#volume-bar");

  function updateRangeFill(rangeEl, color) {
    const value = (rangeEl.value - rangeEl.min) / (rangeEl.max - rangeEl.min) * 100;
    rangeEl.style.background = `linear-gradient(to right, ${color} ${value}%, #404040 ${value}%)`;
  }

  updateRangeFill(progressBar, "#1db954");
  updateRangeFill(volumeBar, "#1db954");

  progressBar.addEventListener("input", () => {
    updateRangeFill(progressBar, "#1db954");
    console.log("Progress changed:", progressBar.value + "%");
  });

  volumeBar.addEventListener("input", () => {
    updateRangeFill(volumeBar, "#1db954");
    console.log("Volume changed:", volumeBar.value + "%");
  });
}
