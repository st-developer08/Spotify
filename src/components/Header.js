export function createHeader(){
  const header = document.querySelector('#header')
  header.className = "flex items-center justify-between px-4 md:px-6 py-3 bg-transparent sticky top-0 z-50";

  header.innerHTML = `
    <div class="flex items-center gap-3">
      <!-- Burger visible on mobile -->
      <button id="burger-btn" aria-label="Open menu" class="md:hidden p-2 rounded-full hover:bg-white/5 active:scale-95 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      <div class="spotify-logo flex items-center gap-2">
        <a href="#"><img class="w-9 md:w-10" src="/svg/white.svg" alt="Spotify Logo" /></a>
      </div>
    </div>

    <nav class="flex items-center gap-2 flex-1 justify-center">
      <div id="main-nav" class="hidden md:flex items-center gap-2">
        <button class="p-3 rounded-full bg-neutral-800 transition group active:scale-95">
          <img src="/svg/home.svg" alt="home icon" class="w-5 h-5 group-hover:scale-110 transition" />
        </button>
        <!-- other nav icons could go here -->
      </div>

      <div id="search-container" class="relative w-full max-w-[720px] md:w-96 mx-3">
        <span class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <img src="/svg/search-sidebar.svg" class="w-5 h-5 opacity-70" alt="search icon" />
        </span>

        <input id="search-input" type="text" placeholder="What do you want to turn on?"
          class="w-full pl-12 pr-10 py-[10px] bg-neutral-900 rounded-full focus:bg-neutral-800 outline-none placeholder-gray-300 transition-all duration-200" />

        <button id="clear-btn" class="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 pointer-events-none transition-all duration-200">
          <img src="/svg/trash.svg" class="w-5 h-5" alt="Clear" />
        </button>

        <!-- Dropdown -->
        <div id="search-dropdown" class="absolute mt-2 w-full bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg hidden z-50 animate-fadeIn">
          <div class="px-4 py-3 text-sm text-gray-300 font-bold">Recent</div>
          <div class="px-4 py-2 text-sm text-gray-300 hover:bg-neutral-800 cursor-pointer">The Weeknd</div>
          <div class="px-4 py-2 text-sm text-gray-300 hover:bg-neutral-800 cursor-pointer">Drake</div>
          <div class="px-4 py-2 text-sm text-gray-300 hover:bg-neutral-800 cursor-pointer">Lo-Fi Beats</div>
        </div>
      </div>
    </nav>

    <div class="flex items-center gap-3">
      <button class="hidden md:inline-block rounded-full bg-[#F2F2F2] px-4 py-2 font-bold text-[#191919] text-sm hover:scale-105 transition">Explore Premium</button>
      <a href="#"><img class="w-9 h-9 rounded-full hover:scale-110 transition" src="/svg/avatar.svg" alt="Avatar" /></a>
    </div>

    <!-- Offcanvas sidebar for mobile -->
    <aside id="offcanvas-sidebar" class="fixed top-0 left-0 z-50 h-full w-[85%] max-w-xs bg-[#0f0f0f] p-4 transform transition-transform duration-300 translate-x-[-100%] opacity-0 md:hidden shadow-2xl">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <img src="/svg/white.svg" class="w-8" alt="logo" />
          <strong class="text-white">Library</strong>
        </div>
        <button id="offcanvas-close" class="p-2 rounded-full hover:bg-white/5 active:scale-95 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95A1 1 0 013.636 14.95L8.586 10 3.636 5.05A1 1 0 015.05 3.636L10 8.586z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div id="offcanvas-content" class="overflow-y-auto h-[calc(100%-64px)]">
        <!-- Sidebar content will be rendered into #sidebar by createSidebar (on md it's separate). 
             To reuse the same markup, createSidebar writes into #sidebar — we also clone it here for mobile. -->
        <div id="mobile-sidebar-placeholder" class="min-h-[200px] text-neutral-400">Loading...</div>
      </div>
    </aside>

    <!-- Mobile search overlay (fullscreen) -->
    <div id="mobile-search-overlay" class="hidden fixed inset-0 z-50 bg-black/95 p-4 md:hidden">
      <div class="flex items-center gap-3 mb-4">
        <input id="mobile-search-input" class="w-full py-3 px-4 rounded-full bg-neutral-900 placeholder-gray-400 outline-none" placeholder="Search music..." />
        <button class="close-search p-2 rounded-full hover:bg-white/5 active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="text-neutral-400">Recent searches & suggestions...</div>
    </div>
  `
}
