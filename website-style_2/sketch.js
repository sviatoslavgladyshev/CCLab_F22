let slider;
let wallColor;

function setup() {
  createCanvas(900, 800);
  slider = createSlider(0, 170, 0);
  slider.position(10, 10);
  slider.style('width', '100px');
  vdnkh = new VDNKh(450, 400);
}

function draw() {
  let val = slider.value();
  background(135-val, 206-val, 235-val);
  wallColor=val;
  vdnkh.display()
  
}

class VDNKh {
  constructor(xVDNKh, yVDNKh) {
    this.x = xVDNKh;
    this.y = yVDNKh;
  }
  move() {
    
  }
  display() {
    noStroke()
    fill(202-wallColor*0.2, 188-wallColor*0.2, 141-wallColor*0.2);
    rect(this.x-450, this.y-50, 70, 500)
    rect(this.x-310, this.y-50, 70, 500)
    rect(this.x-160, this.y-50, 67, 500)
    
    rect(this.x+380, this.y-50, 70, 500)
    rect(this.x+240, this.y-50, 70, 500)
    rect(this.x+103, this.y-50, 70, 500)
    
    
    //балка
    rect(this.x-450, this.y-150, 900, 100)
    rect(this.x-450, this.y-200, 900, 100)
    rect(this.x-150, this.y-233, 300, 33)
    
    fill(176, 141, 53)
    rect(this.x-90, this.y-283, 180, 50)
    rect(this.x-45, this.y-320, 90, 50)
    push()
    strokeWeight(35)
    stroke(213, 207, 179);
    noFill()
    arc(this.x+5, this.y+47, 160, 160, PI, 2*PI);
    pop()
    fill(213, 207, 179);
    rect(this.x-93, this.y+50, 35, 350)
    rect(this.x+68, this.y+50, 35, 350)
    
    fill(158-wallColor*0.1, 115-wallColor*0.1, 62-wallColor*0.1)
    rect(this.x-300, this.y-150, 600, 40)
    rect(this.x-450, this.y-140, 150, 40)
    rect(this.x+300, this.y-140, 150, 40)
    
    fill(210, 210, 210-wallColor*0.4)
    rect(this.x-300, this.y-200, 600, 50)
    rect(this.x-450, this.y-200, 150, 60)
    rect(this.x+300, this.y-200, 150, 60)
    
    rect(this.x-450, this.y-50, 70, 150)
    rect(this.x-310, this.y-50, 70, 150)
    rect(this.x-160, this.y-50, 67, 150)
    
    rect(this.x+380, this.y-50, 70, 150)
    rect(this.x+240, this.y-50, 70, 150)
    rect(this.x+103, this.y-50, 70, 150)
    
    rect(this.x-450, this.y-50, 70, 150)
    rect(this.x-310, this.y-50, 70, 150)
    rect(this.x-160, this.y-50, 67, 150)
    
    fill(158-wallColor*0.1, 115-wallColor*0.1, 62-wallColor*0.1)
    rect(this.x+380, this.y+30, 70, 20)
    rect(this.x+240, this.y+30, 70, 20)
    rect(this.x+103, this.y+30, 70, 20)
    
    rect(this.x-450, this.y+30, 70, 20)
    rect(this.x-310, this.y+30, 70, 20)
    rect(this.x-160, this.y+30, 67, 20)
    
    rect(this.x+380, this.y-50, 70, 30)
    rect(this.x+240, this.y-50, 70, 30)
    rect(this.x+103, this.y-50, 70, 30)
    
    rect(this.x-450, this.y-50, 70, 30)
    rect(this.x-310, this.y-50, 70, 30)
    rect(this.x-160, this.y-50, 67, 30)

    
  }
}