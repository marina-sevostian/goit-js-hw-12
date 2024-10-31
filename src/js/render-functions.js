let gallery = document.querySelector('.gallery');

export function renderImages(images) {
  const markup = images
    .map(image => {
      return `<div class="photo">
   <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      data-source="${image.largeImageURL}"
      alt="${image.tags}"
    />
  </a>
  <div class="info">
  <p class="info-item">Likes <span class="info-item-num">${image.likes}</span></p>
  <p class="info-item">Views <span class="info-item-num">${image.views}</span></p>
  <p class="info-item">Comments <span class="info-item-num">${image.comments}</span></p>
  <p class="info-item">Downloads <span class="info-item-num">${image.downloads}</span></p>
  </div>
     </div> `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
