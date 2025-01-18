import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery, toggleLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('search-form');
let currentPage = 1;
let currentQuery = '';

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = event.target.elements.query.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;

  clearGallery();
  toggleLoader(true);

  try {
    const { hits, totalHits } = await fetchImages(currentQuery, currentPage);

    toggleLoader(false);

    if (hits.length === 0) {
      iziToast.info({
        title: 'No results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    renderImages(hits);
    iziToast.success({
      title: 'Success',
      message: `Hooray! We found ${totalHits} images.`,
    });
  } catch (error) {
    toggleLoader(false);
    iziToast.error({
      title: 'Error',
      message: error.message,
    });
  }
});
