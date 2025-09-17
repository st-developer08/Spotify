export function createPlayer() {
  const player = document.createElement("div");
  player.className =
    "player z-1000 fixed bottom-0 left-0 w-full h-[90px] bg-black  border-t border-neutral-800 flex items-center justify-between px-6";

  player.innerHTML = `
    <div class="flex items-center gap-4">
  <img src="./public/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp" 
       class="w-14 h-14 rounded" alt="cover" />
  <div class="flex flex-col">
    <span class="text-white font-semibold">Song Name</span>
    <span class="text-gray-400 text-sm">Artist Name</span>
  </div>
</div>

<div class="flex flex-col items-center gap-2 flex-1">
  <div class="flex items-center gap-6">
    <img src="./public/svg/shuffle.svg" class="w-4 h-4 cursor-pointer hover:opacity-100 opacity-70" alt="shuffle" />
    <img src="./public/svg/prev.svg" class="w-4 h-4 cursor-pointer hover:scale-110 transition-transform" alt="prev" />
    <button class="rounded-full p-2 hover:scale-110 transition-transform">
      <img src="./public/svg/play-black.svg" alt="play" />
    </button>
    <img src="./public/svg/next.svg" class="w-4 h-4 cursor-pointer hover:scale-110 transition-transform" alt="next" />
    <img src="./public/svg/repeat.svg" class="cursor-pointer hover:opacity-100 opacity-70" alt="repeat" />
  </div>

  <!-- progress bar -->
  <div class="flex items-center gap-3 w-[500px]">
    <span id="current-time" class="text-gray-400 text-xs">0:00</span>
    <input 
      id="progress-bar" 
      type="range" 
      min="0" 
      max="100" 
      value="30"
      class="w-full appearance-none bg-[#404040] h-1 rounded-lg cursor-pointer
             [&::-webkit-slider-thumb]:appearance-none 
             [&::-webkit-slider-thumb]:w-3 
             [&::-webkit-slider-thumb]:h-3 
             [&::-webkit-slider-thumb]:rounded-full 
             [&::-webkit-slider-thumb]:bg-white 
             [&::-webkit-slider-thumb]:opacity-0 
             hover:[&::-webkit-slider-thumb]:opacity-100 
             [&::-webkit-slider-thumb]:transition 
             [&::-webkit-slider-thumb]:duration-200 
             active:[&::-webkit-slider-thumb]:scale-125
             [&::-moz-range-thumb]:w-3 
             [&::-moz-range-thumb]:h-3 
             [&::-moz-range-thumb]:rounded-full 
             [&::-moz-range-thumb]:bg-white 
             [&::-moz-range-thumb]:border-0 
             [&::-moz-range-thumb]:opacity-0 
             hover:[&::-moz-range-thumb]:opacity-100 
             [&::-moz-range-thumb]:transition 
             [&::-moz-range-thumb]:duration-200 
             active:[&::-moz-range-thumb]:scale-125"
    />
    <span id="total-time" class="text-gray-400 text-xs">3:45</span>
  </div>
</div>

<div class="flex items-center gap-4">
  <img src="./public/svg/playlist.svg" class="cursor-pointer hover:opacity-100 opacity-70" alt="queue" />
  <img src="./public/svg/devices.svg" class="cursor-pointer hover:opacity-100 opacity-70" alt="device" />
  <div class="flex items-center gap-2 w-[120px]">
    <img src="./public/svg/volume.svg" alt="volume" />
    <input 
      id="volume-bar" 
      type="range" 
      min="0" 
      max="100" 
      value="60"
      class="w-full appearance-none bg-[#404040] h-1 rounded-lg cursor-pointer
             [&::-webkit-slider-thumb]:appearance-none 
             [&::-webkit-slider-thumb]:w-3 
             [&::-webkit-slider-thumb]:h-3 
             [&::-webkit-slider-thumb]:rounded-full 
             [&::-webkit-slider-thumb]:bg-white 
             [&::-webkit-slider-thumb]:opacity-0 
             hover:[&::-webkit-slider-thumb]:opacity-100 
             [&::-webkit-slider-thumb]:transition 
             [&::-webkit-slider-thumb]:duration-200 
             active:[&::-webkit-slider-thumb]:scale-125
             [&::-moz-range-thumb]:w-3 
             [&::-moz-range-thumb]:h-3 
             [&::-moz-range-thumb]:rounded-full 
             [&::-moz-range-thumb]:bg-white 
             [&::-moz-range-thumb]:border-0 
             [&::-moz-range-thumb]:opacity-0 
             hover:[&::-moz-range-thumb]:opacity-100 
             [&::-moz-range-thumb]:transition 
             [&::-moz-range-thumb]:duration-200 
             active:[&::-moz-range-thumb]:scale-125"
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
