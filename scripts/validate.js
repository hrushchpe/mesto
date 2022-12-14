
const checkValidity = (input, config) => {
  const error = document.querySelector(`.${input.id}-error`);

  if (input.validity.valid) {
      error.textContent = '';
      input.classList.remove(config.errorClass)
    } else {
      error.textContent = input.validationMessage
      input.classList.add(config.errorClass)
    }
  }



const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach(form => {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    const button = form.querySelector(config.submitButtonSelector);
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    inputList.forEach(input => {
      input.addEventListener('input', () => {
          checkValidity(input, config);
          toggleButtonState(inputList, button, config);
      });
    });
  });
}

function hasInvalidInput(inputList) {
  return inputList.some(input => {
    return !input.validity.valid;
  });
};

function toggleButtonState(inputList, button, config) {
  if (hasInvalidInput(inputList)) {
  button.classList.add(config.inactiveButtonClass);
  button.setAttribute('disabled', true);
  } else {
    button.classList.remove(config.inactiveButtonClass);
    button.removeAttribute('disabled');
  }
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button-inactive',
  inputErrorClass: '.popup__input_error',
  errorClass: 'popup__input_type_error',
});
