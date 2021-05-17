// *** Heading *** //
let heading2 = document.querySelector('h1');
heading2.innerHTML = 'Gravity - Click anywhere';

// ************* setup *************** //
const canvas2 = document.querySelector('canvas');
canvas2.height = window.innerHeight;
canvas2.width = window.innerWidth;
const colorArray = ['#2185c5', '#7ecefd', '#fff6e5', '#ff7f66'];
let radius = 50;
let gravity = 2;
let friction = 0.9;
let noOfBalls1 = 200;
const c2 = canvas2.getContext('2d');

// ************* logic *************** //
canvas2.addEventListener('click', () => {
  class Ball {
    constructor(x, y, dy, radius, color) {
      this.x = x;
      this.y = y;
      this.dy = dy;
      this.radius = radius;
      this.color = color;
    }
    update = function () {
      if (this.y + this.radius > canvas2.height) {
        this.dy = -this.dy * friction;
      } else {
        this.dy += gravity;
      }
      this.y += this.dy;
      this.draw();
    };
    draw = function () {
      c2.beginPath();
      c2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c2.fillStyle = this.color;
      c2.fill();
      c2.closePath();
    };
  }
  const ball = [];
  for (let i = 0; i < noOfBalls1; i++) {
    ball.push(
      new Ball(Math.random() * innerWidth, Math.random() * innerWidth, 5, 50, colorFunction())
    );
  }
  for (let i = 0; i < noOfBalls1; i++) {
    ball[i].draw();
  }
  function animate() {
    requestAnimationFrame(animate);
    c2.clearRect(0, 0, canvas2.width, canvas2.height);
    for (let i = 0; i < noOfBalls1; i++) {
      ball[i].update();
    }
  }
  animate();
  function colorFunction() {
    let random = Math.floor(Math.random() * colorArray.length);
    return colorArray[random];
  }
});
