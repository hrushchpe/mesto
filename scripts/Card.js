export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }
    _getTemplate = () => {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        
        return cardElement;
    }
    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__photo');
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
        this._cardLike = this._element.querySelector('.element__like');
        this._cardDeleteButton = this._element.querySelector('.element__delete');
        this._setEventListeners();

        return this._element;
    }
    _setEventListeners() {
        this._cardLike.addEventListener('click', () => {
            this._addLikeCard()
        });
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(cardData)
        });
        this._cardDeleteButton.addEventListener('click', () => {
            this._deleteCard()
        });
    }

    _addLikeCard() {
        this._cardLike.classList.toggle("element__like_active");
    }

    _deleteCard() {
        this._element.remove()
        this._element = null
    }
}