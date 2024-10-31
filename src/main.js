import axios from 'axios';

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let gallery = document.querySelector('.gallery');
const fetchImagesBtn = document.querySelector('.search-form-btn');
let searchFormEl = document.querySelector('.search-form');
let inputForm = document.querySelector('.search-form-input');
let gallerySimpleLightbox = new SimpleLightbox('.gallery a');
let loader = document.querySelector('.loader');

loader.classList.replace('loader', 'hide');

searchFormEl.addEventListener('submit', async e => {
  e.preventDefault();
  const inputValue = inputForm.value.trim();
  cleanHtml();
  loader.classList.replace('hide', 'loader');
  if (inputValue !== '') {
    await fetchImages(inputValue)
      .then(images => {
        if (images.hits.length === 0) {
          iziToast.error({
            title: 'Error',
            message: `Sorry, there are no images matching your search query. Please try again!`,
            color: '#ef4040',
            close: false,
          });
        }
        renderImages(images.hits);
        gallerySimpleLightbox.refresh();
        loader.classList.replace('loader', 'hide');
      })
      .catch(error => {
        loader.classList.replace('loader', 'hide');
        iziToast.error({
          title: 'Error',
          message: `Error! Sorry, something went wrong. This is an error!`,
          color: '#ef4040',
          close: false,
        });
      });
    searchFormEl.reset();
  } else {
    loader.classList.replace('loader', 'hide');
    iziToast.warning({
      title: 'Caution',
      message: `You forgot important data! Enter something!`,
      color: '#ffa000',
      close: false,
    });
  }
});

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
function cleanHtml() {
  gallery.innerHTML = '';
}

// let loader = document.querySelector('.loader');

// window.addEventListener('load', () => {
//   loader.classList.add('.visually-hidden');
//   setTimeout(() => {
//     loader.remove();
//   }, 600);
// });
// let loader = document.querySelector('.loader');
// loader.classList.remove('.visually-hidden');
// loader.classList.add('.visually-hidden');
