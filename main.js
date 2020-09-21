const container = document.querySelector('.flex-container');
const buttonLr = document.querySelector('.button-lr');
const buttonRl = document.querySelector('.button-rl');

buttonLr.addEventListener('click', function() {
  if (container.classList.contains('mode-rl')) {
    container.classList.remove('mode-rl');
    container.classList.add('mode-lr');
  } else {
    container.classList.add('mode-lr');
  }
  buttonLr.blur();
});

buttonRl.addEventListener('click', function() {
  if (container.classList.contains('mode-lr')) {
    container.classList.remove('mode-lr');
    container.classList.add('mode-rl');
  } else {
    container.classList.add('mode-rl');
  }
  buttonRl.blur();
});
