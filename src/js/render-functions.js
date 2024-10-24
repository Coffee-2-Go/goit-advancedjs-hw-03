import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderGallery(images) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = ''; // Clear previous content

  if (images.length === 0) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }

  images.forEach(image => {
    const item = document.createElement('div');
    item.classList.add('gallery-item');
    item.innerHTML = `
            <a class="gallery-link" href="${image.largeImageURL}">
                <img
                    src="${image.webformatURL}"
                    alt="${image.tags}"
                    style="width: 360px; height: 152px; object-fit: cover;"
                />
                <ul class="image-description">
                    <li class="image-descr-item"><span class="descr-name">Likes</span>${image.likes}</li>
                    <li class="image-descr-item"><span class="descr-name">Views</span>${image.views}</li>
                    <li class="image-descr-item"><span class="descr-name">Comments</span>${image.comments}</li>
                    <li class="image-descr-item"><span class="descr-name">Downloads</span>${image.downloads}</li>
                </ul>
            </a>
        `;
    gallery.appendChild(item);
  });
}

export function showEmptyFieldError() {
  iziToast.warning({
    message: 'Please enter a search query!',
    position: 'topRight',
  });
}
