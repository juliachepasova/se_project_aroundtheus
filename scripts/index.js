const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const cardTemplate = document.querySelector("#card");

const cardsWrap = document.querySelector(".cards__list");
const profileEditModal = document.querySelector(".modal");
const profileForm = document.querySelector(".modal__form");

const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditCloseButton = document.querySelector(".modal__close-button");
const profileTitle = document.querySelector(".profile__header");
const profileDescription = document.querySelector(".profile__description");

const titleInputValue = document.querySelector("#name");
const descriptionInputValue = document.querySelector("#description");

function closeModal() {
  profileEditModal.classList.remove("modal_opened");
}

function openModal() {
  profileEditModal.classList.add("modal_opened");
  titleInputValue.value = profileTitle.textContent;
  descriptionInputValue.value = profileDescription.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = titleInputValue.value;
  profileDescription.textContent = descriptionInputValue.value;
  closeModal();
}

function getCardElement(data) {
  const cardElement = document.querySelector("#card").content.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__description");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  return cardElement;
}

profileForm.addEventListener("submit", handleProfileFormSubmit);
profileEditCloseButton.addEventListener("click", closeModal);
profileEditButton.addEventListener("click", openModal);

for (let i = 0; i < initialCards.length; i++) {
  cardsWrap.prepend(getCardElement(initialCards[i]));
}
