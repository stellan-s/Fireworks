class Particle {
  constructor(x, y, hue, firework) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    this.hue = hue;

    if (this.firework) {
      this.vel = createVector(random(-2, 2), random(-6, -12));
    } else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(12));
    }
    this.acc = createVector(0, 0);

    this.applyForce = function (force) {
      this.acc.add(force);
    };

    this.update = function () {
      if (!this.firework) {
        this.vel.mult(0.95);
        this.lifespan -= 1;
      }
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    };

    this.done = function () {
      return this.lifespan < 0;
    };

    this.show = function () {
      if (!this.firework) {
        strokeWeight(random(1, 4));
        stroke(this.hue, 255, 255, this.lifespan);
      } else {
        strokeWeight(random(2, 5));
        stroke(this.hue, 255, 255);
      }
      point(this.pos.x, this.pos.y);
    };
  }
}
