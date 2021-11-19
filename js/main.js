const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    nav.classList.add('show');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    nav.classList.remove('show');
    menuOpen = false;
  }
});