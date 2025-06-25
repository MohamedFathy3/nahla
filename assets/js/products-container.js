document.addEventListener('DOMContentLoaded', function () {
  const productsWrapper = document.querySelector('.products-wrapper');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const cards = Array.from(document.querySelectorAll('.product-card'));
  let currentIndex = Math.floor(cards.length / 2);

  function setActive(index) {
    cards.forEach(card => card.classList.remove('active'));
    if (cards[index]) {
      cards[index].classList.add('active');
      cards[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }

  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      currentIndex = i;
      setActive(i);
    });
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      setActive(currentIndex);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      setActive(currentIndex);
    }
  });

  setActive(currentIndex);
});
