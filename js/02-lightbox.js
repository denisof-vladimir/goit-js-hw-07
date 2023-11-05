import { galleryItems } from './gallery-items.js';
// Change code below this line



const ulGallery = document.querySelector('.gallery');

let makeLi = '';

galleryItems.forEach((galleryItem) => {
    const itemLi = `<li class="gallery__item">
                        <a class="gallery__link" href="${galleryItem.original}">
                        <img class="gallery__image"
                            src="${galleryItem.preview}" 
                            alt="${galleryItem.description}" /> </a> </li>`;
    
    makeLi += itemLi;
}); 

ulGallery.insertAdjacentHTML('beforeend', makeLi);   
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    });