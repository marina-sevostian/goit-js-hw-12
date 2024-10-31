import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function fetchImages(inputValue) {
  return fetch(
    `https://pixabay.com/api/?key=46729875-7729b8e358007a47de817f6d1&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return response.json();
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
}
