// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery");

const imagesMarkup = createItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", imagesMarkup);

function createItemsMarkup(galleryItems) {

    return galleryItems.map(({ original,  preview,  description }) => {
        return `
    <li class="gallery__item">
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" title="${description}" />
    </a>
    </li>`

    }).join('');
};

   let gallery = new SimpleLightbox(".gallery a");
gallery.on('show.simplelightbox', () => {
    captionsData: 'title';
    captionDelay: 250; 
    });

console.log(galleryItems);
