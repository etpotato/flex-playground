const container = document.querySelector('.flex-container');
const buttonRow = document.querySelector('.button-row');
const buttonColumn = document.querySelector('.button-column');

buttonRow.addEventListener('click', function() {
  container.classList.remove('mode-column');
  container.classList.add('mode-row');
  buttonRow.disabled = true;
  buttonColumn.disabled = false;
  buttonRow.blur();
});

buttonColumn.addEventListener('click', function() {
  container.classList.remove('mode-row');
  container.classList.add('mode-column');
  buttonRow.classList.remove('button-on');
  buttonColumn.disabled = true;
  buttonRow.disabled = false;
  buttonColumn.blur();
});
