import axios from 'axios';

import { NewApiService } from './js/pixabay-api';
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
let loadMoreBtn = document.querySelector('.load-more');

loader.classList.replace('loader', 'hide');
loadMoreBtn.classList.replace('load-more', 'hide');

let isShown = 0;
const newsApiService = new NewApiService();

searchFormEl.addEventListener('submit', async e => {
  e.preventDefault();
  cleanHtml();
  newsApiService.query = inputForm.value.trim();
  loader.classList.replace('hide', 'loader');
  loadMoreBtn.classList.replace('load-more', 'hide');
  newsApiService.resetPage();
  if (newsApiService.query !== '') {
    isShown = 0;
    fetchImages();
    renderImages(hits);
    // catch (error) {
    //   loader.classList.replace('loader', 'hide');
    //   loadMoreBtn.classList.replace('load-more', 'hide');
    //   iziToast.error({
    //     title: 'Error',
    //     message: `Error! Sorry, something went wrong. This is an error!`,
    //     color: '#ef4040',
    //     close: false,
    //   });
    // }
    searchFormEl.reset();
  } else {
    loader.classList.replace('loader', 'hide');
    iziToast.warning({
      title: 'Caution',
      message: `You forgot important data! Enter something!`,
      color: '#ffa000',
      close: false,
    });
    return;
  }
});

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
function cleanHtml() {
  gallery.innerHTML = '';
}

async function fetchImages() {
  loadMoreBtn.classList.replace('load-more', 'hide');

  const result = await newsApiService.fetchImages();
  const { hits, total } = result;
  isShown += hits.length;

  if (!hits.length) {
    iziToast.error({
      title: 'Error',
      message: `Sorry, there are no images matching your search query. Please try again!`,
      color: '#ef4040',
      close: false,
    });
    loadMoreBtn.classList.replace('load-more', 'hide');
    return;
  }
  renderImages(hits);
  isShown += hits.length;
  gallerySimpleLightbox.refresh();
  loader.classList.replace('loader', 'hide');
  if (isShown < total) {
    loadMoreBtn.classList.replace('hide', 'load-more');
  }
  if (isShown >= total) {
    loadMoreBtn.classList.replace('load-more', 'hide');
    iziToast.error({
      title: 'Error',
      message: `We're sorry, but you've reached the end of search results.`,
      color: '#ef4040',
      close: false,
    });
  }
}
