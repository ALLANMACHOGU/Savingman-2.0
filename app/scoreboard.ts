import {canvas,ctx} from './canvas'
import {savingMan} from './savingman'
import {catGroups} from './cats'
import {dogGroups} from './dogs'
import {meteoriteShower} from './meteorite'

export const scoreboard = {
  score : 0,
  debugMode : true,
  write () {
ctx.font = '14px Futura';  ctx.fillText(`Score: ${this.score}`, 10,50);
    if (this.debugMode) {
      this.writeDebug();
    }
  },
  writeDebug () {
    ctx.font = '16px Courier'
    ctx.fillStyle = 'red'
  }
}