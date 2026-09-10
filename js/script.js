/* =============================================
   LYCÉE JACQUES CARTIER - JS
   ============================================= */

// Header scroll
const header = document.getElementById('header');
if (header) {
    window.addEventListener('scroll', () => {
        header.style.boxShadow = window.pageYOffset > 10 ? '0 2px 8px rgba(0,0,0,0.08)' : 'none';
    });
}

// Search
const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.querySelector('.search-input');
if (searchToggle && searchOverlay) {
    searchToggle.addEventListener('click', () => {
        searchOverlay.classList.toggle('active');
        if (searchOverlay.classList.contains('active') && searchInput) searchInput.focus();
    });
    if (searchClose) searchClose.addEventListener('click', () => searchOverlay.classList.remove('active'));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') searchOverlay.classList.remove('active'); });
}

// Mobile nav
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
const mobileNavClose = document.getElementById('mobileNavClose');
const mobileNavBg = document.getElementById('mobileNavBg');
if (burger && mobileNav) {
    burger.addEventListener('click', () => mobileNav.classList.add('active'));
    const close = () => mobileNav.classList.remove('active');
    if (mobileNavClose) mobileNavClose.addEventListener('click', close);
    if (mobileNavBg) mobileNavBg.addEventListener('click', close);
}

// Hero Slider
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.getElementById('heroDots');
const heroPrev = document.getElementById('heroPrev');
const heroNext = document.getElementById('heroNext');
let currentSlide = 0;
let slideInterval;

if (heroSlides.length > 0 && heroDots) {
    heroSlides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('hero-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        heroDots.appendChild(dot);
    });
    function goToSlide(n) {
        heroSlides[currentSlide].classList.remove('active');
        heroDots.children[currentSlide].classList.remove('active');
        currentSlide = n;
        heroSlides[currentSlide].classList.add('active');
        heroDots.children[currentSlide].classList.add('active');
        resetInterval();
    }
    function nextSlide() { goToSlide((currentSlide + 1) % heroSlides.length); }
    function prevSlide() { goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length); }
    function resetInterval() { clearInterval(slideInterval); slideInterval = setInterval(nextSlide, 5000); }
    if (heroNext) heroNext.addEventListener('click', nextSlide);
    if (heroPrev) heroPrev.addEventListener('click', prevSlide);
    resetInterval();
}

// Back to top
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.pageYOffset > 300);
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Cookie notice
const cookieNotice = document.getElementById('cookieNotice');
if (cookieNotice) {
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => cookieNotice.classList.add('visible'), 2000);
    }
    document.querySelectorAll('.cookie-accept').forEach(btn => {
        btn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', '1');
            cookieNotice.classList.remove('visible');
        });
    });
}

// Active nav
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-item a, .mobile-nav-list a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
        const dropdown = link.closest('.dropdown');
        if (dropdown) {
            const parentLink = dropdown.previousElementSibling;
            if (parentLink) parentLink.classList.add('active');
        }
    }
});
