document.getElementById('year').textContent = new Date().getFullYear();

// Potpuno sakrij header na skrol prema dolje, vrati ga TEK na samom vrhu stranice
(function () {
  const header = document.querySelector('header');
  if (!header) return;
  let lastScroll = window.scrollY;

  window.addEventListener('scroll', () => {
    const current = window.scrollY;

    // Ako je korisnik došao na sam vrh stranice (manje od 15px od vrha), odmah prikaži header natrag
    if (current <= 15) {
      header.classList.remove('hide');
      lastScroll = current;
      return;
    }
    
    // Ako skrola prema dolje, potpuno sakrij cijeli bijeli prozor prema gore
    if (current > lastScroll && current > 60) {
      header.classList.add('hide');       
    } else if (current < lastScroll) {
      // Drži ga skrivenim dok skrola prema gore, sve dok ne dodirne sam vrh stranice
    }
    lastScroll = current;
  }, { passive: true });
})();

