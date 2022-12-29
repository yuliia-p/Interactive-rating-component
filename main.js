const buttonsEl = document.querySelectorAll('button');
const submitButton = document.getElementById('submit');
const error = document.getElementById('error-msg');
const view1 = document.getElementById('view-1');
const view2 = document.getElementById('view-2');
const selectionMsg = document.getElementById('selection-msg');
let selected = '';

buttonsEl.forEach(el => {
  el.addEventListener('click', e => {
    removeSelectedClasses();
    selected = e.target.textContent;
    e.target.classList.add('selected');
  });
});

function removeSelectedClasses() {
  buttonsEl.forEach(btn => {
    btn.classList.remove('selected');
  });
}

submitButton.addEventListener('click', e => {
  if (selected === '') {
    addButtonErrors();
    setTimeout(() => {
      removeButtonErrors();
    }, 3000);
    return;
  }

  selectionMsg.textContent = `You selected ${selected} out of 5`;
  view1.classList.add('display-none');
  view2.classList.remove('display-none');
});

function addButtonErrors() {
  error.classList.remove('display-none');
  buttonsEl.forEach(btn => {
    btn.classList.add('error');
  });
}

function removeButtonErrors() {
  error.classList.add('display-none');
  buttonsEl.forEach(btn => {
    btn.classList.remove('error');
  });
}
