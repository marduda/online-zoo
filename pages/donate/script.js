let nav = document.querySelector('nav');
let burger = nav.querySelector('.burger-icon');
let overlay = document.querySelector('.overlay');

let radioItems = document.querySelectorAll('.radio-item');
let anotherAmount = document.getElementById('another-amount');

let closeBtn = document.createElement('a');
closeBtn.className = 'close-btn';

const closeBurger = () => {
  nav.classList.remove('open');
  burger.classList.remove('hide');
  overlay.classList.add('hide');
  closeBtn.remove();
};

const openBurger = () => {
  nav.classList.add('open');
  burger.classList.add('hide');
  overlay.classList.remove('hide');

  closeBtn.addEventListener('click', closeBurger)
  nav.append(closeBtn);
}

const handleRadioClick = (e) => {
  anotherAmount.value = e.target.value;
}

const setRadio = (e) => {
  let inputValue = e?.target.value || 100;

  radioItems.forEach(item => {
    let radioItem = item.querySelector('input');
    inputValue == radioItem.value ? radioItem.checked = true : radioItem.checked = false;
  });
}

const validate = (e) => {
if (e.target.value.length === 4 || isNaN(e.key)) {
    e.preventDefault();
  }
}

anotherAmount.addEventListener('keypress', validate)
anotherAmount.addEventListener('blur', setRadio);
radioItems.forEach(item => item.addEventListener('click', handleRadioClick));
burger.addEventListener('click', openBurger);
overlay.addEventListener('click', closeBurger);

setRadio();
anotherAmount.value = 100;