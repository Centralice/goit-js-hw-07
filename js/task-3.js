const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', handleInput);

function handleInput(event) {
  if (event.currentTarget.value.trim() === '') {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = event.currentTarget.value.trim();
  }
}

// fonts

const linkEl = document.createElement('link');
linkEl.rel = 'stylesheet';
linkEl.href =
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap';
document.head.append(linkEl);
