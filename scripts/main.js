let popUp = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector(".popup__input_name");
let jobInput = document.querySelector(".popup__input_description");
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let saveButton = document.querySelector('.popup__save-button');

function popUpToggle() {
    popUp.classList.toggle('popup_opened');
}

openPopupButton.addEventListener('click', () => {
    popUpToggle();
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
})
closePopupButton.addEventListener('click', () => {
    popUpToggle();
})

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popUpToggle();

}
formElement.addEventListener('submit', formSubmitHandler);


