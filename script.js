document.getElementById('year').textContent = new Date().getFullYear();

// Potpuno sakrij header na skrol prema dolje, prikaži na skrol prema gore
(function () {
  const header = document.querySelector('header');
  if (!header) return;
  let lastScroll = window.scrollY;

  window.addEventListener('scroll', () => {
    const current = window.scrollY;

    // Ako je na samom vrhu, prikaži ga
    if (current <= 10) {
      header.classList.remove('hide');
      lastScroll = current;
      return;
    }
    
    // Ako skrola prema dolje i prošao je visinu headera, potpuno ga sakrij
    if (current > lastScroll && current > 60) {
      header.classList.add('hide');       
    } else if (current < lastScroll) {
      // Ako skrola prema gore, vrati ga natrag
      header.classList.remove('hide');    
    }
    lastScroll = current;
  }, { passive: true });
})();
