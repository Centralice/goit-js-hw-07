function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bgC = document.querySelector('body');
const btnEl = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

btnEl.addEventListener('click', handleClick)

function handleClick() {
  bgC.style.backgroundColor = getRandomHexColor();
  colorName.innerHTML = bgC.style.backgroundColor;
}

