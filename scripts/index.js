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

const cardsWrap = document.querySelector(".cards__list");
const profileEditModal = document.querySelector("#profileEditModal");
const profileForm = profileEditModal.querySelector(".modal__form");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditCloseButton = profileEditModal.querySelector(
  ".modal__close-button"
);
const profileTitle = document.querySelector(".profile__header");
const profileDescription = document.querySelector(".profile__description");

const titleInput = document.querySelector("#name");
const descriptionInput = document.querySelector("#description");

const newCardModal = document.querySelector("#newCardModal");
const newCardButton = document.querySelector(".profile__add-button");
const newCardCloseButton = newCardModal.querySelector(".modal__close-button");
const cardAddForm = newCardModal.querySelector("#add-card-form");

function closeModal(modal) {
  console.log(modal);
  modal.classList.remove("modal_opened");
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  fillProfileForm();
}

function fillProfileForm() {
  titleInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = titleInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(profileEditModal);
}
const cardTemplate = document.querySelector("#card").content;

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__header");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  return cardElement;
  cardsWrap.appendChild(cardElement);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);
profileEditCloseButton.addEventListener("click", () =>
  closeModal(profileEditModal)
);
profileEditButton.addEventListener("click", () => openModal(profileEditModal));

newCardButton.addEventListener("click", () => openModal(newCardModal));
newCardCloseButton.addEventListener("click", () => closeModal(newCardModal));

cardAddForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const link = e.target.link.value;
  getCardElement({
    name: title,
    link: link,
  });
  closeModal(newCardModal);
});

initialCards.forEach(function (cardData) {
  cardsWrap.prepend(getCardElement(cardData));
});
