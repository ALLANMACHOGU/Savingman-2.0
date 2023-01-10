import {canvas,ctx} from './canvas'
import {scoreboard} from './scoreboard'
let imageElement = document.querySelector('#meteorite');
const width = 60;
const height = 60;
export function drawMeteorite(x, y) {
  ctx.drawImage(imageElement, x, y, width, height);
};

export const meteoriteShower = {
  fallSpeed: 25,
  meteorites: [
    { x: 100, y: 0 },
    { x: 250, y: 300 },
    { x: 225, y: 405},
    { x: 300, y: 150},
    { x: 405, y: 201},
    { x: 350, y: 350},
    
  ],
  add(number) {
    for (let i = 0; i < number; i++) {
      this.meteorites.push(
        {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height
        }
      )
    }
  },
  remove(number) {
    for (let i = 0; i < number; i++) {
      this.meteorites.pop()
    }
  },
  move() {
    this.meteorites.forEach(
      (meteorite) => {
        meteorite.y += this.fallSpeed / 10;
        meteorite.x -= 2;
        if (meteorite.y > canvas.height) {
          meteorite.y = -10;
        }
        if (meteorite.x > canvas.width) {
          meteorite.x = 0;
        }
        if (meteorite.x < 0) {
          meteorite.x = canvas.width;
        }
        if (scoreboard.score > 100) {
          meteorite.y += 4
          meteorite.x -= 1.5;
        }
        if (scoreboard.score > 200) {
          meteorite.y += 5
          meteorite.x -= 3.5
        }
      }
    )
  },


  draw() {
    this.meteorites.forEach(
      (meteorite) => {
          drawMeteorite(meteorite.x, meteorite.y);
      }
    )
  }
}

