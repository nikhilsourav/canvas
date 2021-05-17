// *** Heading *** //
let heading6 = document.querySelector('h1');
heading6.innerHTML = 'Spiral - Infinite revolving circle';

const canvas6 = document.querySelector('canvas');
canvas6.height = window.innerHeight;
canvas6.width = window.innerWidth;
const c6 = canvas6.getContext('2d');
const colorArray4 = ['#2185c5', '#7ecefd', '#fff6e5', '#ff7f66'];
let num = 1;
let amp = 20;
let factor = 0.1;

class Sphere {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }
  update = function () {
    num = num + factor;
    this.x += Math.cos(num) * amp;
    this.y += Math.sin(num) * amp;
    this.draw();
  };
  draw = function () {
    c6.beginPath();
    c6.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c6.fillStyle = this.color;
    c6.fill();
    c6.closePath();
  };
}

function animate() {
  requestAnimationFrame(animate);
  c6.clearRect(0, 0, canvas6.width, canvas6.height);
  circle.update();
}

const circle = new Sphere(
  (innerWidth + (amp / 2) * amp) / 2,
  (innerHeight - (amp / 2) * amp) / 2,
  30,
  'red'
);
circle.draw();
animate();
