function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  let size = 0;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    size += 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesEl.append(box);
  }
}

createBtn.addEventListener('click', handleCreate);
destroyBtn.addEventListener('click', destroyBoxes);

function handleCreate(event) {
  const amount = inputEl.value;

  if (inputEl.value >= 1 && inputEl.value <=100) {
    createBoxes(amount);
    inputEl.value = '';
  }
}

function destroyBoxes(event) {
  boxesEl.innerHTML = "";
}
