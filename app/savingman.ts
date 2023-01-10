import {ctx,canvas} from './canvas';


export const img = document.createElement('img'); 

img.src = 'Savingman.png'; 

document
  .querySelector('#assets')
  .appendChild(img);



export const image = { 
  img,
  ready : img.complete,
  frameWidth : 32,
  frameHeight: 32,
  totalFrames : 5, 
  
  draw (x,y,w=null,h=null,frame) { 
    
    if (this.ready) { // If image is loaded, draw it...
     
     
      frame = frame % this.totalFrames
      ctx.drawImage(
        this.img, // image Element
        this.frameWidth * frame, // Source X
        0, // Source Y
        this.frameWidth, // Source width
        this.frameHeight, // Source Height
        x, // Target X
        y, // Target Y
        w, // Target width
        h // Target Height
      );  
    } else { // Otherwise, draw it in a moment...
      setTimeout(
        ()=>this.draw(x,y,w,h,frame),
        200
      );
    }
  }
}

export let savingMan = {
  // position
  x : 10, 
  y : 220, 
  // which frame
  frame : 0,
  // width and height
  w : 100,
  h : 100,
   
  // Simple draw method...
  draw () {
    image.draw(this.x, this.y, this.w, this.h,this.frame);
  },
  // Move method looks like our earlier code but adds frame
 check(x,y) {
      if (
      // is it to the right of the object
      x >= this.x
      &&
        // is it to the left of the object 
      x <= this.x + this.w
      &&
        // is it above the object
      y >= this.y
      &&
        // is it below the object
      y <= this.y + this.h
    ) {
      return true
    } else {
      return false
    }
  },
  
  move () {
       this.frame += 1;
   }
}

const framesPerSecond = 1;

setInterval(
  ()=>{
    
    ctx.clearRect(200,200,150,150);
    savingMan.frame += 1;
    savingMan.draw();
  },
  0.5 / framesPerSecond,
);


// Update sprite when the image is loaded!
img.addEventListener('load',()=>{
  console.log('Image is loaded!');
  image.ready=true
});

