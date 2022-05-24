const regularInput = document.querySelector('.regular-input');
const regularText = document.querySelector('.regular-text');
const debounceInput = document.querySelector('.debounce-input');
const debounceText = document.querySelector('.debounce-text');

function showInputRegular(e) {
  const inputValue = e.target.value;
  regularText.textContent = inputValue;
}

function showInputDebounce(e) {
  const inputValue = e.target.value;
  debounceText.textContent = inputValue;
}

function debounce(func, pauseMs) {
  let timer;

  return function executor(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, pauseMs);
  };
}

regularInput.addEventListener('input', showInputRegular);
debounceInput.addEventListener('input', debounce(showInputDebounce, 1000));
