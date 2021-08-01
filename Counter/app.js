// ELEMENTS
// const decreaseBtn = document.querySelector('.decrease');
// const resetBtn = document.querySelector('.reset');
// const increaseBtn = document.querySelector('.increase');
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

let count = 0;

// FUNCTIONS
function updateValue() {
  value.textContent = count;
}

function numberStateToColor() {
  if (count > 0) return 'green';
  if (count === 0) return '#222';
  if (count < 0) return 'red';
}

function changeColor(element, color) {
  element.style.color = color;
}

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains('decrease')) count--;
    else if (styles.contains('reset')) count = 0;
    else if (styles.contains('increase')) count++;

    //SETTING UP COLOR DUE NUMBER IS > or < or == 0
    changeColor(value, numberStateToColor());

    updateValue();
  });
});
