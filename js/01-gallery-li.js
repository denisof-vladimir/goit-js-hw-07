import { galleryItems } from './gallery-items.js';
// Change code below this line


const ulGallery = document.querySelector('.gallery');

let makeLi = '';

galleryItems.forEach((galleryItem) => {
    const itemLi = `<li class="gallery__item">
        <img
            class="gallery__image lazyload"
            src="${galleryItem.preview}" 
            data-source="${galleryItem.original}"
            alt="${galleryItem.description}" > </li> `;
    
    makeLi += itemLi;
}); 

ulGallery.insertAdjacentHTML('beforeend', makeLi);   

const divBackdrop = document.querySelector('.backdrop');
const butCloseBtn = document.querySelector('.CloseBtn');
const imgModal = document.querySelector('.gallery__link');
ulGallery.addEventListener('click', openModal);

function openModal(event) {
    if (event.target.nodeName === "UL") {      return;    }
 
    if (event.target.nodeName === "IMG") {
        imgModal.src = event.target.dataset.source;
        imgModal.alt = event.target.alt;
        divBackdrop.classList.add(`open`);
        window.addEventListener('keydown', closeByEsc);
        divBackdrop.addEventListener('click', closeByBackdrop);
        butCloseBtn.addEventListener('click', closeModal);  
    }
}

function closeModal() {
    divBackdrop.classList.remove(`open`);
    imgModal.src = '';
    imgModal.alt = '';
    window.removeEventListener('keydown', closeByEsc);
}

function closeByEsc({code}) {
    if (code === "Escape") {
        closeModal();
    }
}

function closeByBackdrop(event) {
    if (event.target === event.currentTarget) {
        closeModal();
    }
}
