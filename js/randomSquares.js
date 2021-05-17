// *** Heading *** //
let heading4 = document.querySelector('h1');
heading4.innerHTML = 'Random Squares';

// ************* setup *************** //
const canvas4 = document.querySelector('canvas');
canvas4.height = window.innerHeight;
canvas4.width = window.innerWidth;
const c4 = canvas4.getContext('2d');
const colorArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

//  Prototype Class for generating squares
class Square {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  draw = function () {
    c4.fillRect(this.x, this.y, this.width, this.height);
  };
}

//initialize squares array
const squares = [];

//Store 10 Square in squares array
for (let i = 0; i < 10; i++) {
  squares.push(
    new Square(
      Math.floor(Math.random() * innerWidth),
      Math.floor(Math.random() * innerHeight),
      100,
      100
    )
  );
}

//color 10 square
for (let i = 0; i < 10; i++) {
  c4.fillStyle = colorFunction();
  squares[i].draw();
}

//Random color generation
function colorFunction() {
  let randomArr = [];
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * colorArray2.length);
    randomArr.push(random);
  }
  randomColor =
    '#' +
    colorArray2[randomArr[0]].toString() +
    colorArray2[randomArr[1]].toString() +
    colorArray2[randomArr[2]].toString() +
    colorArray2[randomArr[3]].toString() +
    colorArray2[randomArr[4]].toString() +
    colorArray2[randomArr[5]].toString();
  //console.log(randomColor);
  return randomColor;
}
