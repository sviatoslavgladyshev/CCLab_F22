let controller;
let funckey=1
let NUM_OF_PARTICLES;
let particles = [];
let indicator;
let pressed;
let distanceToClick;
let controllerDetected;
let temperatureController;
let chrome;
let statusBar;
let numberofIndicators = 4;
let powerButton;
let speedX1 = 1;
let speedX2 = 1;
let speedX3 = 1;
let speedX4 = 1;
let speedY1 = 1;
let speedY2 = 1;
let speedY3 = 1;
let speedY4 = 1;
let numShards = 30;
let spring = 0.01;
let gravity = 0;
let friction = -0.9;
let shards = [];
let xPositionCup;
let liquid = [];
let yLiquid;
let sliceNumb

function setup() {
  let canvas = createCanvas(700, 600);
  canvas.parent("canvasContainer");
  controller = new Controller(85, 490, 90, 45);
  indicator = new Indicator(85, 100, 50, 50);
  // chrome = new Chrome(427-42, 300-32);
  chrome = new Chrome(385, 268);
  statusBar = new StatusBar(118, 410);
  powerButton = new PowerButton(85, 670);
  // }
}

function draw() {
  background(225);
  push();
  rectMode(CENTER);
  strokeWeight(3);
  fill(253, 255, 245);
  rect(85, 360, 125, 350);
  noStroke();
  fill(0);
  rect(85, 360, 15, 300);
  pop();
  drawWindow();
  indicator.display();
  statusBar.display();
  statusBar.update();
  controller.checkIfClicked();
  controller.display();
  controller.update();
  indicator.move();
  chrome.display();
  drawFrame();
  chrome.update();
  drawHeat()
  powerButton.display();
  powerButton.checkIfClicked();
  push();
    particles.push(new Particle(427, 300));
    pop();
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.move();
      p.display();
    }
    while (particles.length > NUM_OF_PARTICLES) {
      particles.splice(0, sliceNumb); // remove the first "oldest" object.
    }
  if ((indicator.temperature >= 1907) & (temperatureController > 310)) {
    NUM_OF_PARTICLES = 50;
    sliceNumb = 1
    
  }
  if ((temperatureController <= 310) & (temperatureController > 260)) {
    NUM_OF_PARTICLES = 200;
   sliceNumb = 15
  }
  if (temperatureController <= 260) {
    NUM_OF_PARTICLES = 450;
   sliceNumb = 100
  }
  if (indicator.temperature < 1907){
    NUM_OF_PARTICLES = 20;
   sliceNumb = 1
  }

  // shards.forEach((shards) => {
  //     shards.place();
  //     shards.update();
  //     shards.display();
  //   })
}

function drawWindow() {
  push();
  rectMode(CENTER);
  strokeWeight(15);
  stroke(43, 45, 47);
  fill(chrome.color2, chrome.color3, 0);
  rect(427, 300, 480, 480, 20);
  pop();
}

function drawHeat() {
  push();
  rectMode(CENTER);
  strokeWeight(15);
  stroke(43, 45, 47);
  fill(chrome.color2, chrome.color3, 0);
  rect(427, 300, 480, 480, 20);
  pop();
}

function drawFrame() {
  push();
  rectMode(CENTER);
  strokeWeight(20);
  stroke(43, 45, 47);
  noFill();
  rect(427, 300, 485, 485, 20);
  pop();
}

function drawHeat() {
  push();
  rectMode(CENTER);
  strokeWeight(20);
  if (indicator.temperature > 0){
    stroke(chrome.color2, chrome.color3, 0, 35);
  } else{
  stroke(43, 45, 47);
  }
  
  noFill();
  rect(427, 300, 485, 485, 20);
  pop();
}

class Controller {
  constructor(xController, yController, widthController, heightController) {
    this.x = xController;
    this.y = yController;
    this.width = widthController;
    this.height = heightController;

    this.controllerY = 500;
  }
  reset(){
    this.y=490
  }
  checkIfClicked() {
    distanceToClick = dist(this.x, this.y, mouseX, mouseY);
    if (distanceToClick < 70) {
      if (mouseIsPressed === true) {
        this.y = mouseY;

        // if (powerButton.color1 == 255 ) {
        if (mouseY > 490) {
          this.y = 490;
        } else if (mouseY < 230) {
          this.y = 230;
        }

        indicator.temperature = round(map(this.y, 230, 490, 1907 * 2, 0));
        temperatureController = this.y;
      }
      temperatureController = this.y;
    }
  }
  // }
  update() {
    // if (powerButton.color1 == 0) {
    //   this.y = 490;
    // }
  }
  display() {
    strokeWeight(3);
    fill(200, 0, 0);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height, 20);
  }
}

class Indicator {
  constructor(xIndicator, yIndicator, widthIndicator, heightIndicator) {
    this.x = xIndicator;
    this.y = yIndicator;
    this.width = widthIndicator;
    this.height = heightIndicator;
    this.temperature = 0;
  }
  reset(){
    this.temperature=0;
  }
  move() {
    // if (powerButton.color1 == 0) {
    //   this.temperature = 0;
    // }
  }

  display() {
    strokeWeight(1);
    fill(0, 0, 128);
    rect(this.x, this.y, 125, 100, 5);
    fill(255);
    push();
    translate(this.x, this.y);
    fill(0, 255, 0);
    textFont("Monaco");
    strokeWeight(0);
    textSize(35);
    text(this.temperature+"°", -50, 15);
    pop();
  }
}

class Chrome {
  constructor(xChrome, yChrome) {
    this.x = xChrome;
    this.y = yChrome;
    this.temperature = 0;
    this.color = 0;
    this.color2=150;
    this.color3=130;
    this.x1Chrome = random(-50, -10);
    this.x2Chrome = random(75, 105);
    this.x3Chrome = random(88, 128);
    this.x4Chrome = random(-60, -20);
    this.y1Chrome = random(-40, -20);
    this.y2Chrome = random(-33, -3);
    this.y3Chrome = random(40, 80);
    this.y4Chrome = random(80, 120);
    this.initialX1 = this.x1Chrome;
    this.initialX2 = this.x2Chrome;
    this.initialX3 = this.x3Chrome;
    this.initialX4 = this.x4Chrome;
    this.initialY1 = this.y1Chrome;
    this.initialY2 = this.y2Chrome;
    this.initialY3 = this.y3Chrome;
    this.initialY4 = this.y4Chrome;
    this.back = 0;
    this.speedX1 = 1;
    this.RX1 = random(0.01, 0.09);
    this.RX2 = random(0.01, 0.09);
    this.RX3 = random(0.01, 0.09);
    this.RX4 = random(0.01, 0.09);
    this.RY1 = random(0.01, 0.09);
    this.RY2 = random(0.01, 0.09);
    this.RY3 = random(0.01, 0.09);
    this.RY4 = random(0.01, 0.09);
    this.RX12 = random(0.1, 0.9);
    this.RX22 = random(0.1, 0.9);
    this.RX32 = random(0.1, 0.9);
    this.RX42 = random(0.1, 0.9);
    this.RY12 = random(0.1, 0.9);
    this.RY22 = random(0.1, 0.9);
    this.RY32 = random(0.1, 0.9);
    this.RY42 = random(0.1, 0.9);
    this.RX13 = random(1, 9);
    this.RX23 = random(1, 9);
    this.RX33 = random(1, 9);
    this.RX43 = random(1, 9);
    this.RY13 = random(1, 9);
    this.RY23 = random(1, 9);
    this.RY33 = random(1, 9);
    this.RY43 = random(1, 9);
  }
  reset(){
    push()
    // if (funckey==0){
      this.x1Chrome = random(-50, 10);
      this.x2Chrome = random(75, 105);
      this.x3Chrome = random(88, 128);
      this.x4Chrome = random(-60, -20);
      this.y1Chrome = random(-40, -20);
      this.y2Chrome = random(-33, -3);
      this.y3Chrome = random(40, 80);
      this.y4Chrome = random(80, 120);
      speedX1 = 1;
      speedX2 = 1;
      speedX3 = 1;
      speedX4 = 1;
      speedY1 = 1;
      speedY2 = 1;
      speedY3 = 1;
      speedY4 = 1;
    
    // }
    pop()
  }
  update() {
    let currentTemp = indicator.temperature;
    this.color = map(currentTemp, 0, 3814, 100, 200);
    this.color2 = map(currentTemp, 0, 3814, 150, 255);
    this.color3 = map(currentTemp, 0, 3814, 130, 150);
 if (temperatureController <490){
    if (indicator.temperature >= 1907) {
      this.x1Chrome = this.x1Chrome - this.RX1 * speedX1;
      this.x2Chrome = this.x2Chrome + this.RX2 * speedX2;
      this.x3Chrome = this.x3Chrome + this.RX3 * speedX3;
      this.x4Chrome = this.x4Chrome - this.RX4 * speedX4;
      this.y1Chrome = this.y1Chrome - this.RY1 * speedY1;
      this.y2Chrome = this.y2Chrome - this.RY2 * speedY2;
      this.y3Chrome = this.y3Chrome + this.RY3 * speedY3;
      this.y4Chrome = this.y4Chrome + this.RY4 * speedY4;
    }
    if (statusBar.colorYellowRed2 == 255) {
      this.x1Chrome = this.x1Chrome - this.RX12 * speedX1;
      this.x2Chrome = this.x2Chrome + this.RX22 * speedX2;
      this.x3Chrome = this.x3Chrome + this.RX32 * speedX3;
      this.x4Chrome = this.x4Chrome - this.RX42 * speedX4;
      this.y1Chrome = this.y1Chrome - this.RY12 * speedY1;
      this.y2Chrome = this.y2Chrome - this.RY22 * speedY2;
      this.y3Chrome = this.y3Chrome + this.RY32 * speedY3;
      this.y4Chrome = this.y4Chrome + this.RY42 * speedY4;
    }
    if (statusBar.colorRed == 255) {
      this.x1Chrome = this.x1Chrome - this.RX13 * speedX1;
      this.x2Chrome = this.x2Chrome + this.RX23 * speedX2;
      this.x3Chrome = this.x3Chrome + this.RX33 * speedX3;
      this.x4Chrome = this.x4Chrome - this.RX43 * speedX4;
      this.y1Chrome = this.y1Chrome - this.RY13 * speedY1;
      this.y2Chrome = this.y2Chrome - this.RY23 * speedY2;
      this.y3Chrome = this.y3Chrome + this.RY33 * speedY3;
      this.y4Chrome = this.y4Chrome + this.RY43 * speedY4;
    }
    if (this.x1Chrome < -195) {
      speedX1 = 0;
    }
    if (this.x2Chrome > 280) {
      speedX2 = 0;
    }
    if (this.x3Chrome > 280) {
      speedX3 = 0;
    }
    if (this.x4Chrome < -195) {
      speedX4 = 0;
    }
    if (this.y1Chrome < -205) {
      speedY1 = 0;
    }
    if (this.y2Chrome < -205) {
      speedY2 = 0;
    }
    if (this.y3Chrome > 270) {
      speedY3 = 0;
    }
    if (this.y4Chrome > 270) {
      speedY4 = 0;
    }
 }
  }
  display() {
    push();
    noStroke();
    // translate(this.x-42, this.y-32);
    translate(this.x, this.y);
    // fill(199, 196, 185);
    fill(this.color);
    beginShape();
    vertex(this.x1Chrome, this.y1Chrome);
    vertex(this.x2Chrome, this.y2Chrome);
    vertex(this.x3Chrome, this.y3Chrome);
    vertex(this.x4Chrome, this.y4Chrome);
    endShape(CLOSE);
    pop();
  }
 

}
class StatusBar {
  constructor(xStatus, yStatus) {
    this.x = xStatus;
    this.y = yStatus;
    this.colorGreen1 = 90;
    this.colorGreen2 = 90;
    this.colorGreen3 = 90;
    this.colorYellowRed1 = 150;
    this.colorYellowRed2 = 150;
    this.colorYellowGreen1 = 150;
    this.colorYellowGreen2 = 150;
    this.colorRed = 90;
  }

  update() {
    if (indicator.temperature >= 400) {
      this.colorGreen1 = 255;
    }
    if (indicator.temperature >= 1000) {
      this.colorGreen2 = 255;
    }
    if (indicator.temperature >= 1550) {
      this.colorGreen3 = 255;
    }
    if (indicator.temperature >= 1907) {
      this.colorYellowRed1 = 255;
      this.colorYellowGreen1 = 255;
    }
    if (indicator.temperature >= 2900) {
      this.colorYellowRed2 = 255;
      this.colorYellowGreen2 = 255;
    }
    if (indicator.temperature >= 3814) {
      this.colorRed = 255;
    }
    if (indicator.temperature < 400) {
      this.colorGreen1 = 90;
    }
    if (indicator.temperature < 1000) {
      this.colorGreen2 = 90;
    }

    if (indicator.temperature < 1550) {
      this.colorGreen3 = 90;
    }
    if (indicator.temperature < 1907) {
      this.colorYellowRed1 = 150;
      this.colorYellowGreen1 = 150;
    }
    if (indicator.temperature < 2900) {
      this.colorYellowRed2 = 150;
      this.colorYellowGreen2 = 150;
    }
    if (indicator.temperature < 3814) {
      this.colorRed = 90;
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    fill(0, this.colorGreen1, 0);
    rect(0, 0, 30, 15);
    fill(0, this.colorGreen2, 0);
    rect(0, -25, 30, 15);
    fill(0, this.colorGreen3, 0);
    rect(0, -50, 30, 15);
    fill(this.colorYellowRed1, this.colorYellowGreen1, 0);
    rect(0, -75, 30, 15);
    fill(this.colorYellowRed2, this.colorYellowGreen2, 0);
    rect(0, -100, 30, 15);
    fill(this.colorRed, 0, 0);
    rect(0, -125, 30, 15);
    pop();
  }

}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xSpd = random(-0.5, 0.5);
    this.ySpd = random(-0.5, 0.5);
    this.dia = random(5, 10);
    let currentTemp2=indicator.temperature
    this.color=this.color = map(currentTemp2, 0, 3814, 100, 230);
  }
  reset(){
    NUM_OF_PARTICLES = 0;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  display() {
    push();
    translate(this.x, this.y);

    noStroke();
    fill(this.color);
    circle(0, 0, this.dia);

    pop();
  }
}

class PowerButton {
  constructor(xButton, yButton) {
    this.x = xButton;
    this.y = yButton;
    this.color1 = 120;
    this.color2 = 100;
    this.pressedT = 0
    this.dia = 40
  }
  checkIfClicked(){
    let distanceToClick1 = dist(this.x, this.y, mouseX, mouseY);
    if(distanceToClick1 < this.dia/2){
      this.color1=0;
      this.color2=0
       this.pressedT = 1
    } 
    console.log(this.pressedT)
  }
  display() {
    push();
    strokeWeight(0);
    noFill();
    circle(40, 567, this.dia);
    fill(50);
    textFont("Beirut");
    strokeWeight(0);
    textSize(12);
    text(
      "New piece of chrome - press Down Arrow",
      20,
      580
    );
    pop();
  }
}

function mousePressed(){
  powerButton.checkIfClicked()
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    funckey = 1
  } else if (keyCode === DOWN_ARROW) {
   funckey=0
    chrome.reset()
    controller.reset()
    indicator.reset()
  }
  console.log(funckey)
}
