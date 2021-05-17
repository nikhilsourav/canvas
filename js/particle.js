// *** Heading *** //
let heading3 = document.querySelector('h1');
heading3.innerHTML = 'Particles - Hover anywhere';

/* ==================== Particles ======================== */
// ***** Global variables ***** //
const canvas3 = document.querySelector('canvas');
canvas3.height = window.innerHeight;
canvas3.width = window.innerWidth;
const c3 = canvas3.getContext('2d');
const colorArray1 = ['#2185c5', '#7ecefd', '#fff6e5', '#ff7f66'];
const noOfBalls2 = 1000;
const maxRadius = 40;
const minRadius = 5;
let mouse2 = {
  x: 10,
  y: 10,
};
window.addEventListener('mousemove', (event) => {
  mouse2.x = event.x;
  mouse2.y = event.y;
});

// ***** Circles and properties ***** //
class Circles {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }
  update = function () {
    // collision from wall
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    // interactivity
    if (
      //range
      mouse2.x - this.x < 50 &&
      mouse2.x - this.x > -50 &&
      mouse2.y - this.y < 50 &&
      mouse2.y - this.y > -50
    ) {
      if (this.radius < maxRadius) this.radius += 1;
    } else if (this.radius > minRadius) {
      this.radius -= 1;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
  draw = function () {
    c3.beginPath();
    c3.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c3.fillStyle = this.color;
    c3.fill();
    c3.closePath();
  };
}
function animate() {
  requestAnimationFrame(animate);
  c3.clearRect(0, 0, canvas3.width, canvas3.height);
  circles.update();
}
function colorFunction() {
  let random = Math.floor(Math.random() * colorArray1.length);
  return colorArray1[random];
}

// ***** Particles and values ***** //
const particles = [];
for (let i = 0; i < noOfBalls2; i++) {
  particles.push(
    new Circles(
      Math.random() * innerWidth,
      Math.random() * innerWidth,
      Math.random() * 1,
      Math.random() * 1,
      Math.random() * 10,
      colorFunction()
    )
  );
}

for (let i = 0; i < noOfBalls2; i++) {
  particles[i].draw();
}

function animate() {
  requestAnimationFrame(animate);
  c3.clearRect(0, 0, canvas3.width, canvas3.height);
  for (let i = 0; i < noOfBalls2; i++) {
    particles[i].update();
  }
}

animate();
