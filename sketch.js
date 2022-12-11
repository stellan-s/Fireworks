let fireworks = [];
let gravity;
let paused = false;
document.body.addEventListener('keyup', (e) => {
  if (keyCode === 32) paused = !paused;
});

function setup() {
  createCanvas(1400, 700);
  colorMode(HSB);
  gravity = createVector(0, 0.1);
  stroke(255);
  strokeWeight(4);
}

function draw() {
  if (!paused) {
    background(11, 11, 11, 0.2);
    if (random(1) < 0.015) {
      fireworks.push(new Firework());
    }
    for (let i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].update();
      fireworks[i].show();
      if (fireworks[i].done()) fireworks.splice(i, 1);
    }
  }
}
