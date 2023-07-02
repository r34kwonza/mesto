const editButton = document.querySelector('.profile__edit-button');
const popupForm = document.querySelector('.popup__form');
const closeButton = document.querySelector('.popup__close-btn');
const popupWindow = document.querySelector('.popup');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const formProfileName = document.querySelector("#nameField");
const formDescriptionName = document.querySelector("#descriptionField");


function changeEditFields() {
  formProfileName.value = profileName.textContent;
  formDescriptionName.value = profileDescription.textContent;
}

function popupAction() {
  if (popupWindow.classList.contains('popup_opened')) {
    popupWindow.classList.remove('popup_opened');
  }
  else {
    changeEditFields();
    popupWindow.classList.add('popup_opened');
  }
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameField.value;
  profileDescription.textContent = descriptionField.value;

  popupAction();
}

popupForm.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', popupAction);
closeButton.addEventListener('click', popupAction);


