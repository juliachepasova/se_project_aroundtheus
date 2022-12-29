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

const cardTemplate = document.querySelector("#card").content;

function handleLikeButton(evt) {
  evt.target.classList.toggle(".card__like-button_is-active");
}
function handleDeleteCard(evt) {
  evt.target.closest(".card").remove();
}

function closeModal(modal) {
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

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__header");
  const likeButton = document.querySelector(".card__like-button");
  const deleteButton = document.querySelector(".card__delete-button");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  likeButton.addEventListener("click", handleLikeButton);
  deleteButton.addEventListener("click", handleDeleteCard);

  return cardElement;
}

profileForm.addEventListener("submit", handleProfileFormSubmit);
profileEditButton.addEventListener("click", () => openModal(profileEditModal));
profileEditCloseButton.addEventListener("click", () =>
  closeModal(profileEditModal)
);

newCardButton.addEventListener("click", () => openModal(newCardModal));
newCardCloseButton.addEventListener("click", () => closeModal(newCardModal));

cardAddForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const link = e.target.link.value;
  const cardElement = getCardElement({
    name: title,
    link: link,
  });
  cardsWrap.prepend(cardElement);
  closeModal(newCardModal);
});

initialCards.forEach(function (cardData) {
  cardsWrap.prepend(getCardElement(cardData));
});
