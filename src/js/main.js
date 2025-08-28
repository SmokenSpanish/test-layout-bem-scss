console.log('JS connected');
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('[data-burger]');
  const nav = document.getElementById('nav');
  console.log(burger)
  console.log(nav)

  burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('is-active');
  });
});