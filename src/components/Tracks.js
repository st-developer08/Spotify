import { updatePlayer } from "./Player";

export async function renderTracks() {
  const container = document.querySelector(".grid.grid-cols-3");

  const res = await fetch("/.netlify/functions/getTracks");
  const tracks = await res.json();

  container.innerHTML = "";

  tracks.forEach(track => {
    const div = document.createElement("div");
    div.className = "track-header flex items-center rounded-md cursor-pointer group relative bg-black/40 hover:bg-black/50";
    div.innerHTML = `
      <img src="${track.cover}" class="w-[55px] h-[55px] object-cover rounded-md"/>
      <div class="flex w-full items-center h-[55px] px-4 font-bold text-white text-base truncate">${track.title}</div>
      <div class="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
        <img src="/svg/play.svg" alt="play" class="w-12 h-12"/>
      </div>
    `;
    container.appendChild(div);

    const audio = new Audio(track.audio);
    div.querySelector("img[alt='play']").addEventListener("click", () => {
      updatePlayer(track, audio);
      audio.play();
    });
  });
}
