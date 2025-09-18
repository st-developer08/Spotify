export function createHeader(){
    const header = document.querySelector('#header')
    header.className =
    "flex items-center justify-between bg-black px-6 py-1" ;

    header.innerHTML = `
              <div class="spotify-logo flex items-center gap-2">
        <img class="w-[40px]" src="../../public/svg/white.svg" alt="Spotify Logo" />
      </div>

      <nav class="flex items-center gap-2 flex-1 justify-center">
        <button class="p-3 rounded-full bg-neutral-800 transition group">
          <img
            src="../../public/svg/home.svg"
            alt="home icon"
            class="w-5 h-5 group-hover:scale-110 transition"
          />
        </button>

        <div id="search-container" class="relative w-[480px]">
          <span
            class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
          >
            <img
              src="../../public/svg/search-sidebar.svg"
              class="w-5 h-5 opacity-70"
              alt="search icon"
            />
          </span>

          <input
            id="search-input"
            type="text"
            placeholder="What do you want to turn on?"
            class="w-full pl-12 pr-10 py-[11px] bg-neutral-900 rounded-full focus:bg-neutral-800 outline-none placeholder-gray-300 transition-all duration-300"
          />

          <button
            id="clear-btn"
            class="absolute right-4 top-1/2 -translate-y-1/2 opacity-1 transition-all duration-200"
          >
            <img src="../../public/svg/trash.svg" class="w-5 h-5" alt="Очистить" />
          </button>

          <!-- Dropdown -->
          <div
            id="search-dropdown"
            class="absolute mt-2 w-full bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg hidden z-50 animate-fadeIn"
          >
            <div class="px-4 py-3 text-sm text-gray-300 font-bold">
              Недавние
            </div>
            <div
              class="px-4 py-2 text-sm text-gray-300 hover:bg-neutral-800 cursor-pointer"
            >
              The Weeknd
            </div>
            <div
              class="px-4 py-2 text-sm text-gray-300 hover:bg-neutral-800 cursor-pointer"
            >
              Drake
            </div>
            <div
              class="px-4 py-2 text-sm text-gray-300 hover:bg-neutral-800 cursor-pointer"
            >
              Lo-Fi Beats
            </div>
          </div>
        </div>
      </nav>

      <div class="flex items-center gap-6">
        <button
          class="rounded-full bg-[#F2F2F2] px-5 py-2 font-bold text-[#191919] text-sm hover:scale-105 transition"
        >
          Explore Premium
        </button>
        <a href="#">
          <img
            class="w-[40px] h-[40px] rounded-full hover:scale-110 transition"
            src="../../public/svg/avatar.svg"
            alt="Avatar"
          />
        </a>
      </div>
    `
}

