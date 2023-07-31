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

// функция добавления карточки со всеми обработчиками

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

  const likeButton = document.querySelector('.element__like');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('element__like_active');
  });

  const deleteButton = document.querySelector(".element__delete");
  deleteButton.addEventListener('click', () => {
    cardElement.remove();
  });

  const targetImage = document.querySelector('.element__photo');
  targetImage.addEventListener('click', () => {
    const thisCard = targetImage.closest('.element');

    const photoTitle = thisCard.querySelector('.element__title').textContent;
    const photoSrc = targetImage.src;

    photoText.textContent = photoTitle;
    photoPopup.src = photoSrc;
    openModalWindow(photoPopupWindow);
  });

  closeModalWindow(addPopupWindow);
}

// обработчик события обработки данных из формы редактирования

editPopupForm.addEventListener('submit', handleFormSubmit);

// обработчик открытия попапа редактирования

editButton.addEventListener('click', () => {
  changeEditFields();
  openModalWindow(editPopupWindow);
});

// обработчик кнопки закрытия попапа редактирования

editCloseButton.addEventListener('click', () => closeModalWindow(editPopupWindow));

// обработчик кнопки открытия попапа добавления карточки

addButtutton.addEventListener('click', () => {
  openModalWindow(addPopupWindow);
  addPopupForm.reset();
});

// обработчик кнопки закрытия попапа добавления карточки

addCloseButton.addEventListener('click', () => {
  closeModalWindow(addPopupWindow);
});

// обработчик события обработки данных из формы добавления карточки

addPopupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCard(addFormImage, addFormName, cardsContainer);
});

// обработчик кнопки закрытия попапа просмотра изображения

photoCloseButton.addEventListener('click', () => closeModalWindow(photoPopupWindow));

// отрисовка всех карточек

renderCards();