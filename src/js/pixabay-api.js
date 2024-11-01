import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export default class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 15;
  }
  async fetchImages() {
    const axiosOptions = {
      method: 'get',
      url: 'https://pixabay.com/api/',
      params: {
        key: '46729875-7729b8e358007a47de817f6d1',
        q: `${this.searchQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: `${this.page}`,
        per_page: `${this.per_page}`,
      },
    };
    try {
      const response = await axios(axiosOptions);
      const data = response.data;
      this.incrementPage();
      return data;
    } catch (error) {
      loader.classList.replace('loader', 'hide');
      loadMoreBtn.classList.replace('load-more', 'hide');
      iziToast.error({
        title: 'Error',
        message: `Error! Sorry, something went wrong. This is an error!`,
        color: '#ef4040',
        close: false,
      });
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
  resetEndOfHits() {
    this.endOfHits = false;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
