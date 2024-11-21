const scl = 35;
const inc = 0.07;
let zoff = 0;
let cols, rows;

let vectors = [];
const vMag = 0.5;

function setup() {
  const canvas = createCanvas(window.innerWidth, window.innerHeight);
  cols = canvas.width / scl;
  rows = canvas.height / scl;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20, 50);

  let xoff = 0;
  for (let x = 0; x < cols + scl; x++) {
    let yoff = 0;
    for (let y = 0; y < rows + scl; y++) {
      const i = x + y * cols;
      const a = noise(xoff, yoff, zoff) * 2 * TWO_PI;
      const v = p5.Vector.fromAngle(a);
      v.setMag(vMag);
      vectors[i] = v;

      // show vectors
      stroke(255, 50);
      strokeWeight(0.5);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl, 0);
      pop();

      yoff += inc;
    }
    xoff += inc;
  }
  zoff += 0.005;
  print(frameRate());
}