import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery")

function createGalleryCards(items) {
    return items.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
//   <a class="gallery__link" href=${original}>
//     <img
//       class="gallery__image"
//       src=${preview}
//       data-source=${original}
//       alt=${description}
//     />
//   </a>
// </li>
    `;
    }).join("");
};

const cardsMarkup = createGalleryCards(galleryItems);
galleryContainer.insertAdjacentHTML(`beforeend`, cardsMarkup)


// Шаблон
// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>
console.log(galleryItems);
