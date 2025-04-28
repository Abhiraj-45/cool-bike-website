// Hamburger Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Hover Effect for Buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#ff6f00';
  });

  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = 'orange';
  });
});

// Initialize Swiper
const swiper = new Swiper('.chooseSwiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // For larger screens, display 3 items
    768: {
      slidesPerView: 3,
    },
    // For even larger screens, display 4 items
    1024: {
      slidesPerView: 4,
    },
  },
});