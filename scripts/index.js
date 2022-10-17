let popUp = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_description");
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let saveButton = document.querySelector('.popup__save-button');

function popUpOpen() {
    popUp.classList.add('popup_opened');
}
function popUpClose() {
    popUp.classList.remove('popup_opened');
}
function inputToggle () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}
openPopupButton.addEventListener('click', () => {
    popUpOpen();
    inputToggle ();
})
closePopupButton.addEventListener('click', () => {
    popUpClose();
})

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value; 
    profileDescription.textContent = jobInput.value;
    popUpClose();

}
formElement.addEventListener('submit', formSubmitHandler);


