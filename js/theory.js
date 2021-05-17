// ====================== THEORY ========================== //
const canvas = document.querySelector('canvas');

// setting height and width for canvas
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// c is a context which contain all the features of canvas.getContext('2d');
const c = canvas.getContext('2d');

/*

// ======== RECTANGLE FILLED ======== // 
// === c.fillRect(x,y,width,height) === //

c.fillStyle = 'SeaGreen';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'coral'
c.fillRect(205, 100, 100, 100);
c.fillStyle = 'Turquoise'
c.fillRect(310, 100, 100, 100);
c.fillStyle = 'hotpink';
c.fillRect(415, 100, 100, 100);



// ======== LINE ======== // 
// === c.beginPath() === //

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 300);
c.lineTo(500, 400);
c.lineTo(700, 300);
c.lineTo(950, 300);
c.strokeStyle = 'dodgerblue';
c.stroke();

// ======== CIRCLE (ARC) ======== //
// === c.arc(x,y,radius,startAngle(rad),endAngle(rad),drawCounterClockwise : false) === //

c.beginPath();
c.strokeStyle = 'red';
c.arc(200,500,50,0,Math.PI*2,false);
c.stroke();

*/

const colorArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// === Random circle generation of same radii at diff place in window === //

/*

for (let i = 0; i < 25; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let dx = 50;
  let dy = 50;
  c.beginPath();
  c.strokeStyle = 'black'; //colorFunction();
  if (x < 50 || y < 50) {
    x += dx;
    y += dy;
  } else if (x > window.innerWidth - 50 || y > window.innerHeight - 50) {
    x -= dx;
    y -= dy;
  }
  c.arc(x, y, 50, 0, Math.PI * 2, false);
  c.stroke();
}

*/

// Random color Generation

/*

function colorFunction() {
  let randomArr = [];
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * colorArray.length);
    randomArr.push(random);
  }
  randomColor =
    '#' +
    colorArray[randomArr[0]].toString() +
    colorArray[randomArr[1]].toString() +
    colorArray[randomArr[2]].toString() +
    colorArray[randomArr[3]].toString() +
    colorArray[randomArr[4]].toString() +
    colorArray[randomArr[5]].toString();
  //console.log(randomColor);
  return randomColor;
}

*/

//  animate the position of each circle

/*

let x = 50; //Math.random()*window.innerWidth;
let y = 50; //Math.random()*window.innerHeight;

function animate() {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  requestAnimationFrame(animate);
  c.beginPath();
  c.strokeStyle = 'black';
  c.arc((x += 10), 500, 50, 0, Math.PI * 2, false);
  c.stroke();
  console.log('hlo');
}

animate();

*/
