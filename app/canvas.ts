export const canvas = document.createElement('canvas');
export const ctx = canvas.getContext('2d');

const appContainer = document.querySelector('#app');
if (appContainer) {
  appContainer.appendChild(canvas);
} else {
  console.warn('No #app container found in the DOM.');
}

let width = 500;
let height = 500;
canvas.width = width;
canvas.height = height;
canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;
canvas.style.border = '5px solid black';
canvas.style.display = 'block';
canvas.style.margin = 'auto';

if (!ctx) {
  console.error('2D context could not be created!');
}

//Reformatted by AI. Will start from scratch on another project, to learn about javascript.