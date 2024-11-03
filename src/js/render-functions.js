let gallery = document.querySelector('.gallery');

export function renderImages(hits) {
  const markup = hits
    .map(item => {
      return `<div class="photo">
   <a class="gallery-link" href="${item.largeImageURL}">
    <img
      class="gallery-image"
      src="${item.webformatURL}"
      data-source="${item.largeImageURL}"
      alt="${item.tags}"
    />
  </a>
  <div class="info">
  <p class="info-item">Likes <span class="info-item-num">${item.likes}</span></p>
  <p class="info-item">Views <span class="info-item-num">${item.views}</span></p>
  <p class="info-item">Comments <span class="info-item-num">${item.comments}</span></p>
  <p class="info-item">Downloads <span class="info-item-num">${item.downloads}</span></p>
  </div>
     </div> `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
