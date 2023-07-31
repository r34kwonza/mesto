// определяем значения полей для стартовых карточек

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

// получаем весь список карточек

const cardsContainer = document.querySelector('.elements__list');

// функция для отрисовывания карточек

const renderCards = () => {

  for (let i = 0; i < initialCards.length; i++) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);

    cardElement.querySelector('.element__photo').src = initialCards[i].link;
    cardElement.querySelector('.element__title').textContent = initialCards[i].name;

    cardsContainer.append(cardElement);
  }
}

// отрисовываем первоначальные карточки

renderCards();

// определяем элементы для попапа редактирования профиля

const editButton = document.querySelector('.profile__edit-button');
const editPopupForm = document.querySelector('#profile-edit-form');
const editCloseButton = document.querySelector('#edit-close');
const editPopupWindow = document.querySelector('.popup_content_edit');

const editProfileName = document.querySelector('.profile__name');
const editProfileDescription = document.querySelector('.profile__description');

const editFormProfileName = document.querySelector("#editNameField");
const editFormDescriptionName = document.querySelector("#editDescriptionField");

// фунция для замены данных профиля новыми значениями

const changeEditFields = () => {
  editFormProfileName.value = editProfileName.textContent;
  editFormDescriptionName.value = editProfileDescription.textContent;
}

// функция для управления состоянием попапа редактирования профиля

const editPopupAction = () => {
  if (editPopupWindow.classList.contains('popup_opened')) {
    editPopupWindow.classList.remove('popup_opened');
  }
  else {
    changeEditFields();
    editPopupWindow.classList.add('popup_opened');
  }
}

// функция кнопки "Сохранить" формы для попапа редактирования профиля

const handleFormSubmit = (evt) => {
  evt.preventDefault();

  editProfileName.textContent = editNameField.value;
  editProfileDescription.textContent = editDescriptionField.value;

  editPopupAction();
}

// обработчик событий для элементов попапа редактирования профиля

editPopupForm.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', editPopupAction);
editCloseButton.addEventListener('click', editPopupAction);

// определяем элементы для попапа добавления карточки

const addButtutton = document.querySelector('.profile__add-button');
const addPopupForm = document.querySelector('#add-card-form');
const addCloseButton = document.querySelector('#add-close');
const addPopupWindow = document.querySelector('.popup_content_add');

const addFormName = document.querySelector("#addNameField");
const addFormImage = document.querySelector("#addImageField");

// функция для управления состоянием попапа добавления карточки

const addPopupAction = () => {
  if (addPopupWindow.classList.contains('popup_opened')) {
    addPopupWindow.classList.remove('popup_opened');
    addFormImage.value = '';
    addFormName.value = ''
  }
  else {
    addPopupWindow.classList.add('popup_opened');
  }
}

// функция добавления карточки по заполненным данным

const addCard = (evt) => {
  evt.preventDefault();

  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);

  cardElement.querySelector('.element__photo').src = addFormImage.value;
  cardElement.querySelector('.element__title').textContent = addFormName.value;

  cardsContainer.append(cardElement);

  addPopupAction();
}

// обработчик событий для элементов попапа добавления карточки

addButtutton.addEventListener('click', addPopupAction);
addCloseButton.addEventListener('click', addPopupAction);
addPopupForm.addEventListener('submit', addCard);

// функция для изменения класса кнопки лайк

const likeAction = (evt) => {
  const likeTarget = evt.target;

  if (likeTarget.classList.contains('element__like_active')) {
      likeTarget.classList.remove('element__like_active');
  } else {
      likeTarget.classList.add('element__like_active');
  }
};

// обработчик события лайка для всего контейнера с карточками

cardsContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__like')) {
      likeAction(evt);
  }
});

// определение переменной для удаления карточки

const deleteButton = document.querySelector(".element__delete");

// функция для удаления карточки

const deleteCard = (evt) => {
  const deleteButtonTarget = evt.target;
  const cardElement = deleteButtonTarget.parentNode;
  cardElement.remove();
}

// обработчик события удаления карточки для всего контейнера

cardsContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__delete')) {
      deleteCard(evt);
  }
});

// определение элементов для попапа просмотра изображения

const photoPopupWindow = document.querySelector(".popup_content_image");
const photoElement = document.querySelector(".element__photo");
const photoPopup = document.querySelector(".popup__img");
const photoCloseButton = document.querySelector('#photo-close');
const photoText = document.querySelector('.popup__name');

// функция открытия попапа с просмотром изображения

const photoPopupAction = () => {
  if (photoPopupWindow.classList.contains('popup_opened')) {
    photoPopupWindow.classList.remove('popup_opened');
  }
  else {
    photoPopupWindow.classList.add('popup_opened');
  }
}

// обработчики событий для попапа просмотра фото
// может быть стоит убрать условие

photoCloseButton.addEventListener('click', photoPopupAction);

cardsContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__photo')) { 
      const photoTarget = evt.target;
      const thisCard = photoTarget.parentNode;

      photoText.textContent = thisCard.querySelector('.element__title').textContent;
      photoPopup.src = photoTarget.src;
      photoPopupAction();
  }
});
