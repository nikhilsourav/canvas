// dynamically load canvas files
function loadJsDynamically(filename) {
  localStorage.clear();
  var src = document.createElement('script');
  src.setAttribute('type', 'text/javascript');
  src.setAttribute('src', filename);
  document.getElementsByTagName('body')[0].appendChild(src);
}

// store all js file in array
const arr = [
  'randSquareCircle.js',
  'randomSquares.js',
  'collision.js',
  'particle.js',
  'spiral.js',
  'gravity.js',
];

// respond to btn click
let counter = 0;
window.onload = () => {
  const change = document.querySelector('#change');
  change.addEventListener('click', function () {
    if (counter % arr.length == 0 && counter !== 0) location.reload();
    loadJsDynamically('js/' + arr[counter]);
    ++counter;
  });
};
