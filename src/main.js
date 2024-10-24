import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showEmptyFieldError } from './js/render-functions.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const loader = document.getElementById('loader');

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (query === '') {
    showEmptyFieldError();
    return;
  }

  try {
    showLoader();
    const images = await fetchImages(query);
    renderGallery(images);
    lightbox.refresh(); // Refresh the lightbox after new images are added
  } catch (error) {
    iziToast.error({
      message: 'Failed to fetch images. Please try again later.',
    });
  } finally {
    hideLoader();
  }
});
