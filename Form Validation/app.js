const name = document.querySelector('#name');
const password = document.querySelector('#password');
const form = document.querySelector('#form');
const errorElement = document.querySelector('#error');

let passwordValue = password.value;
let regularExpresion = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

form.addEventListener('submit', (e) => {
  let messages = [];

  if (!regularExpresion.test(passwordValue)) {
    console.log('no numbers');
  }

  if (name.value === '' || name.value == null) {
    messages.push('Name is required');
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters');
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
});
