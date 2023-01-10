import {canvas,ctx} from './canvas'
import {scoreboard} from './scoreboard'  
let imageElement = document.querySelector('#cat')
const width = 45;
const height = 45;
export function drawCat(x,y) {
  ctx.drawImage(imageElement, x, y, width, height);
};

export const catGroups = {
  fallSpeed: 25,
  cats: [
    { x: 350, y: 350 },
    { x: 125, y: 250 },
    { x: 225, y: 150},

  ],
  add(number) {
    for (let i = 0; i < number; i++) {
      this.cats.push(
        {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height
        }
      )
    }
  },
  remove(number) {
    for (let i = 0; i < number; i++) {
      this.cats.pop()
    }
  },
  move() {
    this.cats.forEach(
      (cat) => {
        cat.y += this.fallSpeed / 10;
        if (cat.y > canvas.height) {
          cat.y = -10;
          if(scoreboard.score > 0) {
             scoreboard.score -= 1
          }
         
        }
        // is the cat greater than the canvas width
        if (cat.x > canvas.width) {
          // then the cat's X starts at 0 (isnt in the code, but in case)
          cat.x = 0;
        }
        if (cat.x < 0) {
          cat.x = canvas.width;
        }
      }
    )
  },


  draw() {
    this.cats.forEach(
      (cat) => {
          drawCat(cat.x, cat.y);
      }
    )
  }
}

