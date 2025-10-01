(function () {
  'use strict';

  // Elements
  const monthBtn = document.querySelector('.calendar__select--month');
  const yearBtn = document.querySelector('.calendar__select--year');
  const prevBtn = document.querySelector('.calendar__nav--prev');
  const nextBtn = document.querySelector('.calendar__nav--next');

  // Toggle aria-expanded for month/year (no popover content implemented, scaffolding only)
  function toggleExpanded(btn) {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
  }

  if (monthBtn) {
    monthBtn.addEventListener('click', () => toggleExpanded(monthBtn));
    monthBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleExpanded(monthBtn);
      }
    });
  }

  if (yearBtn) {
    yearBtn.addEventListener('click', () => toggleExpanded(yearBtn));
    yearBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleExpanded(yearBtn);
      }
    });
  }

  // Prev/Next handlers (stubbed)
  function bounce(el) {
    el.style.transform = 'translateY(-1px)';
    window.requestAnimationFrame(() => {
      setTimeout(() => { el.style.transform = ''; }, 120);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      bounce(prevBtn);
      // placeholder: would update calendar data
      console.log('Previous month clicked');
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      bounce(nextBtn);
      // placeholder: would update calendar data
      console.log('Next month clicked');
    });
  }
})();
