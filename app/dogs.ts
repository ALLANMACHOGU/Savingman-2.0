import {canvas, ctx} from './canvas'
import {scoreboard} from './scoreboard'  
let imageElement = document.querySelector('#dog');
const width = 50;
const height = 50;
export function drawDog(x, y) {
  ctx.drawImage(imageElement, x, y, width, height);
};

export const dogGroups = {
  fallSpeed: 25,
  dogs: [
    { x: 50, y: 0 },
    { x: 275, y: 300 },
    { x: 400, y: 400},
  ],
  add(number) {
    for (let i = 0; i < number; i++) {
      this.dogs.push(
        {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height
        }
      )
    }
  },
  remove(number) {
    for (let i = 0; i < number; i++) {
      this.dogs.pop()
    }
  },
  move() {
    this.dogs.forEach(
      (dog) => {
        dog.y += this.fallSpeed / 10;
        if (dog.y > canvas.height) {
          dog.y = -10;
          if(scoreboard.score > 0) {
           scoreboard.score -= 1
            
          }
        }
        if (dog.x > canvas.width) {
          dog.x = 0;
        }
        if (dog.x < 0) {
          dog.x = canvas.width;
        }
      }
    )
  },


  draw() {
    this.dogs.forEach(
      (dog) => {
          drawDog(dog.x, dog.y);
      }
    )
  }
}

