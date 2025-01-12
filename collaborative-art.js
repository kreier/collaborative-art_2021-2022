let timer = 0;
function setup() {
  createCanvas(400, 400);
  //Connor
  color1 = color(225,0,0);
  color2 = color(0,0,225);
  color3 = color(0,225,0)
  

  for(let a=1; a<height; a++){
    m = map(a,3,height,0,1);
    let background = lerpColor(color1, color2, m)
    stroke(background);
    line(0,a,width,a);
    }
 
  
  //add your shapes below your name
  //if you want, add some random elements to it for more chaos lol
  
  //Matthew
  noStroke()
  fill(253, 253, 150)
  circle(random(0,400), random(0,400), random(30,70))
  
  //Tin Tin
  fill(50,159,231)
  let startpointX = random(0,300) 
  let startpointY = random(0,300)
  triangle(startpointX,startpointY,startpointX+random(0,50),startpointY+random(0,100),startpointX+random(0,100),startpointY+random(0,100))
    
  //Kenneth
  strokeWeight(10)
  r = random(0,255)
  g = random(0,255)
  b = random(0,255)
  fill(r,g,b)
  rect(random(10,150), random(50, 100), random(10,150), random(50,100))
  
  //Shayan
  fill(Math.floor(random(0,256)), Math.floor(random(0,256)), Math.floor(random(0,256)));
  square(30, 20, 55);
  
  //Kenny
  
  stroke(10)
  fill(225, 100, 20)
  arc(215, 150, 150, 80,QUARTER_PI, PI + QUARTER_PI);

  stroke(1)
  arc(210, 300, 200, 69, QUARTER_PI, PI + QUARTER_PI);
  
  //Lam
  let c = color(255, 204, 0);
fill(c);
noStroke();
ellipse(25, 25, 80, 80); 

  //Khoa
  noStroke()
  fill(256, 0, 0)
  rect(random(200, 300), random(200, 300), 60, 40);
  
  //Alice
  fill(255, 204, 0);
  noStroke();
  ellipse(25, 25, 80, 80); 
  
  //Vanessa
  
  //Jack
  noStroke()
  fill(256, 200, 210)
  triangle(random(130, 200), random(300, 500), 60, 40,50,70);
  
  //Bona
   let ellipseWidth = random(0,100)
    let ellipseHeight = random(0,100)
    ellipse(startpointX, startpointY, ellipseWidth,ellipseHeight)
 
 
}

//Alice
function draw(){
  noStroke();
  if (millis() >= 2000+timer) {
    fill(random(150,200),random(0, 50),random(50, 150));
    timer = millis();
  }
  ellipse(250, 100, 20, 80);
  
//Vannak
  let points = []
 let density = 50
  let space = 400 / density

  for (var x = 0; x < 400; x += space) {
    for (var y = 0; y < 400; y += space) {
      let p = createVector(x, y)
      points.push(p)
    
    }
  }
  noStroke()
  fill(255)
  
  for (let i = 0; i < points.length; i++){
    ellipse (points[i].x, points[i].y,0.5)
  }
}
