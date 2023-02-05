export default class FormValidator {
  constructor (config, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
    this._formList = Array.from(document.querySelectorAll('.popup__form'));
    this._buttonElement = this._formSelector.querySelector(this._submitButtonSelector);
  }
  
  _showInputError(input, validationMessage) {
    const error = this._formSelector.querySelector(`.${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    error.classList.add(this._errorClass);
    error.textContent = input.validationMessage;
  };

  _hideInputError(input) {
    const error = this._formSelector.querySelector(`.${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    error.classList.remove(this._errorClass);
    error.textContent = '';
  };

  _checkValidity(input, validationMessage) {
    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input, validationMessage);
      }
  };

  _hasInvalidInput = () => {
    return this._inputList.some(input => {
      return !input.validity.valid;
    });
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  };

  _setEventListeners = () => {
    this._toggleButtonState();
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._checkValidity(input);
        this._toggleButtonState();
      });
    });
  };

  enableValidation = () => {
    this._formList.forEach(form => {
      form.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners();
    });
  };
};

// const checkValidity = (input, config) => {
//   const error = document.querySelector(`.${input.id}-error`);

//   if (input.validity.valid) {
//       error.textContent = '';
//       input.classList.remove(config.errorClass)
//     } else {
//       error.textContent = input.validationMessage
//       input.classList.add(config.errorClass)
//     }
//   }

// const enableValidation = (config) => {
//   const formList = document.querySelectorAll(config.formSelector);
//   formList.forEach(form => {
//     const inputList = Array.from(form.querySelectorAll(config.inputSelector));
//     const button = form.querySelector(config.submitButtonSelector);
//     form.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     inputList.forEach(input => {
//       input.addEventListener('input', () => {
//           checkValidity(input, config);
//           toggleButtonState(inputList, button, config);
//       });
//     });
//   });
// }

// function hasInvalidInput(inputList) {
//   return inputList.some(input => {
//     return !input.validity.valid;
//   });
// };

// function toggleButtonState(inputList, button, config) {
//   if (hasInvalidInput(inputList)) {
//   button.classList.add(config.inactiveButtonClass);
//   button.setAttribute('disabled', true);
//   } else {
//     button.classList.remove(config.inactiveButtonClass);
//     button.removeAttribute('disabled');
//   }
// }


