document.getElementById('year').textContent = new Date().getFullYear();

// Hide header on scroll down, show on scroll up or at top
(function () {
  const header = document.querySelector('header');
  if (!header) return;
  let lastScroll = window.pageYOffset;

  window.addEventListener('scroll', () => {
    const current = window.pageYOffset;

    if (current <= 0) {
      header.classList.remove('hide');
      lastScroll = current;
      return;
    }
    if (current > lastScroll && current > 80) {
      header.classList.add('hide');       // scrolling down
    } else if (current < lastScroll) {
      header.classList.remove('hide');    // scrolling up
    }
    lastScroll = current;
  }, { passive: true });
})();
