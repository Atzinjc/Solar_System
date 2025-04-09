let x = 0;
balls = []
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("Orbit ball")
 
}

function draw() {
  background(50);

push();
  translate(width/2, height/2);
  rotate(x * 0.1);
  ellipse(120, 0, 50, 50);
  x++;
pop();


  for (let i = 0; i < balls.lenth; i++){
    ball.ellipse[i](0, 500, 20, 20);
  }

  ellipse(width/2, height/2 , 100, 100);
  
}

