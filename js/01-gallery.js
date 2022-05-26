import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
};

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

refs.gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup);
refs.gallery.addEventListener("click", onGalleryItemClick);

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

function onGalleryItemClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const url = event.target.dataset.source;
  const alt = event.target.alt;

  openOriginalSizeImage(url, alt);
}

const instance = basicLightbox.create("", {
  className: "lightbox",
});

const element = instance.element();

function lightboxHtml(imgUrl, imgCaption) {
  let htmlValue = `
  <div class="gallery__item">
    <a class="gallery__link" href="${imgUrl}">
      <img
        class="gallery__image"
        src="${imgUrl}"
        data-source="${imgUrl}"
        alt="${imgCaption}"
      />
    </a>
  </div>
    `;
  return htmlValue;
}

function openOriginalSizeImage(url, caption) {
  element.innerHTML = lightboxHtml(url, caption);
  instance.show();

  instance.show(() => console.log(`lightbox now visible`));
}

// function makeLightbox(url, caption) {
//   elem.innerHTML = lightboxHtml(url, caption); // update content of lightbox according to the result of lightboxHTML()
//   instance.show(); //show the lightbox
// }

// Завдання 1 - галерея зображень
// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.

// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

// Реалізація делегування на div.gallery і отримання url великого зображення.

// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.

// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
