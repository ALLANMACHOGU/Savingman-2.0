import {canvas, ctx} from './canvas'
import {catGroups} from './cats'
import {image} from './savingman'
import {dogGroups} from './dogs'
import {meteoriteShower} from './meteorite'
import {savingMan} from './savingman'
import {scoreboard} from './scoreboard'
import './meteorite'

let colors = ["blue", "purple", "green", "pink" ,"teal", "orange", "indigo" ]
let colorIndex = 0;

let inc = 0;
function changeColor () {
 
     colorIndex += 1

  canvas. style.backgroundColor = colors[colorIndex % colors.length]
  
 
}
canvas.addEventListener(
  'mousemove',
  function(ev) {
    savingMan.x = ev.offsetX - 50;
    savingMan.y = ev.offsetY - 25;
  }
)


export function animate() {
  // erase
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  // update
  update();
  // draw
  draw();
  // Do it again!
  window.requestAnimationFrame(animate)
}

function update() {
 dogGroups.dogs.forEach((dog)=> {
if (savingMan.check(dog.x +25, dog.y +25)) {
      scoreboard.score += 1;
      dog.y = -5
    } 
 })
  
  catGroups.cats.forEach((cat) => {
    if (savingMan.check(cat.x + 25, cat.y + 25)) { 
      console.log(scoreboard.score)
      scoreboard.score += 1,
      cat.y = -5
    }
  }) 

 meteoriteShower.meteorites.forEach((meteorite) => {
    if (savingMan.check(meteorite.x + 25, meteorite.y + 25)) { 
      console.log(scoreboard.score)
      scoreboard.score = 0,
        
      meteorite.x = 505
    
      inc = 0
      canvas.style.backgroundColor = 'white'
    }
  }) 
  
  dogGroups.move();
  catGroups.move();
  meteoriteShower.move();
  savingMan.move();

  if (scoreboard.score == 15 + inc) {
    inc += 15
   
    changeColor();
  }
    }



  

function draw() {
  catGroups.draw();
  dogGroups.draw();
  meteoriteShower.draw();
  savingMan.draw();
  scoreboard.write();
};


