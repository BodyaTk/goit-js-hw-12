import { getImagesByQuery } from './js/pixabay-api';
import {
  errorMessage,
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('[name=search-text]');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const search = input.value.trim();
  clearGallery();
  input.reset;
  if (search === '') {
    errorMessage('Введіть назву');
    return;
  } else {
    showLoader();
    getImagesByQuery(search)
      .then(data => {
        if (data.hits.length === 0) {
          errorMessage(
            'Sorry, there are no images matching your search query. Please try again!'
          );
        } else {
          createGallery(data.hits);
        }
        hideLoader();
      })
      .catch(error => {
        hideLoader();
        errorMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      })
      .finally(() => form.reset());
  }
}
