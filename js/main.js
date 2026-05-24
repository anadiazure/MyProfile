/* =========================================================
   Theme toggle (light / dark)
   - Respects saved preference in localStorage
   - Falls back to system preference
   ========================================================= */
(function initTheme() {
  const STORAGE_KEY = 'theme';
  const root = document.documentElement;

  function getInitialTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
  }

  applyTheme(getInitialTheme());

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* ignore quota / privacy mode */
      }
    });
  });
})();

/* =========================================================
   Mobile navigation
   ========================================================= */
(function initMobileNav() {
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.getElementById('primary-menu');
    if (!toggle || !menu) return;

    function close() {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
    }

    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('is-open', !open);
    });

    // Close on link click (mobile)
    menu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', close);
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        close();
      }
    });
  });
})();

/* =========================================================
   Print button (resume)
   ========================================================= */
(function initPrint() {
  document.addEventListener('DOMContentLoaded', () => {
    const printBtn = document.getElementById('print-btn');
    if (!printBtn) return;
    printBtn.addEventListener('click', () => window.print());
  });
})();

/* =========================================================
   Misc
   ========================================================= */
(function initMisc() {
  document.addEventListener('DOMContentLoaded', () => {
    // Update footer year(s)
    document.querySelectorAll('#year').forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  });
})();
