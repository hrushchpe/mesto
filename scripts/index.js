const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

const popUp = document.querySelector('.popup');
const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const openPopupProfileButton = document.querySelector('.profile__edit-button');
const closePopupButtonProfile = document.querySelector('.popup__close-button');
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const saveButton = document.querySelector('.popup__save-button');
const popUpProfile = document.querySelector(".popup__profile");
const cardContainer = document.querySelector('.elements__card');
const popUpCard = document.querySelector('.popup__card');
const popupFormCard = document.querySelector(".popup__form_card");
const openPopupButtonCard = document.querySelector('.profile__add-button');
const closePopupButtonCard = document.querySelector('.popup__close-button-card');
const popupImg = document.querySelector(".popup__image");
const popupImgClose = popupImg.querySelector(".popup__close-button-image");
const popupImgTitle = document.querySelector(".popup__image-title");
const popupPhoto = document.querySelector(".popup__photo");
const popupPlaceInput = document.querySelector(".popup__input_type_card_name");
const popupLinkInput = document.querySelector(".popup__input_type_card_link");

function popUpOpenProfile() {
  popUpProfile.classList.add('popup_opened');
  inputUpdateToggle ();
};
function popUpOpenCard() {
  popUpCard.classList.add('popup_opened');
};
function popUpCloseProfile() {
  popUpProfile.classList.remove('popup_opened');
};
function popUpCloseCard() {
  popUpCard.classList.remove('popup_opened');
};
function popUpOpenImage() {
  popupImg.classList.add('popup_opened');
};
function popUpCloseImage() {
  popupImg.classList.remove('popup_opened');
};
function inputUpdateToggle () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
};
openPopupProfileButton.addEventListener('click', () => {
  popUpOpenProfile();
});
openPopupButtonCard.addEventListener('click', () => {
  popUpOpenCard();
});
closePopupButtonProfile.addEventListener('click', () => {
  popUpCloseProfile();
});
closePopupButtonCard.addEventListener('click', () => {
  popUpCloseCard();
});
popupImgClose.addEventListener('click', () => {
  popUpCloseImage();
});

function formSubmitHandlerProfile (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value; 
  profileDescription.textContent = jobInput.value;
  popUpCloseProfile();
};

formElement.addEventListener('submit', formSubmitHandlerProfile);


function addCard(cardData) {
  const cardTemplate = document.querySelector('#element__template').content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const cardTitle = cardElement.querySelector(".element__title");
  const cardImage = cardElement.querySelector(".element__photo");
  const cardLike = cardElement.querySelector(".element__like");
  const cardDeleteButton = cardElement.querySelector(".element__delete");
  
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  
  cardLike.addEventListener("click", () => {
    cardLike.classList.toggle("element__like_active");
  });

  cardImage.addEventListener("click", () => {
    popupPhoto.src = cardData.link;
    popupPhoto.alt = cardData.name;
    popupImgTitle.textContent = cardData.name;
    popUpOpenImage()
  });
  
  cardDeleteButton.addEventListener("click", (evt) => {
    cardElementDelete = evt.target.closest(".element");
    cardElementDelete.remove();
  });
  return cardElement;
};

function formSubmitHandlerAddCard(evt) {
  evt.preventDefault();
  const cardTemplate = addCard({
    name: popupPlaceInput.value,
    link: popupLinkInput.value,
  });
  cardContainer.prepend(cardTemplate);
  popUpCloseCard();
  popupFormCard.reset();
};

popupFormCard.addEventListener("submit", formSubmitHandlerAddCard);

initialCards.forEach((cardData) => {
  const cardTemplate = addCard(cardData);
  cardContainer.append(cardTemplate);
});

