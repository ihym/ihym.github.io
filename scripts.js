const canvas = document.querySelector('canvas');
let resizeTimer = null;
let width = window.innerWidth;
let height = window.innerHeight;

function config() {
  return {
    width: width,
    height: height,
    variance: Math.random(),
    cell_size: window.innerWidth / 50 + Math.random() * 100,
    x_colors: 'random',
    seed: Math.random(),
  };
}

function debounceResize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(handleResize, 100);
}

function handleResize(e) {
  width = window.innerWidth;
  height = window.innerHeight;
  Trianglify(config()).canvas(canvas);
}

document.addEventListener('click', function() {
  Trianglify(config()).canvas(canvas);
});

Trianglify(Object.assign({}, config(), {x_colors: 'RdBu', cell_size: window.innerWidth / 40})).canvas(canvas);

window.addEventListener('resize', debounceResize);
