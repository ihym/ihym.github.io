const canvas = document.querySelector('canvas');
const content = document.querySelector('.content');
let timer = null;

function config(initial) {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    variance: Math.random(),
    cell_size: window.innerWidth / 50 + (initial ? 40 : Math.random() * 100),
    x_colors: initial ? 'RdYlBu' : 'random',
    seed: Math.random(),
  };
}

function debounceTrianglify() {
  clearTimeout(timer);
  timer = setTimeout(trianglify, 100);
}

function trianglify(initial) {
  Trianglify(config(initial)).canvas(canvas);
}

document.addEventListener('click', function() {
  trianglify();
});

content.addEventListener('click', function(e) {
  e.stopPropagation();
});

trianglify(true);
window.addEventListener('resize', debounceTrianglify);
