import { galleryItems } from "./gallery-items.js";
// Change code below this line

// оголошуємо змінні
const refs = {
  gallery: document.querySelector(".gallery"),
};
let instance = "";

// створюємо розмітку галереї
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

// додаємо слухача на галерею
refs.gallery.addEventListener("click", onGalleryItemClick);

// додаємо ДОМ-елементи з розмітки в дерево
refs.gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup);

// функція, яка створює розмітку галереї у вигляді шаблонного рядка
function createGalleryItemsMarkup(array) {
  return array
    .map(
      ({ preview, original, description }) => `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`
    )
    .join("");
}

// функція-колбек, яка запускається при кліку
function onGalleryItemClick(event) {
  event.preventDefault();

  // перевірка, чи клік по картинці
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  // зберігаємо у змінні потрібні нам значення з картинки, по якій клікнули
  const url = event.target.dataset.source;
  const alt = event.target.alt;

  openOriginalSizeImage(url, alt);
}

// функція, яка відкриває оригінальне зображення на повний екран
function openOriginalSizeImage(url, alt) {
  instance = basicLightbox.create(`
    <img src="${url}" alt="${alt}" width="800" height="600">
`);

  instance.show();

  // додаємо прослуховування клавіатури при відкритому модальному вікні
  window.addEventListener("keydown", onEscKeyPress);
}

// функція, яка виконується при події клавіатури
function onEscKeyPress(event) {
  if (event.code === "Escape") {
    instance.close();

    // знімаємо прослуховування клавіатури при закритті модального вікна
    window.removeEventListener("keydown", onEscKeyPress);
  }
}
