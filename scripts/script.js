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

const cardsContainer = document.querySelector('.elements__list');

const renderCards = () => {

  for (let i = 0; i < initialCards.length; i++) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);

    cardElement.querySelector('.element__photo').src = initialCards[i].link;
    cardElement.querySelector('.element__title').textContent = initialCards[i].name;

    cardsContainer.append(cardElement);
  }
}

renderCards();

const editButton = document.querySelector('.profile__edit-button');
const popupForm = document.querySelector('#profile-edit-form');
const editCloseButton = document.querySelector('#edit-close');
const popupWindow = document.querySelector('#edit-popup');

const addButtutton = document.querySelector('.profile__add-button');
const addPopupForm = document.querySelector('#add-card-form');
const addCloseButton = document.querySelector('#add-close');
const addPopupWindow = document.querySelector('#add-popup');


const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const formProfileName = document.querySelector("#nameField");
const formDescriptionName = document.querySelector("#descriptionField");

const addFormProfileName = document.querySelector("#placeNameField");
const addFormDescriptionName = document.querySelector("#placeDescriptionField");


const changeEditFields = () => {
  formProfileName.value = profileName.textContent;
  formDescriptionName.value = profileDescription.textContent;
}

const editPopupAction = () => {
  if (popupWindow.classList.contains('popup_opened')) {
    popupWindow.classList.remove('popup_opened');
  }
  else {
    changeEditFields();
    popupWindow.classList.add('popup_opened');
  }
}

const addPopupAction = () => {
  if (addPopupWindow.classList.contains('popup_opened')) {
    addPopupWindow.classList.remove('popup_opened');
    addFormDescriptionName.value = '';
    addFormProfileName.value = ''

  }
  else {
    changeEditFields();
    addPopupWindow.classList.add('popup_opened');
  }
}

const handleFormSubmit = (evt) => {
  evt.preventDefault();

  profileName.textContent = nameField.value;
  profileDescription.textContent = descriptionField.value;

  editPopupAction();
}

popupForm.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', editPopupAction);
addButtutton.addEventListener('click', addPopupAction);

editCloseButton.addEventListener('click', editPopupAction);
addCloseButton.addEventListener('click', addPopupAction);

const addCard = (evt) => {
  evt.preventDefault();

  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);

  cardElement.querySelector('.element__photo').src = addFormDescriptionName.value;
  cardElement.querySelector('.element__title').textContent = addFormProfileName.value;

  cardsContainer.append(cardElement);

  addPopupAction();
}

addPopupForm.addEventListener('submit', addCard);

