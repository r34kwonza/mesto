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
const popupForm = document.querySelector('.popup__form');
const closeButton = document.querySelector('.popup__close-btn');
const popupWindow = document.querySelector('.popup');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const formProfileName = document.querySelector("#nameField");
const formDescriptionName = document.querySelector("#descriptionField");


const changeEditFields = () => {
  formProfileName.value = profileName.textContent;
  formDescriptionName.value = profileDescription.textContent;
}

const popupAction = () => {
  if (popupWindow.classList.contains('popup_opened')) {
    popupWindow.classList.remove('popup_opened');
  }
  else {
    changeEditFields();
    popupWindow.classList.add('popup_opened');
  }
}

const handleFormSubmit = (evt) => {
  evt.preventDefault();

  profileName.textContent = nameField.value;
  profileDescription.textContent = descriptionField.value;

  popupAction();
}

popupForm.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', popupAction);
closeButton.addEventListener('click', popupAction);


