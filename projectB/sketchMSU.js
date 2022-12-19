let windowColor;
let slider;

function setup() {
  createCanvas(900, 800);
  MSU = new MSU(450, 400);
  slider = createSlider(0, 170, 0);
  slider.position(10, 10);
  slider.style('width', '100px');
}

function draw() {
  let val = slider.value();
  background(135-val, 206-val, 235-val);
  
  windowColor=val
  
  
  
  MSU.display()
}

class MSU {
  constructor(xMSU, yMSU) {
    this.x = xMSU;
    this.y = yMSU;
  }
  display() {
    // noStroke()
    //соединительный корпус
    fill(246, 226, 152);
    rect(this.x+100, this.y+201, 300, 300);
    rect(this.x-350, this.y+201, 300, 300);
    //основной корпус
    fill(226, 202, 149)
    rect(this.x-115, this.y, 230, 460);
    //основания башенок
    fill(248, 250, 170);
    rect(this.x-450, this.y+160, 120, 300);
    rect(this.x+330, this.y+160, 120, 300);
    //верхушка башенок
    fill(226, 211, 168);
    rect(this.x-430, this.y+90, 80, 70);
    rect(this.x+350, this.y+90, 80, 70);
    //основания чаш
    push()
    noStroke()
    fill(201, 169, 142)
    rect(this.x+375, this.y+50, 32, 40);
    rect(this.x-406, this.y+50, 32, 40);
    pop()
    //чаши
    push()
    translate(this.x-390, this.y+22.8)
    rotate(radians(0))
    noStroke()
    fill(247, 182, 56)
    arc(0, 0, 55, 55, 0, PI);
    pop()
    push()    
    translate(this.x+392, this.y+22.8)
    rotate(radians(0))
    noStroke()
    fill(247, 182, 56)
    arc(0, 0, 55, 55, 0, PI);
    pop()
    //первый блок после основного у ГЗ
    noStroke()
    fill(217, 204, 167);
    rect(this.x-85, this.y-20, 170, 20);
    //второй блок
    fill(246, 226, 152);
    rect(this.x-65, this.y-110, 130, 90);
    fill(121, 145, 173)
    rect(this.x-4, this.y-70, 8, 40);
    rect(this.x-20, this.y-70, 8, 40);
    rect(this.x+12, this.y-70, 8, 40)
    fill(156, 76, 57)
    rect(this.x-28, this.y-105, 55, 30);
    
    //бока второго блока
    fill(231, 197, 119)
    rect(this.x-65, this.y-110, 30, 90)
    rect(this.x+35, this.y-110, 30, 90)
    fill(172, 157, 162)
    rect(this.x-52, this.y-75, 4, 50)
    rect(this.x+48, this.y-75, 4, 50)
    fill(167, 60, 32)
    square(this.x-61.5, this.y-75, 7)
    square(this.x-45.5, this.y-75, 7)
    square(this.x+55, this.y-75, 7)
    square(this.x+38, this.y-75, 7)
    square(this.x-60, this.y-100, 20)
    square(this.x+40, this.y-100, 20)
    
    //третий блок
    fill(220, 202, 160);
    rect(this.x-42, this.y-135, 84, 25);
    //
    fill(171, 57, 31)
    rect(this.x-42, this.y-114, 84, 6);
    //
    fill(226, 203, 156);
    rect(this.x-25, this.y-195, 50, 60);
    fill(248, 250, 170);
    rect(this.x-15, this.y-210, 30, 15);
    fill(239, 172, 64)
    triangle(this.x-7, this.y-210, this.x, this.y-340, this.x+7, this.y-210);
    push()
    fill(233, 25, 32)
    translate(this.x, this.y-350);
    rotate(radians(55))
    star(0, 0, 7, 17, 5);
    pop()
    push()
    noFill();
    strokeWeight(3) 
    stroke(239, 172, 64)
    translate(this.x, this.y-350);
    rotate(radians(325))
arc(0, 0, 40, 40, 0, radians(50) + radians(200));
    pop()
    push()
    noStroke()
    fill(215, 133, 85)
    rect(this.x-435, this.y+195, 12, 190)
    rect(this.x-410, this.y+195, 12, 190)
    rect(this.x-385, this.y+195, 12, 190)
    rect(this.x-360, this.y+195, 12, 190)
    //правая башня
    rect(this.x+345, this.y+195, 12, 190)
    rect(this.x+370, this.y+195, 12, 190)
    rect(this.x+395, this.y+195, 12, 190)
    rect(this.x+420, this.y+195, 12, 190)
    pop()
    push() //оранжевая линия, которая делит первый блок на две части
    noStroke()
    fill(209, 93, 40)
    rect(this.x-450, this.y+171, 120, 10)
    rect(this.x+330, this.y+171, 120, 10)
    rect(this.x-330, this.y+212, 215, 10)
    rect(this.x+115, this.y+212, 215, 10)

    pop()
    
    push() //оранжевая линия на часах в башне
    noStroke()
    fill(209, 93, 40)
    //часы вертикальные линии
    rect(this.x-420, this.y+108, 13, 52)
    rect(this.x-396, this.y+108, 13, 52)
    rect(this.x-372, this.y+108, 13, 52)
    rect(this.x+409, this.y+108, 13, 52)
    rect(this.x+385, this.y+108, 13, 52)
    rect(this.x+361, this.y+108, 13, 52)
    
    rect(this.x+350, this.y+98, 80, 10)
    rect(this.x-430, this.y+98, 80, 10)
    rect(this.x-330, this.y+212, 215, 10)
    rect(this.x+115, this.y+212, 215, 10)
    pop()
    
    push()
    noStroke()
    fill(191, 159, 130)
    rect(this.x-430, this.y+145, 80, 15)
    rect(this.x+350, this.y+145, 80, 15)
    pop()
    
    push()
    fill(233, 173, 106)
    noStroke()
    circle(this.x-390, this.y+114, 40)
    circle(this.x+392, this.y+114, 40)
    
    fill(66, 85, 84)
    circle(this.x-390, this.y+114, 24)
    circle(this.x+392, this.y+114, 24)
   pop()
    //окна на переходе
    push()
    fill(102+windowColor*0.8, 121+windowColor*0.3, 123-windowColor)
    noStroke()
    rect(this.x-317, this.y+236, 9, 158)
    rect(this.x-294, this.y+236, 9, 158)
    rect(this.x-271, this.y+236, 9, 158)
    rect(this.x-248, this.y+236, 9, 158)
    rect(this.x-225, this.y+236, 9, 158)
    rect(this.x-202, this.y+236, 9, 158)
    rect(this.x-137, this.y+236, 9, 158)
    
    rect(this.x+192, this.y+236, 9, 158)
    rect(this.x+215, this.y+236, 9, 158)
    rect(this.x+238, this.y+236, 9, 158)
    rect(this.x+261, this.y+236, 9, 158)
    rect(this.x+284, this.y+236, 9, 158)
    rect(this.x+307, this.y+236, 9, 158)
    rect(this.x+128, this.y+236, 9, 158)
    pop()
    
    //памятники
    push()
    noStroke()
    fill(233, 173, 106)
    rect(this.x-180, this.y+201, 32, 200)
    rect(this.x+148, this.y+201, 32, 200)
    fill(232, 219, 144)
    rect(this.x-174, this.y+166, 20, 35)
    rect(this.x+154, this.y+166, 20, 35)
    fill(247, 239, 154)
    triangle(this.x-171, this.y+166, this.x-164, this.y+140, this.x-157, this.y+166)
    triangle(this.x+157, this.y+166, this.x+164, this.y+140, this.x+171, this.y+166)
    
    
    fill(170+windowColor, 134+windowColor, 87-windowColor)
    rect(this.x-168.9, this.y+220, 10, 13)
    rect(this.x-168.9, this.y+245, 10, 13)
    rect(this.x-168.9, this.y+270, 10, 13)
    rect(this.x-168.9, this.y+295, 10, 13)
    rect(this.x-168.9, this.y+320, 10, 13)
    rect(this.x-168.9, this.y+345, 10, 13)
    rect(this.x-168.9, this.y+370, 10, 13)
    
    rect(this.x+160, this.y+220, 10, 13)
    rect(this.x+160, this.y+245, 10, 13)
    rect(this.x+160, this.y+270, 10, 13)
    rect(this.x+160, this.y+295, 10, 13)
    rect(this.x+160, this.y+320, 10, 13)
    rect(this.x+160, this.y+345, 10, 13)
    rect(this.x+160, this.y+370, 10, 13)
    
    
    
    pop()
    
    //главный вход
    push()
    noStroke()
    fill(176, 136, 88)
    rect(this.x-91, this.y+330, 190, 70)
    fill(242, 196, 151)
    rect(this.x-115, this.y, 25, 400)
    rect(this.x+90, this.y, 25, 400)
    fill(155, 70, 55)
    rect(this.x-91, this.y+340, 13, 60)
    rect(this.x-67, this.y+340, 13, 60)
    rect(this.x-44, this.y+340, 13, 60)
    rect(this.x-19, this.y+340, 13, 60)
    rect(this.x+6, this.y+340, 13, 60)
    rect(this.x+30, this.y+340, 13, 60)
    rect(this.x+54, this.y+340, 13, 60)
    rect(this.x+78, this.y+340, 13, 60)
    
    fill(43, 44, 30)
    rect(this.x-95, this.y+332, 22, 8, 20)
    rect(this.x-71, this.y+332, 22, 8, 20)
    rect(this.x-48, this.y+332, 22, 8, 20)
    rect(this.x-23, this.y+332, 22, 8, 20)
    rect(this.x+2, this.y+332, 22, 8, 20)
    rect(this.x+26, this.y+332, 22, 8, 20)
    rect(this.x+50, this.y+332, 22, 8, 20)
    rect(this.x+74, this.y+332, 22, 8, 20)
    
    fill(107, 107, 98)
    rect(this.x-95, this.y+396, 22, 8, 20)
    rect(this.x-71, this.y+396, 22, 8, 20)
    rect(this.x-48, this.y+396, 22, 8, 20)
    rect(this.x-23, this.y+396, 22, 8, 20)
    rect(this.x+2, this.y+396, 22, 8, 20)
    rect(this.x+26, this.y+396, 22, 8, 20)
    rect(this.x+50, this.y+396, 22, 8, 20)
    rect(this.x+74, this.y+396, 22, 8, 20)
    
    fill(255, 252, 213)
    rect(this.x-91, this.y+322, 181, 10)
    
    fill(118, 117, 100)
    quad(this.x-94, this.y+310, this.x+94, this.y+310, this.x+90, this.y+322, this.x-90, this.y+322);
    
    fill(226, 202, 149)
    rect(this.x-61, this.y+35, 124, 255)
    
    fill(189, 159, 131)
    rect(this.x-94, this.y, 28, 310)
    rect(this.x+66, this.y, 28, 310)
    
    fill(253, 202, 147)
    rect(this.x-70, this.y+290, 140, 20)
    
    fill(163, 124, 77)
    rect(this.x-17, this.y+35, 12, 255)
    rect(this.x-37, this.y+35, 12, 255)
    rect(this.x+4, this.y+35, 12, 255)
    rect(this.x+25, this.y+35, 12, 255)
    fill(96+windowColor*0.8, 91+windowColor*0.5, 83-windowColor)
    //102+windowColor*0.8, 121+windowColor*0.3, 123-windowColor
    rect(this.x-57, this.y+35, 12, 255)
    rect(this.x+46, this.y+35, 12, 255)
    
    
    
    fill(209, 93, 40)
    rect(this.x-115, this.y, 21, 25)
    rect(this.x+94, this.y, 21, 25)
    rect(this.x-95, this.y-10, 190, 25)
    fill(66, 85, 84)
    circle(this.x, this.y-104, 20)
    
    fill(185, 170, 154)
    rect(this.x-65, this.y-116, 30, 8)
    rect(this.x+35, this.y-116, 30, 8)
    fill(218, 206, 162)
    rect(this.x-65, this.y-125, 30, 9)
    rect(this.x+35, this.y-125, 30, 9)
    
    fill(122, 147, 161)
    rect(this.x-4, this.y-122, 8, 8);
    rect(this.x-20, this.y-122, 8, 8);
    rect(this.x+12, this.y-122, 8, 8);
    
    fill(208, 93, 59)
    rect(this.x-4, this.y-129, 8, 4);
    rect(this.x-20, this.y-129, 8, 4);
    rect(this.x+12, this.y-129, 8, 4);
    
    fill(191, 162, 132)
    rect(this.x-42, this.y-138, 84, 6);
    
    fill(206, 186, 123)
    rect(this.x-30, this.y-186, 60, 48);
    
    fill(197, 127, 83)
    rect(this.x-25, this.y-203, 50, 8, 20)
    rect(this.x-20, this.y-210, 40, 8, 20)
    
    
    fill(255, 255, 203)
    rect(this.x-3, this.y-190, 6, 52);
    rect(this.x-15, this.y-190, 6, 52);
    rect(this.x-27, this.y-190, 6, 52);
    rect(this.x+9, this.y-190, 6, 52);
    rect(this.x+21, this.y-190, 6, 52);
    
    fill(185, 170, 154)
    rect(this.x-11, this.y-223, 22, 13)
    
    fill(239, 172, 64)
    quad(this.x-13, this.y-234, this.x+13, this.y-234, this.x+9, this.y-223, this.x-9, this.y-223);
    quad(this.x-11, this.y-252, this.x+11, this.y-252, this.x+7, this.y-241, this.x-7, this.y-241);
    
    fill(196, 127, 83)
    rect(this.x-10, this.y-241, 20, 7, 20)
    
    fill(206, 161, 94)
    rect(this.x-6, this.y-272, 12, 20)
    
    fill(184+windowColor, 142+windowColor, 99-windowColor)
    rect(this.x-107, this.y+40, 6, 10)
    rect(this.x-107, this.y+65, 6, 10)
    rect(this.x-107, this.y+90, 6, 10)
    rect(this.x-107, this.y+115, 6, 10)
    rect(this.x-107, this.y+140, 6, 10)
    rect(this.x-107, this.y+165, 6, 10)
    rect(this.x-107, this.y+190, 6, 10)
    rect(this.x-107, this.y+215, 6, 10)
    rect(this.x-107, this.y+240, 6, 10)
    rect(this.x-107, this.y+265, 6, 10)
    rect(this.x-107, this.y+290, 6, 10)
    rect(this.x-107, this.y+315, 6, 10)
    rect(this.x-107, this.y+340, 6, 10)
    rect(this.x-107, this.y+365, 6, 10)
    
    rect(this.x+102.5, this.y+40, 6, 10)
    rect(this.x+102.5, this.y+65, 6, 10)
    rect(this.x+102.5, this.y+90, 6, 10)
    rect(this.x+102.5, this.y+115, 6, 10)
    rect(this.x+102.5, this.y+140, 6, 10)
    rect(this.x+102.5, this.y+165, 6, 10)
    rect(this.x+102.5, this.y+190, 6, 10)
    rect(this.x+102.5, this.y+215, 6, 10)
    rect(this.x+102.5, this.y+240, 6, 10)
    rect(this.x+102.5, this.y+265, 6, 10)
    rect(this.x+102.5, this.y+290, 6, 10)
    rect(this.x+102.5, this.y+315, 6, 10)
    rect(this.x+102.5, this.y+340, 6, 10)
    rect(this.x+102.5, this.y+365, 6, 10)
    
    fill(98+windowColor, 99+windowColor, 105-windowColor)
    rect(this.x-83.5, this.y+30, 8, 10)
    rect(this.x-83.5, this.y+55, 8, 10)
    rect(this.x-83.5, this.y+80, 8, 10)
    rect(this.x-83.5, this.y+105, 8, 10)
    rect(this.x-83.5, this.y+130, 8, 10)
    rect(this.x-83.5, this.y+155, 8, 10)
    rect(this.x-83.5, this.y+180, 8, 10)
    rect(this.x-83.5, this.y+205, 8, 10)
    rect(this.x-83.5, this.y+230, 8, 10)
    rect(this.x-83.5, this.y+255, 8, 10)
    rect(this.x-83.5, this.y+280, 8, 10)
    
    rect(this.x+76.5, this.y+30, 8, 10)
    rect(this.x+76.5, this.y+55, 8, 10)
    rect(this.x+76.5, this.y+80, 8, 10)
    rect(this.x+76.5, this.y+105, 8, 10)
    rect(this.x+76.5, this.y+130, 8, 10)
    rect(this.x+76.5, this.y+155, 8, 10)
    rect(this.x+76.5, this.y+180, 8, 10)
    rect(this.x+76.5, this.y+205, 8, 10)
    rect(this.x+76.5, this.y+230, 8, 10)
    rect(this.x+76.5, this.y+255, 8, 10)
    rect(this.x+76.5, this.y+280, 8, 10)
    pop()
    
    fill(195, 181, 168)
    // fill(0)
    rect(this.x-100, this.y-21, 44, 11)
    rect(this.x+56, this.y-21, 44, 11)
    fill(215, 201, 141)
    // fill(0)
    rect(this.x-96, this.y-29, 36, 8)
    rect(this.x+60, this.y-29, 36, 8)
    fill(199, 167, 146)
    // fill(0)
    rect(this.x-92, this.y-37, 28, 8)
    rect(this.x+64, this.y-37, 28, 8)
    fill(202, 198, 151)
    // fill(0)
    rect(this.x-88, this.y-45, 20, 8)
    rect(this.x+68, this.y-45, 20, 8)
    fill(247, 215, 128)
    // fill(0)
    rect(this.x-84, this.y-53, 12, 8)
    rect(this.x+72, this.y-53, 12, 8)
    
    fill(244, 232, 168)
    // fill(0)
    triangle(this.x-450, this.y+160, this.x-443, this.y+134, this.x-436, this.y+160)
    triangle(this.x-344, this.y+160, this.x-337, this.y+134, this.x-330, this.y+160)
    
    triangle(this.x+450, this.y+160, this.x+443, this.y+134, this.x+436, this.y+160)
    triangle(this.x+344, this.y+160, this.x+337, this.y+134, this.x+330, this.y+160)
    
    triangle(this.x-115, this.y, this.x-108, this.y-40, this.x-101, this.y)
    triangle(this.x+115, this.y, this.x+108, this.y-40, this.x+101, this.y)
    
    fill(210, 231, 243)
    ellipse(this.x-78.3, this.y-65, 15, 25)
    ellipse(this.x+78, this.y-65, 15, 25)
    
    fill(250, 190, 53)
    // fill(0)
    quad(this.x-422, this.y+68, this.x-413, this.y+68, this.x-415, this.y+90, this.x-420, this.y+90);
    quad(this.x-367, this.y+68, this.x-358, this.y+68, this.x-360, this.y+90, this.x-365, this.y+90);
    quad(this.x+422, this.y+68, this.x+413, this.y+68, this.x+415, this.y+90, this.x+420, this.y+90);
    quad(this.x+367, this.y+68, this.x+358, this.y+68, this.x+360, this.y+90, this.x+365, this.y+90); 
   quad(this.x-66, this.y-147, this.x-57, this.y-147, this.x-59, this.y-125, this.x-64, this.y-125);
    quad(this.x-47, this.y-147, this.x-38, this.y-147, this.x-40, this.y-125, this.x-45, this.y-125);
    quad(this.x+66, this.y-147, this.x+57, this.y-147, this.x+59, this.y-125, this.x+64, this.y-125);
    quad(this.x+47, this.y-147, this.x+38, this.y-147, this.x+40, this.y-125, this.x+45, this.y-125);
    fill(0, 50)
    
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
