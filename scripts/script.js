console.log(1);

const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-btn');
const popupForm = document.querySelector('.popup__form');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile-info__description');

const formProfileName = document.querySelector('.form__name');
const formDescriptionName = document.querySelector('.profile__description');

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
  profileName.textContent = document.querySelector('.popup__input').value;
  profileDescription.textContent = document.querySelector('.popup__input').value;
  popupAction();
}

popupForm.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', popupAction);
closeButton.addEventListener('click', popupAction);


