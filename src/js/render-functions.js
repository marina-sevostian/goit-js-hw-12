let gallery = document.querySelector('.gallery');

export function renderImages(hits) {
  const markup = hits
    .map(hits => {
      return `<div class="photo">
   <a class="gallery-link" href="${hits.largeImageURL}">
    <img
      class="gallery-image"
      src="${hits.webformatURL}"
      data-source="${hits.largeImageURL}"
      alt="${hits.tags}"
    />
  </a>
  <div class="info">
  <p class="info-item">Likes <span class="info-item-num">${hits.likes}</span></p>
  <p class="info-item">Views <span class="info-item-num">${hits.views}</span></p>
  <p class="info-item">Comments <span class="info-item-num">${hits.comments}</span></p>
  <p class="info-item">Downloads <span class="info-item-num">${hits.downloads}</span></p>
  </div>
     </div> `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
