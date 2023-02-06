import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {initialCards, validationConfig} from './constants.js';

const popupFormProfile = document.querySelector('.popup__form_profile');
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const popupOpenProfileButton = document.querySelector('.profile__edit-button');
const popupCloseButtonProfile = document.querySelector('.popup__close-button');
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const popupSaveButton = document.querySelector('.popup__save-button');
const popUpProfile = document.querySelector(".popup-profile");
const formEditProfile = popUpProfile.querySelector('.popup__container');
const cardContainer = document.querySelector('.elements__card');
const popUpCard = document.querySelector('.popup-card');
const formAddCard = popUpCard.querySelector('.popup__container');
const popupFormCard = document.querySelector(".popup__form_card");
const popupOpenButtonCard = document.querySelector('.profile__add-button');
const popupCloseButtonCard = document.querySelector('.popup__close-button-card');
const popupImg = document.querySelector(".popup-image");
const popupImgClose = popupImg.querySelector('.popup__close-button-image');
const popupImgTitle = document.querySelector(".popup__image-title");
const popupPhoto = document.querySelector(".popup__photo");
const popupPlaceInput = document.querySelector(".popup__input_type_place");
const popupLinkInput = document.querySelector(".popup__input_type_link");
const cardTemplate = document.querySelector('#element__template').content;

const profileEditValidation = new FormValidator(validationConfig, formEditProfile);
const cardAddValidation = new FormValidator(validationConfig, formAddCard);
profileEditValidation.enableValidation();
cardAddValidation.enableValidation();

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup)
  }
}

const handlerClickOverlay = (evt) => {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}
popUpProfile.addEventListener('click', handlerClickOverlay);
popUpCard.addEventListener('click', handlerClickOverlay);
popupImg.addEventListener('click', handlerClickOverlay);

function updatePopupInputs () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
};

popupOpenProfileButton.addEventListener('click', () => {
  openPopup(popUpProfile);
  updatePopupInputs();
});
popupOpenButtonCard.addEventListener('click', () => {
  openPopup(popUpCard);
});
popupCloseButtonProfile.addEventListener('click', () => {
  closePopup(popUpProfile);
});
popupCloseButtonCard.addEventListener('click', () => {
  closePopup(popUpCard);
});
popupImgClose.addEventListener('click', () => {
  closePopup(popupImg);
});

function handleSubmitProfileForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value; 
  profileDescription.textContent = jobInput.value;
  closePopup(popUpProfile);
};

popupFormProfile.addEventListener('submit', handleSubmitProfileForm);


function createCard(data) {
  const newCard = new Card(data, '#element__template', handleCardClick)
  return newCard.generateCard();
};

function handleCardClick() {
  popupPhoto.src = this._link;
  popupPhoto.alt = this._name;
  popupImgTitle.textContent = this._name;
  openPopup(popupImg);
};

function handleSubmitAddCardForm(evt) {
  evt.preventDefault();
  const cardTemplate = createCard({
    name: popupPlaceInput.value,
    link: popupLinkInput.value,
  });
  cardContainer.prepend(cardTemplate);
  closePopup(popUpCard);
  popupFormCard.reset();
  cardAddValidation.disableSubmitButton();
};



popupFormCard.addEventListener("submit", handleSubmitAddCardForm);

initialCards.forEach((cardData) => {
  const cardTemplate = createCard(cardData);
  cardContainer.append(cardTemplate);
});

