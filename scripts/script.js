// получаем весь список карточек

const cardsContainer = document.querySelector('.elements__list');

// определяем элементы для попапа редактирования профиля

const editButton = document.querySelector('.profile__edit-button');
const editPopupForm = document.querySelector('#profile-edit-form');
const editCloseButton = document.querySelector('#edit-close');
const editPopupWindow = document.querySelector('.popup_content_edit');

const editProfileName = document.querySelector('.profile__name');
const editProfileDescription = document.querySelector('.profile__description');

const editFormProfileName = document.querySelector("#editNameField");
const editFormDescriptionName = document.querySelector("#editDescriptionField");

// определяем элементы для попапа добавления карточки

const addButtutton = document.querySelector('.profile__add-button');
const addPopupForm = document.querySelector('#add-card-form');
const addCloseButton = document.querySelector('#add-close');
const addPopupWindow = document.querySelector('.popup_content_add');

const addFormName = document.querySelector("#addNameField");
const addFormImage = document.querySelector("#addImageField");

// определяем элементы для попапа просмотра изображения

const photoPopupWindow = document.querySelector(".popup_content_image");
const photoElement = document.querySelector(".element__photo");
const photoPopup = document.querySelector(".popup__img");
const photoCloseButton = document.querySelector('#photo-close');
const photoText = document.querySelector('.popup__name');

// определение переменной для удаления карточки

const deleteButton = document.querySelector(".element__delete");

// функция для отрисовывания карточек

const renderCards = () => {
  for (let i = 0; i < initialCards.length; i++) {
    addCard(initialCards[i].link, initialCards[i].name);
  }
}

// фунция для замены данных профиля новыми значениями

const changeEditFields = () => {
  editFormProfileName.value = editProfileName.textContent;
  editFormDescriptionName.value = editProfileDescription.textContent;
}

// функции для открытия и закрытия попапа

const openModalWindow = (modalWindow) => {
  modalWindow.classList.add('popup_opened');
}

const closeModalWindow = (modalWindow) => {
  modalWindow.classList.remove('popup_opened');
}

// функция кнопки "Сохранить" формы для попапа редактирования профиля

const handleFormSubmit = (evt) => {
  evt.preventDefault();

  editProfileName.textContent = editNameField.value;
  editProfileDescription.textContent = editDescriptionField.value;

  changeEditFields();
  closeModalWindow(editPopupWindow);
}

// функция добавления карточки по заполненным данным

const addCard = (imageField, nameField) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);

  if (imageField.value) {
    cardElement.querySelector('.element__photo').src = imageField.value;
    cardElement.querySelector('.element__title').textContent = nameField.value;
  } else {
    cardElement.querySelector('.element__photo').src = imageField;
    cardElement.querySelector('.element__title').textContent = nameField;
  }

  cardsContainer.prepend(cardElement);

  closeModalWindow(addPopupWindow);
}

// функция для изменения класса кнопки лайк

const likeAction = (evt) => {
  const likeTarget = evt.target;
  likeTarget.classList.toggle('element__like_active');
}

// функция для удаления карточки

const deleteCard = (evt) => {
  const deleteButtonTarget = evt.target;
  const cardElement = deleteButtonTarget.parentNode;
  cardElement.remove();
}

// обработчик событий для элементов попапа редактирования профиля

editPopupForm.addEventListener('submit', handleFormSubmit);

editButton.addEventListener('click', () => {
  changeEditFields();
  openModalWindow(editPopupWindow);
});

editCloseButton.addEventListener('click', () => closeModalWindow(editPopupWindow));

// обработчик событий для элементов попапа добавления карточки

addButtutton.addEventListener('click', () => {
  openModalWindow(addPopupWindow);
  addPopupForm.reset();
});

addCloseButton.addEventListener('click', () => {
  closeModalWindow(addPopupWindow);
});

addPopupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCard(addFormImage, addFormName, cardsContainer);
});

// обработчик события лайка для всего контейнера с карточками

cardsContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__like')) {
      likeAction(evt);
  }
});

// обработчик события удаления карточки для всего контейнера

cardsContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__delete')) {
      deleteCard(evt);
  }
});

// обработчики событий для попапа просмотра фото
// может быть стоит убрать условие

photoCloseButton.addEventListener('click', () => closeModalWindow(photoPopupWindow));

cardsContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__photo')) { 
    const photoTarget = evt.target;
    const thisCard = photoTarget.closest('.element');

    const photoTitle = thisCard.querySelector('.element__title').textContent;
    const photoSrc = photoTarget.src;

    photoText.textContent = photoTitle;
    photoPopup.src = photoSrc;
    openModalWindow(photoPopupWindow);
  }
});

// отрисовываем первоначальные карточки

renderCards();