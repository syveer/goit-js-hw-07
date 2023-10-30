import { galleryItems } from "./gallery-items.js";

const listEl = document.querySelector(".gallery");
galleryItems.forEach((item) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("gallery__item");
  listItemEl.innerHTML = `<a class= 'gallery__link' href= '${item.original}'>
        <img class= 'gallery__image'
        src='${item.preview}'
        alt='${item.description}'/>
    </a>`;
  listEl.append(listItemEl);
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

listEl.addEventListener("click", openImageInLightbox);
function openImageInLightbox(event) {
  const clickedOn = event.target;

  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  const imageSource = event.target.dataset.source;
  lightbox.open({ items: [imageSource] });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.close();
    }
  });
}
