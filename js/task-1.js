
const categories = document.querySelectorAll("h2");

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {

  const elements = category.nextElementSibling.querySelectorAll('li');

  console.log(`Category: ${category.textContent}`);  
  console.log(`Elements: ${elements.length}`);
});


// fonts

const linkEl = document.createElement('link');
linkEl.rel = 'stylesheet';
linkEl.href =
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap';
document.head.appendChild(linkEl);
