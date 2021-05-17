// *** Heading *** //
let heading1 = document.querySelector('h1');
heading1.innerHTML = 'Collision - Hover over the black circle to see color change';

// ************* setup *************** //
const canvas1 = document.querySelector('canvas');
canvas1.height = window.innerHeight;
canvas1.width = window.innerWidth;
const c1 = canvas1.getContext('2d');

// ************** Global vars ************* //
const w = innerWidth;
const h = innerHeight;
let mouse1 = {
  x: undefined,
  y: undefined,
};
window.addEventListener('mousemove', (event) => {
  mouse1.x = event.x;
  mouse1.y = event.y;
});

// ************** Class circle ************* //
class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }
  update = function () {
    this.draw();
  };
  draw = function () {
    c1.beginPath();
    c1.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c1.fillStyle = this.color;
    c1.fill();
    c1.closePath();
  };
}

// ************** Circle instance ********** //
const circle_one = new Circle(w / 2, h / 2, 100, 'black');
const circle_two = new Circle(undefined, undefined, 50, 'red');

// ************** Animation function ******* //
function animate() {
  requestAnimationFrame(animate);
  c1.clearRect(0, 0, w, h);
  circle_one.update();
  circle_two.x = mouse1.x;
  circle_two.y = mouse1.y;
  circle_two.update();
  const Dist = getDistance(circle_one.x, circle_one.y, circle_two.x, circle_two.y);
  if (Dist < circle_one.radius + circle_two.radius) {
    circle_one.color = 'teal';
  } else {
    circle_one.color = 'black';
  }
}
animate();

function getDistance(x1, y1, x2, y2) {
  xDistance = x2 - x1;
  yDistance = y2 - y1;
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}
