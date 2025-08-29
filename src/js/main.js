document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('[data-burger]');
  const nav = document.getElementById('nav');

  burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('is-active');
  });
});

document.querySelectorAll('.custom-select').forEach(select => {
  const trigger = select.querySelector('.custom-select__trigger');
  const options = select.querySelector('.custom-select__options');
  const icon = trigger.querySelector('.custom-select__icon');
  const hiddenInput = select.querySelector('input[type="hidden"]');

  trigger.addEventListener('click', () => {
    options.classList.toggle('open');
    icon.classList.toggle('open');
    trigger.classList.toggle('open');
  });

  options.querySelectorAll('.custom-select__option').forEach(option => {
    option.addEventListener('click', () => {
      trigger.querySelector('span').textContent = option.textContent;
      hiddenInput.value = option.dataset.value;


      options.querySelectorAll('.custom-select__option')
        .forEach(opt => opt.classList.remove('active'));

      // ставим active на выбранный
      option.classList.add('active');

      options.classList.remove('open');
      icon.classList.remove('open');
      trigger.classList.remove('open');
    });
  });

  document.addEventListener('click', e => {
    if (!select.contains(e.target)) {
      options.classList.remove('open');
      icon.classList.remove('open');
      trigger.classList.remove('open');
    }
  });

  document.querySelectorAll('.form__field--range').forEach(field => {
    const range = field.querySelector('.form__control[type="range"]');
    const value = field.querySelector('.form__range-value');

    value.textContent = range.value + '%';

    range.addEventListener('input', () => {
      value.textContent = range.value + '%';
    });
  });
});