import "./style.css";
import { scrollToX } from "./modules/scrolltoX";
import { createPlayer } from "./components/Player";
import { createHeader } from "./components/Header";
import { renderTracks } from "./components/Tracks";

// Скролл кнопок библиотеки
const buttonsContainer = document.getElementById("library-buttons");
if (buttonsContainer) scrollToX(buttonsContainer);

// Создаём плейер и хедер
createPlayer();
createHeader();

// Динамическая загрузка треков
document.addEventListener("DOMContentLoaded", async () => {
  await renderTracks();
});

// Плейлисты: hover эффект
document.addEventListener("DOMContentLoaded", () => {
  const playlists = document.querySelectorAll(".playlist-item");
  playlists.forEach(item => {
    item.addEventListener("mouseenter", () => item.classList.add("active"));
    item.addEventListener("mouseleave", () => item.classList.remove("active"));
  });
});

// Навигация: активная ссылка
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('#main-nav .nav-link');
  links.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      links.forEach(el => el.classList.remove("active"));
      item.classList.add("active");
    });
  });
});

// Поиск с очисткой
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchDropdown = document.getElementById("search-dropdown");
  const clearBtn = document.getElementById("clear-btn");

  if (!searchInput) return;

  searchInput.addEventListener("focus", () => {
    if (searchDropdown) searchDropdown.classList.remove("hidden");
  });

  searchInput.addEventListener("input", () => {
    if (searchInput.value.trim() !== "") clearBtn?.classList.remove("opacity-0", "pointer-events-none");
    else clearBtn?.classList.add("opacity-0", "pointer-events-none");
  });

  clearBtn?.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.classList.add("opacity-0", "pointer-events-none");
    searchInput.focus();
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest("#search-container")) searchDropdown?.classList.add("hidden");
  });
});

// Фильтры: активная кнопка
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active-btn"));
      btn.classList.add("active-btn");
    });
  });
});
