// =========================
// Menu Toggle
// =========================
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

// Toggle active class on the nav menu for mobile view
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// =========================
// Scroll Reveal Animations
// =========================
ScrollReveal().reveal('.header__container', {
  delay: 200,
  origin: 'top',
  distance: '50px'
});
ScrollReveal().reveal('.shop__card', {
  interval: 200,
  origin: 'bottom',
  distance: '50px'
});
ScrollReveal().reveal('.about__container', {
  delay: 300,
  origin: 'left',
  distance: '50px'
});
ScrollReveal().reveal('.choose__card', {
  interval: 200,
  origin: 'bottom',
  distance: '50px'
});
ScrollReveal().reveal('.banner__container', {
  delay: 300,
  origin: 'top',
  distance: '50px'
});
ScrollReveal().reveal('.footer__container', {
  delay: 300,
  origin: 'bottom',
  distance: '50px'
});

// =========================
// Swiper Initializations
// =========================

// Shop Swiper for product cards
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Choose Section Swiper for motorcycle options
const chooseSwiper = new Swiper('.chooseSwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2, // Adjust number of slides visible on smaller screens
    },
    1024: {
      slidesPerView: 3, // Adjust number of slides visible on larger screens
    },
  },
});

// =========================
// Sticky Navigation on Scroll
// =========================
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// =========================
// Scroll to Top Button
// =========================
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.classList.add('scroll-to-top-btn');
scrollToTopBtn.innerHTML = '<i class="ri-arrow-up-line"></i>';
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});