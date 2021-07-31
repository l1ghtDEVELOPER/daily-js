const body = document.querySelector('body');
const themeBtn = document.querySelector('.theme-btn');
const sunMoonContainer = document.querySelector('.sun-moon-container');

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const currentRotation = parseInt(
    getComputedStyle(sunMoonContainer).getPropertyValue('--rotation')
  );
  sunMoonContainer.style.setProperty('--rotation', currentRotation + 180);
});
