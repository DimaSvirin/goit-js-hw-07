import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery")

function createGalleryCards(items) {
    return items.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>        </li>
    `;
    }).join("");
};

const cardsMarkup = createGalleryCards(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)


galleryContainer.addEventListener("click", handleGalleryClick)

function handleGalleryClick() {
    event.preventDefault()

    if (event.target.nodeName !== 'IMG') {
        return
    }

    const modalImg = event.target.dataset.source

    const instance = basicLightbox.create(
        `<img src="${modalImg}" alt="" wigth="800" heigth="600">`
    )
    instance.show()
}

