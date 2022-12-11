function Firework() {
  this.hue = random(70, 340);
  this.firework = new Particle(random(width), height, this.hue, true);
  this.exploded = false;
  this.particles = [];

  this.update = function () {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  };

  this.explode = function () {
    let color = random(10);
    for (let i = 0; i < random(360, 700); i++) {
      let p = new Particle(
        this.firework.pos.x,
        this.firework.pos.y,
        color >= 7 ? random(80, 360) : this.hue,
        false
      );
      this.particles.push(p);
    }
  };

  this.done = function () {
    if (this.exploded && this.particles.length === 0) return true;
    else return false;
  };

  this.show = function () {
    if (!this.exploded) {
      this.firework.show();
    }
    this.particles.forEach((f) => {
      f.show();
    });
  };
}
