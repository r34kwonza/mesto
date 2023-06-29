let editButton = document.querySelector('.title__edit-button');
let closeButton = document.querySelector('.form__close-btn');
let popupForm = document.querySelector('.popup');

let profileName = document.querySelector('.title__name');
let profileDescription = document.querySelector('.profile-info__description');

let formProfileName = document.querySelector('.form__name');
let formDescriptionName = document.querySelector('.form__description');

function changeEditFields() {
  formProfileName.value = profileName.textContent;
  formDescriptionName.value = profileDescription.textContent;
}

function popupAction() {
  if (popupForm.classList.contains('popup_opened')) {
    popupForm.classList.remove('popup_opened');
  }
  else {
    changeEditFields();
    popupForm.classList.add('popup_opened');
  }
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = document.querySelector('.form__name').value;
  profileDescription.textContent = document.querySelector('.form__description').value;
  popupAction();
}

popupForm.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', popupAction);
closeButton.addEventListener('click', popupAction);


