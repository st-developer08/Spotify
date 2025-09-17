export function createPlayer() {
  const player = document.createElement("div");
  player.className =
    "player z-1000 fixed bottom-0 left-0 w-full h-[90px] bg-black  border-t border-neutral-800 flex items-center justify-between px-6";

  player.innerHTML = `
    

  `;

  document.body.appendChild(player);

  const progressBar = player.querySelector("#progress-bar");
  const volumeBar = player.querySelector("#volume-bar");

  function updateRangeFill(rangeEl, color) {
    const value =
      ((rangeEl.value - rangeEl.min) / (rangeEl.max - rangeEl.min)) * 100;
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
