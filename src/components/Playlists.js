export function createPlaylists(){
    const playlist = document.querySelector('#playlists')

    playlist.className = "home-center h-full rounded-xl flex flex-col overflow-hidden"
    playlist.innerHTML = `
    <div class="convert overflow-y-auto">
          <div class="rounded-xl p-4 bg-animated text-white mb-2 flex-shrink-0">
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-3"></div>
            </div>

            <div class="flex mb-5 items-center gap-2">
              <button class="filter-btn active-btn">Все</button>
              <button class="filter-btn">Музыка</button>
              <button class="filter-btn">Подкасты</button>
            </div>

            <!-- Top tracks -->
            <div class="grid grid-cols-3 gap-2 mb-4 mt-6">
              <div
                class="track-header flex items-center rounded-md overflow-hidden cursor-pointer group relative bg-black/40 hover:bg-black/50 transition-all duration-300 hover:shadow-lg hover:shadow-black/40"
              >
                <img
                  src="/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp"
                  alt=""
                  class="w-[55px] h-[55px] object-cover rounded-md transition duration-300 ease-in-out group-hover:scale-105"
                />
                <div
                  class="flex w-full items-center h-[55px] px-4 font-bold text-white text-base truncate"
                >
                  ZXCURSED
                </div>
                <div
                  class="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center"
                >
                  <img
                    src="/svg/play.svg"
                    alt="play"
                    class="w-12 h-12 drop-shadow-[0_0_10px_rgba(0,255,130,0.7)] hover:scale-110 transition-transform"
                  />
                </div>
              </div>
              <div
                class="track-header flex items-center rounded-md overflow-hidden cursor-pointer group relative bg-black/40 hover:bg-black/50 transition-all duration-300 hover:shadow-lg hover:shadow-black/40"
              >
                <img
                  src="/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp"
                  alt=""
                  class="w-[55px] h-[55px] object-cover rounded-md transition duration-300 ease-in-out group-hover:scale-105"
                />
                <div
                  class="flex w-full items-center h-[55px] px-4 font-bold text-white text-base truncate"
                >
                  ZXCURSED
                </div>
                <div
                  class="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center"
                >
                  <img
                    src="/svg/play.svg"
                    alt="play"
                    class="w-12 h-12 drop-shadow-[0_0_10px_rgba(0,255,130,0.7)] hover:scale-110 transition-transform"
                  />
                </div>
              </div>
              <div
                class="track-header flex items-center rounded-md overflow-hidden cursor-pointer group relative bg-black/40 hover:bg-black/50 transition-all duration-300 hover:shadow-lg hover:shadow-black/40"
              >
                <img
                  src="/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp"
                  alt=""
                  class="w-[55px] h-[55px] object-cover rounded-md transition duration-300 ease-in-out group-hover:scale-105"
                />
                <div
                  class="flex w-full items-center h-[55px] px-4 font-bold text-white text-base truncate"
                >
                  ZXCURSED
                </div>
                <div
                  class="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center"
                >
                  <img
                    src="/svg/play.svg"
                    alt="play"
                    class="w-12 h-12 drop-shadow-[0_0_10px_rgba(0,255,130,0.7)] hover:scale-110 transition-transform"
                  />
                </div>
              </div>
              <div
                class="track-header flex items-center rounded-md overflow-hidden cursor-pointer group relative bg-black/40 hover:bg-black/50 transition-all duration-300 hover:shadow-lg hover:shadow-black/40"
              >
                <img
                  src="/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp"
                  alt=""
                  class="w-[55px] h-[55px] object-cover rounded-md transition duration-300 ease-in-out group-hover:scale-105"
                />
                <div
                  class="flex w-full items-center h-[55px] px-4 font-bold text-white text-base truncate"
                >
                  ZXCURSED
                </div>
                <div
                  class="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center"
                >
                  <img
                    src="/svg/play.svg"
                    alt="play"
                    class="w-12 h-12 drop-shadow-[0_0_10px_rgba(0,255,130,0.7)] hover:scale-110 transition-transform"
                  />
                </div>
              </div>
              <div
                class="track-header flex items-center rounded-md overflow-hidden cursor-pointer group relative bg-black/40 hover:bg-black/50 transition-all duration-300 hover:shadow-lg hover:shadow-black/40"
              >
                <img
                  src="/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp"
                  alt=""
                  class="w-[55px] h-[55px] object-cover rounded-md transition duration-300 ease-in-out group-hover:scale-105"
                />
                <div
                  class="flex w-full items-center h-[55px] px-4 font-bold text-white text-base truncate"
                >
                  ZXCURSED
                </div>
                <div
                  class="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center"
                >
                  <img
                    src="/svg/play.svg"
                    alt="play"
                    class="w-12 h-12 drop-shadow-[0_0_10px_rgba(0,255,130,0.7)] hover:scale-110 transition-transform"
                  />
                </div>
              </div>
              <div
                class="track-header flex items-center rounded-md overflow-hidden cursor-pointer group relative bg-black/40 hover:bg-black/50 transition-all duration-300 hover:shadow-lg hover:shadow-black/40"
              >
                <img
                  src="/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp"
                  alt=""
                  class="w-[55px] h-[55px] object-cover rounded-md transition duration-300 ease-in-out group-hover:scale-105"
                />
                <div
                  class="flex w-full items-center h-[55px] px-4 font-bold text-white text-base truncate"
                >
                  ZXCURSED
                </div>
                <div
                  class="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center"
                >
                  <img
                    src="/svg/play.svg"
                    alt="play"
                    class="w-12 h-12 drop-shadow-[0_0_10px_rgba(0,255,130,0.7)] hover:scale-110 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Playlists section -->
          <div
            class="rounded-xl p-4 flex-1 bg-neutral-900 pb-40"
            data-simplebar
          >
            <div class="flex justify-between mb-6 items-center">
              <h3 class="text-3xl font-bold text-white">Playlists for you</h3>
              <a
                class="font-bold text-sm text-gray-300 hover:underline"
                href="#"
              >
                Show all
              </a>
            </div>

            <div class="grid grid-cols-5 gap-6">
              <!-- Card -->
              <div
                class="group relative flex flex-col bg-neutral-800 rounded-lg p-4 hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                <div class="relative">
                  <img
                    src="/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp"
                    class="rounded-md mb-4 w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <!-- Play button -->
                  <button
                    class="absolute bottom-5 right-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-green-500 rounded-full p-3 shadow-lg hover:scale-110 playlist-icon"
                    style="
                      box-shadow: 0 0 12px rgba(29, 185, 84, 0.8),
                        0 0 24px rgba(29, 185, 84, 0.6);
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                      class="w-6 h-6"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <span class="text-white font-semibold truncate"
                  >Chill Vibes</span
                >
                <span class="text-gray-400 text-sm truncate pb-2"
                  >Playlist · Spotify</span
                >
              </div>
              <div
                class="group relative flex flex-col bg-neutral-800 rounded-lg p-4 hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                <div class="relative">
                  <img
                    src="/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp"
                    class="rounded-md mb-4 w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <!-- Play button -->
                  <button
                    class="absolute bottom-5 right-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-green-500 rounded-full p-3 shadow-lg hover:scale-110 playlist-icon"
                    style="
                      box-shadow: 0 0 12px rgba(29, 185, 84, 0.8),
                        0 0 24px rgba(29, 185, 84, 0.6);
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                      class="w-6 h-6"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <span class="text-white font-semibold truncate"
                  >Chill Vibes</span
                >
                <span class="text-gray-400 text-sm truncate"
                  >Playlist · Spotify</span
                >
              </div>
              <div
                class="group relative flex flex-col bg-neutral-800 rounded-lg p-4 hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                <div class="relative">
                  <img
                    src="/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp"
                    class="rounded-md mb-4 w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <!-- Play button -->
                  <button
                    class="absolute bottom-5 right-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-green-500 rounded-full p-3 shadow-lg hover:scale-110 playlist-icon"
                    style="
                      box-shadow: 0 0 12px rgba(29, 185, 84, 0.8),
                        0 0 24px rgba(29, 185, 84, 0.6);
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                      class="w-6 h-6"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <span class="text-white font-semibold truncate"
                  >Chill Vibes</span
                >
                <span class="text-gray-400 text-sm truncate"
                  >Playlist · Spotify</span
                >
              </div>
              <div
                class="group relative flex flex-col bg-neutral-800 rounded-lg p-4 hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                <div class="relative">
                  <img
                    src="/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp"
                    class="rounded-md mb-4 w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <!-- Play button -->
                  <button
                    class="absolute bottom-5 right-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-green-500 rounded-full p-3 shadow-lg hover:scale-110 playlist-icon"
                    style="
                      box-shadow: 0 0 12px rgba(29, 185, 84, 0.8),
                        0 0 24px rgba(29, 185, 84, 0.6);
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                      class="w-6 h-6"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <span class="text-white font-semibold truncate"
                  >Chill Vibes</span
                >
                <span class="text-gray-400 text-sm truncate"
                  >Playlist · Spotify</span
                >
              </div>
              <div
                class="group relative flex flex-col bg-neutral-800 rounded-lg p-4 hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                <div class="relative">
                  <img
                    src="/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp"
                    class="rounded-md mb-4 w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <!-- Play button -->
                  <button
                    class="absolute bottom-5 right-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-green-500 rounded-full p-3 shadow-lg hover:scale-110 playlist-icon"
                    style="
                      box-shadow: 0 0 12px rgba(29, 185, 84, 0.8),
                        0 0 24px rgba(29, 185, 84, 0.6);
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                      class="w-6 h-6"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <span class="text-white font-semibold truncate"
                  >Chill Vibes</span
                >
                <span class="text-gray-400 text-sm truncate"
                  >Playlist · Spotify</span
                >
              </div>

              <div
                class="group relative flex flex-col bg-neutral-800 rounded-lg p-4 hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                <div class="relative">
                  <img
                    src="/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp"
                    class="rounded-md mb-4 w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <!-- Play button -->
                  <button
                    class="absolute bottom-5 right-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-green-500 rounded-full p-3 shadow-lg hover:scale-110 playlist-icon"
                    style="
                      box-shadow: 0 0 12px rgba(29, 185, 84, 0.8),
                        0 0 24px rgba(29, 185, 84, 0.6);
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                      class="w-6 h-6"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <span class="text-white font-semibold truncate"
                  >Chill Vibes</span
                >
                <span class="text-gray-400 text-sm truncate"
                  >Playlist · Spotify</span
                >
              </div>

              <div
                class="group relative flex flex-col bg-neutral-800 rounded-lg p-4 hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                <div class="relative">
                  <img
                    src="/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp"
                    class="rounded-md mb-4 w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <!-- Play button -->
                  <button
                    class="absolute bottom-5 right-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-green-500 rounded-full p-3 shadow-lg hover:scale-110 playlist-icon"
                    style="
                      box-shadow: 0 0 12px rgba(29, 185, 84, 0.8),
                        0 0 24px rgba(29, 185, 84, 0.6);
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                      class="w-6 h-6"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <span class="text-white font-semibold truncate"
                  >Chill Vibes</span
                >
                <span class="text-gray-400 text-sm truncate"
                  >Playlist · Spotify</span
                >
              </div>
              <div
                class="group relative flex flex-col bg-neutral-800 rounded-lg p-4 hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                <div class="relative">
                  <img
                    src="/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp"
                    class="rounded-md mb-4 w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <!-- Play button -->
                  <button
                    class="absolute bottom-5 right-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-green-500 rounded-full p-3 shadow-lg hover:scale-110 playlist-icon"
                    style="
                      box-shadow: 0 0 12px rgba(29, 185, 84, 0.8),
                        0 0 24px rgba(29, 185, 84, 0.6);
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                      class="w-6 h-6"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <span class="text-white font-semibold truncate"
                  >Chill Vibes</span
                >
                <span class="text-gray-400 text-sm truncate"
                  >Playlist · Spotify</span
                >
              </div>

              <div
                class="group relative flex flex-col bg-neutral-800 rounded-lg p-4 hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                <div class="relative">
                  <img
                    src="/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp"
                    class="rounded-md mb-4 w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <!-- Play button -->
                  <button
                    class="absolute bottom-5 right-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-green-500 rounded-full p-3 shadow-lg hover:scale-110 playlist-icon"
                    style="
                      box-shadow: 0 0 12px rgba(29, 185, 84, 0.8),
                        0 0 24px rgba(29, 185, 84, 0.6);
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                      class="w-6 h-6"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <span class="text-white font-semibold truncate"
                  >Chill Vibes</span
                >
                <span class="text-gray-400 text-sm truncate"
                  >Playlist · Spotify</span
                >
              </div>

              <div
                class="group relative flex flex-col bg-neutral-800 rounded-lg p-4 hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                <div class="relative">
                  <img
                    src="/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp"
                    class="rounded-md mb-4 w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <!-- Play button -->
                  <button
                    class="absolute bottom-5 right-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-green-500 rounded-full p-3 shadow-lg hover:scale-110 playlist-icon"
                    style="
                      box-shadow: 0 0 12px rgba(29, 185, 84, 0.8),
                        0 0 24px rgba(29, 185, 84, 0.6);
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                      class="w-6 h-6"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <span class="text-white font-semibold truncate"
                  >Chill Vibes</span
                >
                <span class="text-gray-400 text-sm truncate"
                  >Playlist · Spotify</span
                >
              </div>
            </div>
          </div>
        </div>
    `
}