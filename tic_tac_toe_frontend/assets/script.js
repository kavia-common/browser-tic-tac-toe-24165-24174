(function () {
  'use strict';

  function qsAll(sel, root = document) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }

  // Toggle aria-expanded for month/year selects
  qsAll('.select.select-month, .select.select-year').forEach((btn) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
      }
    });
  });

  // Bounce animation for prev/next
  function bounce(el) {
    el.style.transform = 'translateY(-1px)';
    window.requestAnimationFrame(() => {
      setTimeout(() => { el.style.transform = ''; }, 120);
    });
  }

  qsAll('.btn-ctrl').forEach((ctrl) => {
    if (ctrl.classList.contains('is-placeholder')) return;
    ctrl.addEventListener('click', () => {
      bounce(ctrl);
      // stub: update calendar data accordingly
      // console.log('Nav clicked', ctrl.matches('.chevron-left') ? 'prev' : 'next');
    });
  });

})();
