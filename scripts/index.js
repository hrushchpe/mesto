const popupFormProfile = document.querySelector('.popup__form_profile');
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const PopupOpenProfileButton = document.querySelector('.profile__edit-button');
const PopupCloseButtonProfile = document.querySelector('.popup__close-button');
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const PopupSaveButton = document.querySelector('.popup__save-button');
const popUpProfile = document.querySelector(".popup-profile");
const cardContainer = document.querySelector('.elements__card');
const popUpCard = document.querySelector('.popup-card');
const popupFormCard = document.querySelector(".popup__form_card");
const PopupOpenButtonCard = document.querySelector('.profile__add-button');
const PopupCloseButtonCard = document.querySelector('.popup__close-button-card');
const popupImg = document.querySelector(".popup-image");
const popupImgClose = popupImg.querySelector('.popup__close-button-image');
const popupImgTitle = document.querySelector(".popup__image-title");
const popupPhoto = document.querySelector(".popup__photo");
const popupPlaceInput = document.querySelector(".popup__input_type_place");
const popupLinkInput = document.querySelector(".popup__input_type_link");
const cardTemplate = document.querySelector('#element__template').content;

function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//function popUpOpenProfile() {
  //popUpProfile.classList.add('popup_opened');
  //UpdateInputToggle ();
//};

//function popUpOpenCard() {
  //popUpCard.classList.add('popup_opened');
//};

//function popUpCloseProfile() {
  //popUpProfile.classList.remove('popup_opened');
//};

//function popUpCloseCard() {
  //popUpCard.classList.remove('popup_opened');
//};

//function popUpOpenImage() {
  //popupImg.classList.add('popup_opened');
//};

//function popUpCloseImage() {
  //popupImg.classList.remove('popup_opened');
//};

function UpdateInputToggle () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
};

PopupOpenProfileButton.addEventListener('click', () => {
  openPopup(popUpProfile);
  UpdateInputToggle();
});
PopupOpenButtonCard.addEventListener('click', () => {
  openPopup(popUpCard);
});

PopupCloseButtonProfile.addEventListener('click', () => {
  closePopup(popUpProfile);
});
PopupCloseButtonCard.addEventListener('click', () => {
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


function addCard(cardData) {
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
    openPopup(popupImg);
  });
  
  cardDeleteButton.addEventListener("click", (evt) => {
    cardElementDelete = evt.target.closest(".element").remove();
  });
  return cardElement;
};

function handleSubmitAddCardForm(evt) {
  evt.preventDefault();
  const cardTemplate = addCard({
    name: popupPlaceInput.value,
    link: popupLinkInput.value,
  });
  cardContainer.prepend(cardTemplate);
  closePopup(popUpCard);
  popupFormCard.reset();
};

popupFormCard.addEventListener("submit", handleSubmitAddCardForm);

initialCards.forEach((cardData) => {
  const cardTemplate = addCard(cardData);
  cardContainer.append(cardTemplate);
});

