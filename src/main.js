import "./style.css";

import { createSidebar } from "./components/Sidebar";
import { scrollToX } from "./modules/scrolltoX";
import { createPlayer } from "./components/Player";
import { createHeader } from "./components/Header";
import { createPlaylists } from "./components/Playlists";

document.addEventListener("DOMContentLoaded", () => {
  // Инициализация UI
  createHeader();
  createPlayer();
  createSidebar();
  createPlaylists();

  // Горизонтальный скролл (если есть)
  const buttonsContainer = document.getElementById("library-buttons");
  if (buttonsContainer) scrollToX(buttonsContainer);

  // Hover -> tap friendly: переиспользуем active/pressed классы
  const playlists = document.querySelectorAll(".playlist-item");
  playlists.forEach(item => {
    item.addEventListener("mouseenter", () => item.classList.add("active"));
    item.addEventListener("mouseleave", () => item.classList.remove("active"));
    // mobile tap visual feedback (touchstart)
    item.addEventListener("touchstart", () => item.classList.add("active"));
    item.addEventListener("touchend", () => item.classList.remove("active"));
  });

  // Активные ссылки в навигации
  const links = document.querySelectorAll('#main-nav .nav-link');
  links.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      links.forEach(el => el.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // Поиск: управление overlay для мобильного
  const searchInput = document.getElementById("search-input");
  const searchDropdown = document.getElementById("search-dropdown");
  const clearBtn = document.getElementById("clear-btn");
  const mobileSearchOverlay = document.getElementById("mobile-search-overlay");

  if (searchInput && searchDropdown && clearBtn) {
    searchInput.addEventListener("focus", () => {
      // на мобильных покажем overlay (css контролирует вид)
      if (window.innerWidth < 768 && mobileSearchOverlay) {
        mobileSearchOverlay.classList.remove("hidden");
        mobileSearchOverlay.querySelector("input")?.focus();
      } else {
        searchDropdown.classList.remove("hidden");
      }
    });

    searchInput.addEventListener("input", () => {
      if (searchInput.value.trim() !== "") {
        clearBtn.classList.remove("opacity-0", "pointer-events-none");
      } else {
        clearBtn.classList.add("opacity-0", "pointer-events-none");
      }
    });

    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.classList.add("opacity-0", "pointer-events-none");
      searchInput.focus();
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest("#search-container")) {
        searchDropdown.classList.add("hidden");
      }
    });
  }

  // close mobile search overlay
  if (mobileSearchOverlay) {
    mobileSearchOverlay.querySelector(".close-search")?.addEventListener("click", () => {
      mobileSearchOverlay.classList.add("hidden");
    });
  }

  // Burget / offcanvas sidebar toggle
  const burgerBtn = document.getElementById("burger-btn");
  const offCanvas = document.getElementById("offcanvas-sidebar");
  const offCanvasClose = document.getElementById("offcanvas-close");

  if (burgerBtn && offCanvas) {
    burgerBtn.addEventListener("click", () => {
      offCanvas.classList.toggle("translate-x-0");
      offCanvas.classList.toggle("translate-x-[-100%]");
      offCanvas.classList.toggle("opacity-100");
      offCanvas.classList.toggle("opacity-0");
    });
  }
  if (offCanvasClose && offCanvas) {
    offCanvasClose.addEventListener("click", () => {
      offCanvas.classList.add("translate-x-[-100%]", "opacity-0");
    });
  }

  // Filters: mobile tap friendly
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active-btn"));
      btn.classList.add("active-btn");
    });
  });

  // Resize: if screen widened, ensure offcanvas hidden
  window.addEventListener("resize", () => {
    const off = document.getElementById("offcanvas-sidebar");
    if (off && window.innerWidth >= 768) {
      off.classList.add("translate-x-[-100%]", "opacity-0");
    }
    // hide mobile-search-overlay on desktop
    const mob = document.getElementById("mobile-search-overlay");
    if (mob && window.innerWidth >= 768) mob.classList.add("hidden");
  });
});
