// *** Heading *** //
let heading5 = document.querySelector('h1');
heading5.innerHTML = 'Random squares and circles';

const canvas5 = document.querySelector('canvas');
canvas5.height = window.innerHeight;
canvas5.width = window.innerWidth;

// ======================= Declarations ==================
const c5 = canvas5.getContext('2d');
let x_pos = 100;
let y_pos = 100;
let x_vel = 10;
let y_vel = 10;
let x_pos_circ = 150;
const colorArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// ======================= Class and Functions ==================
class Squares {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw = function () {
    c5.fillStyle = `${this.color}`;
    c5.fillRect(this.x, this.y, this.width, this.height);
  };
}
class Cirlce {
  constructor(x, y, r, st, en, bool, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.st = st;
    this.en = en;
    this.bool = bool;
    this.color = color;
  }
  draw = function () {
    c5.beginPath();
    c5.strokeStyle = `${this.color}`;
    c5.fillStyle = `${this.color}`;
    c5.arc(this.x, this.y, this.r, this.st, this.en, this.bool);
    c5.stroke();
  };
}
function colorFunction() {
  let randomArr = [];
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * colorArray3.length);
    randomArr.push(random);
  }
  randomColor =
    '#' +
    colorArray3[randomArr[0]].toString() +
    colorArray3[randomArr[1]].toString() +
    colorArray3[randomArr[2]].toString() +
    colorArray3[randomArr[3]].toString() +
    colorArray3[randomArr[4]].toString() +
    colorArray3[randomArr[5]].toString();
  //console.log(randomColor);
  return randomColor;
}

// =============== Square ============== // 
const squareArray = [];
for (let i = 0; i < 10; i++) {
  squareArray.push(new Squares((x_pos += 110), 100, 100, 100, colorFunction()));
}
for (let i = 0; i < 10; i++) {
  squareArray[i].draw();
}

// =============== Square ============== // 
const circleArray = [];
for (let i = 0; i < 10; i++) {
  circleArray.push(
    new Cirlce((x_pos_circ += 110), 150, 50, 0, Math.PI * 2, false, colorFunction())
  );
}
for (let i = 0; i < 10; i++) {
  circleArray[i].draw();
}
