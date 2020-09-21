const container = document.querySelector('.flex-container');
const buttonRow = document.querySelector('.button-row');
const buttonColumn = document.querySelector('.button-column');

buttonRow.addEventListener('click', function() {
  container.classList.remove('mode-column');
  container.classList.add('mode-row');
  buttonRow.blur();
});

buttonColumn.addEventListener('click', function() {
  container.classList.remove('mode-row');
  container.classList.add('mode-column');
  buttonColumn.blur();
});
