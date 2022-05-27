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

// включаємо розмітку в ДОМ-дерево
refs.gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup);

// функція, яка створює розмітку
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

  //забираємо змінні з картинки, по якій клікнули
  const url = event.target.dataset.source;
  const alt = event.target.alt;

  console.log(event.target);
  openOriginalSizeImage(url, alt);
}

// функція, яка відкриває оригінальне зображення на повний екран
function openOriginalSizeImage(url, alt) {
  instance = basicLightbox.create(`
    <img src="${url}" alt="${alt}" width="800" height="600">
`);

  console.log(instance);
  instance.show();

  window.addEventListener("keydown", onEscKeyPress);
}

function onEscKeyPress(event) {
  if (event.code === "Escape") {
    console.log(event.code);

    instance.close();
    window.removeEventListener("keydown", onEscKeyPress);
  }
}

// Завдання 1 - галерея зображень
// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.

// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

// Реалізація делегування на div.gallery і отримання url великого зображення.

// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.

// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
