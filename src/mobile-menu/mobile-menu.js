import './mobile-menu.scss';

const menu = document.querySelector('#menu');
const button = document.querySelector('#menu-button');
const label = button.querySelector('span.sr-only');
const svg = button.querySelector('svg');
const hamburger = {
  top: svg.querySelector('.top'),
  middle: svg.querySelector('.middle'),
  bottom: svg.querySelector('.bottom'),
};
let isOpen = false;

button.addEventListener('click', () => {
  isOpen = !isOpen;
  menu.classList.toggle('js-open', isOpen);
  button.setAttribute('aria-expanded', String(isOpen));
  label.innerHTML = isOpen ? 'Close the menu' : 'Open the menu';

  // Animate the hamburger menu icon.
  if (isOpen) {
    svg.setAttribute('stroke', '#fff');
    hamburger.top.setAttribute('transform', 'translate(0 6) rotate(45 12 6)');
    hamburger.middle.setAttribute('opacity', 0);
    hamburger.bottom.setAttribute('transform', 'translate(0 -6) rotate(-45 12 18)');
  } else {
    svg.setAttribute('stroke', 'currentColor');
    hamburger.top.removeAttribute('transform');
    hamburger.middle.removeAttribute('opacity');
    hamburger.bottom.removeAttribute('transform');
  }
});
