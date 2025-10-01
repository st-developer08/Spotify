import db from "../../db.json";
import { createPlayer } from "../components/Player";

export function createHeader() {
  const header = document.querySelector("#header");
  header.className =
    "flex items-center justify-between px-4 md:px-6 py-2 bg-transparent sticky top-0 z-50";
  header.innerHTML = `
    <div class="flex items-center gap-3">
      <button id="burger-btn" aria-label="Open menu" class="md:hidden p-2 rounded-full hover:bg-white/5 active:scale-95 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
      <div class="spotify-logo flex items-center gap-2">
        <a href="./index.html"><img class="w-9 md:w-10" src="/svg/white.svg" alt="Spotify Logo" /></a>
      </div>
    </div>

    <nav class="flex items-center gap-2 flex-1 justify-center">
      <div id="main-nav" class="hidden md:flex items-center gap-2">
        <button class="p-3 rounded-full bg-neutral-800 transition group active:scale-95">
          <a href="./index.html"><img src="/svg/home.svg" alt="home icon" class="w-5 h-5 group-hover:scale-110 transition" /></a>
        </button>
      </div>

      <div id="search-container" class="relative w-full max-w-[720px] md:w-96 mx-3">
        <span class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <img src="/svg/search-sidebar.svg" class="w-5 h-5 opacity-70" alt="search icon" />
        </span>

        <input id="search-input" type="search" inputmode="search" autocomplete="off" placeholder="Artists, songs, or podcasts"
          aria-label="Search" aria-expanded="false" aria-controls="search-dropdown"
          class="w-full pl-14  py-[10px] text-white bg-neutral-900 rounded-full focus:bg-neutral-800 outline-none placeholder-gray-200 transition-all duration-200 " />

        <button id="clear-btn" aria-label="Clear search" class="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 pointer-events-none transition-all duration-200">
          <img src="/svg/clearbtn.svg" class="w-3 h-3hv" alt="Clear" />
        </button>

        <div id="search-dropdown" role="listbox" aria-label="Search results" class="absolute mt-2 w-full bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl hidden z-50 max-h-[420px] overflow-y-auto"></div>
      </div>
    </nav>

    <div class="flex items-center gap-3">
  <button
    class="hidden md:inline-block rounded-full bg-[#1DB954] text-black px-5 py-2 font-bold text-sm
           hover:scale-105 hover:bg-[#1ed760] active:scale-95 transition shadow-lg">
    Explore Premium
  </button>

  <div class="relative">
    <button id="avatarBtn"
      class="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden
             ring-2 ring-transparent hover:ring-[#1DB954] transition duration-200">
      <img src="/img/l_lawliet.jpg" alt="Avatar"
           class="w-full h-full object-cover" />
    </button>

    <div id="avatarMenu"
      class="absolute right-0 mt-3 w-48 bg-neutral-900 text-white text-sm rounded-xl shadow-xl
             opacity-0 scale-95 origin-top-right pointer-events-none transition-all duration-200 z-50">
      <a href="#" class="block px-4 py-3 rounded-t-xl hover:bg-neutral-800 transition"> Profile</a>
      <a href="#" class="block px-4 py-3 hover:bg-neutral-800 transition"> Settings</a>
      <a href="#" class="block px-4 py-3 hover:bg-neutral-800 transition"> Dark Mode</a>
      <div class="border-t border-neutral-700 my-1"></div>
      <a href="#" class="block px-4 py-3 rounded-b-xl text-red-400 hover:bg-neutral-800 transition"> Log out</a>
    </div>
  </div>
</div>



  `;
  const burgerBtn = header.querySelector("#burger-btn");
  if (burgerBtn) burgerBtn.setAttribute("type", "button");

  const offcanvas = document.getElementById("offcanvas-sidebar");
  const offcanvasClose = document.getElementById("offcanvas-close");
  let backdrop = document.getElementById("offcanvas-backdrop");

  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.id = "offcanvas-backdrop";
    document.body.appendChild(backdrop);
  }

  let _savedScrollY = 0;

  function lockBodyScroll() {
    _savedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
    document.body.style.top = `-${_savedScrollY}px`;
    document.body.classList.add("no-scroll");
  }

  function unlockBodyScroll() {
    document.body.classList.remove("no-scroll");
    document.body.style.top = "";
    window.scrollTo(0, _savedScrollY);
    _savedScrollY = 0;
  }

  function openOffcanvas(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (!offcanvas) return;
    lockBodyScroll();
    offcanvas.classList.add("open");
    offcanvas.setAttribute("aria-hidden", "false");
    offcanvas.setAttribute("tabindex", "-1");
    offcanvas.focus?.();
    backdrop.classList.add("open");
    document.addEventListener("keydown", handleEsc);
  }

  function closeOffcanvas(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (!offcanvas) return;
    offcanvas.classList.remove("open");
    offcanvas.setAttribute("aria-hidden", "true");
    backdrop.classList.remove("open");
    unlockBodyScroll();
    document.removeEventListener("keydown", handleEsc);
  }

  function handleEsc(e) {
    if (e.key === "Escape") closeOffcanvas();
  }

  burgerBtn?.addEventListener("click", openOffcanvas);
  burgerBtn?.addEventListener("touchstart", openOffcanvas, { passive: true });
  offcanvasClose?.addEventListener("click", closeOffcanvas);
  offcanvasClose?.addEventListener("touchstart", closeOffcanvas, {
    passive: true,
  });

  backdrop.addEventListener("click", closeOffcanvas);
  backdrop.addEventListener("touchstart", closeOffcanvas, { passive: true });

  window.addEventListener("orientationchange", () => {
    if (offcanvas && offcanvas.classList.contains("open")) closeOffcanvas();
  });

  const input = header.querySelector("#search-input");
  const clearBtn = header.querySelector("#clear-btn");
  const dropdown = header.querySelector("#search-dropdown");
  const container = header.querySelector("#search-container");

  const normalize = (s) =>
    (s || "")
      .toString()
      .toLowerCase()
      .normalize?.("NFD")
      .replace(/\p{M}/gu, "") || (s || "").toString().toLowerCase();
  const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const allTracksMap = new Map();
  [...(db.sidebarTracks || []), ...(db.mainTracks || [])].forEach((t) => {
    const key = String(t.id ?? t.file ?? JSON.stringify(t));
    if (!allTracksMap.has(key)) allTracksMap.set(key, { ...t, _key: key });
  });
  const allTracks = Array.from(allTracksMap.values());

  const cache = new Map();
  let currentResults = [];
  let selected = -1;
  let lastQuery = "";

  const debounce = (fn, wait = 220) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  };

  const scoreTrack = (track, q) => {
    const nq = normalize(q);
    const title = normalize(track.title);
    const artist = normalize(track.artist);
    if (title === nq || artist === nq) return 100;
    if (title.startsWith(nq)) return 90;
    if (artist.startsWith(nq)) return 80;
    if (title.includes(nq)) return 70;
    if (artist.includes(nq)) return 60;
    return 0;
  };

  const buildItemHTML = (t, i, q) => {
    const qEsc = escapeRegExp(q);
    const re = q ? new RegExp(`(${qEsc})`, "ig") : null;
    const titleHtml = re
      ? t.title.replace(
          re,
          '<span class="bg-emerald-600/30 rounded-sm px-[2px]">$1</span>'
        )
      : t.title;
    const artistHtml = re
      ? t.artist.replace(re, '<span class="text-emerald-400">$1</span>')
      : t.artist;
    return `
      <div role="option" aria-selected="false" data-search-index="${i}"
  class="search-item group flex items-center gap-3 px-3 py-2 rounded-lg
         hover:bg-gradient-to-r hover:from-neutral-800/70 hover:to-neutral-700/40
         cursor-pointer transition-all duration-200 ease-out
         focus-within:ring-2 focus-within:ring-white/50">

  <div class="relative shrink-0">
    <img loading="lazy" src="${t.cover}" alt="${t.title}"
      class="w-12 h-12 rounded-md object-cover shadow-md 
             group-hover:scale-105 group-hover:shadow-lg transition-transform duration-200 ease-out"/>
    <div class="absolute inset-0 rounded-md bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
  </div>

  <div class="flex flex-col min-w-0">
    <div class="truncate text-sm font-semibold text-white group-hover:text-white transition-colors">
      ${titleHtml}
    </div>
    <div class="truncate text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors">
      ${artistHtml}
    </div>
  </div>

  <div class="ml-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200">
    <svg xmlns="http://www.w3.org/2000/svg"
         class="rounded-full w-9 h-9 p-2 bg-green-500 text-white hover:bg-green-600 transition"
         fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z"/>
    </svg>
  </div>
</div>


    `;
  };

  const renderDropdown = (results, query) => {
    currentResults = results;
    selected = -1;
    if (!results || results.length === 0) {
      dropdown.innerHTML = `<div class="px-4 py-4 text-sm text-neutral-400">No results</div>`;
      dropdown.classList.remove("hidden");
      input.setAttribute("aria-expanded", "true");
      return;
    }
    const maxShow = 8;
    const shown = results.slice(0, maxShow);
    const html = `
      <div class="px-2 py-2 text-sm text-neutral-400 font-semibold">Tracks</div>
      ${shown.map((t, i) => buildItemHTML(t, i, query)).join("")}
      ${
        results.length > maxShow
          ? `<div class="px-3 py-2 text-sm text-neutral-400 hover:bg-neutral-800 cursor-pointer rounded-b-md" data-see-all>See ${results.length} results</div>`
          : ""
      }
    `;
    dropdown.innerHTML = html;
    dropdown.classList.remove("hidden");
    input.setAttribute("aria-expanded", "true");
    updateAriaSelection();
  };

  const closeDropdown = () => {
    dropdown.classList.add("hidden");
    input.setAttribute("aria-expanded", "false");
    selected = -1;
  };

  const openAndRender = (q) => {
    if (!q) {
      closeDropdown();
      return;
    }
    const nq = q.trim();
    if (nq.length === 0) {
      closeDropdown();
      return;
    }
    if (cache.has(nq)) {
      renderDropdown(cache.get(nq), q);
      return;
    }
    const results = allTracks
      .map((t) => ({ t, score: scoreTrack(t, nq) }))
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((s) => s.t);
    cache.set(nq, results);
    renderDropdown(results, q);
  };

  const debouncedOpen = debounce(openAndRender, 220);

  const focusItem = (idx) => {
    const prev = dropdown.querySelector('[aria-selected="true"]');
    if (prev) prev.setAttribute("aria-selected", "false");
    const el = dropdown.querySelector(`[data-search-index="${idx}"]`);
    if (el) {
      el.setAttribute("aria-selected", "true");
      el.classList.add("bg-neutral-800");
      el.scrollIntoView({ block: "nearest", behavior: "smooth" });
      selected = idx;
    } else {
      selected = -1;
    }
  };

  const updateAriaSelection = () => {
    dropdown.querySelectorAll("[data-search-index]").forEach((el) => {
      el.setAttribute("aria-selected", "false");
      el.classList.remove("bg-neutral-800");
    });
    if (selected >= 0) {
      const el = dropdown.querySelector(`[data-search-index="${selected}"]`);
      if (el) {
        el.setAttribute("aria-selected", "true");
        el.classList.add("bg-neutral-800");
      }
    }
  };

  const onSelect = (idx) => {
    const track = currentResults[idx];
    if (!track) return;
    if (
      typeof window.setPlaylist === "function" &&
      typeof window.playTrack === "function"
    ) {
      try {
        window.setPlaylist(currentResults, true);
        window.playTrack(idx);
      } catch (e) {
        createPlayer([track]);
      }
    } else {
      createPlayer([track]);
    }
    input.value = "";
    clearBtn.classList.add("opacity-0", "pointer-events-none");
    closeDropdown();
  };

  dropdown.addEventListener("click", (e) => {
    const seeAll = e.target.closest("[data-see-all]");
    if (seeAll) {
      input.value = lastQuery;
      openAndRender(lastQuery);
      return;
    }
    const item = e.target.closest("[data-search-index]");
    if (!item) return;
    const idx = Number(item.getAttribute("data-search-index"));
    onSelect(idx);
  });

  input.addEventListener("input", (e) => {
    const q = e.target.value;
    lastQuery = q;
    if (q.trim().length) {
      clearBtn.classList.remove("opacity-0", "pointer-events-none");
      debouncedOpen(q);
    } else {
      clearBtn.classList.add("opacity-0", "pointer-events-none");
      closeDropdown();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (dropdown.classList.contains("hidden")) {
      if (e.key === "ArrowDown") {
        if (lastQuery.trim().length) debouncedOpen(lastQuery);
        e.preventDefault();
      }
      return;
    }
    const items = dropdown.querySelectorAll("[data-search-index]");
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (items.length === 0) return;
      selected = Math.min(items.length - 1, selected + 1);
      focusItem(selected);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (items.length === 0) return;
      selected = Math.max(0, selected - 1);
      focusItem(selected);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selected >= 0) {
        onSelect(selected);
      } else {
        const first = dropdown.querySelector("[data-search-index]");
        if (first) onSelect(Number(first.getAttribute("data-search-index")));
      }
    } else if (e.key === "Escape") {
      closeDropdown();
      input.blur();
    }
  });

  clearBtn.addEventListener("click", () => {
    input.value = "";
    clearBtn.classList.add("opacity-0", "pointer-events-none");
    closeDropdown();
    input.blur();
  });

  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) closeDropdown();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      input.focus();
      input.select();
    }
  });

  const btn = document.getElementById("avatarBtn");
  const menu = document.getElementById("avatarMenu");

  btn.addEventListener("click", () => {
    const isOpen = menu.classList.contains("opacity-100");
    menu.classList.toggle("opacity-100", !isOpen);
    menu.classList.toggle("scale-100", !isOpen);
    menu.classList.toggle("opacity-0", isOpen);
    menu.classList.toggle("scale-95", isOpen);
    menu.classList.toggle("pointer-events-auto", !isOpen);
    menu.classList.toggle("pointer-events-none", isOpen);
  });

  document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add("opacity-0", "scale-95", "pointer-events-none");
      menu.classList.remove("opacity-100", "scale-100", "pointer-events-auto");
    }
  });
}
