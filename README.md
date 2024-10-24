# Tier 2. Module 2 - Advanced JavaScript
## Topic 6. HTTP requests and interaction with the backend. Homework

### Task 1. Image search

Create an application for searching for images by keyword and viewing them in a gallery. Add the design of interface elements according to the layout.

#### Search form

The search form is contained in an HTML document. The user will enter a search string in the text field, and after submitting the form, an HTTP request must be made with this search string.

When clicking the submit button of the form, add a check of the text field contents for an empty string so that the user cannot send a request if the search field is empty.

#### HTTP requests

For the backend, use the public [Pixabay](https://pixabay.com/api/docs/) API service. Register, get your unique access key and read the [documentation](https://pixabay.com/api/docs/#api_search_images).

List of query string parameters that you must specify:

* `key` — your unique access key to the API.
* `q` — the word to search for. What the user will enter.
* `image_type` — image type. Only photos are needed, so set the value to `photo`.
* `orientation` — the orientation of the photo. Set the value to `horizontal`.
* `safesearch` — filter by age. Set the value to `true`.

The response will contain an object with several properties, one of which will contain an array of images that met the criteria of the query parameters.

If the backend returns an empty array, it means that nothing suitable was found. In this case, show a message with the text `"Sorry, there are no images matching your search query. Please try again!"`. Use the [iziToast](https://izitoast.marcelodolza.com/) library for messages.

Demo [video](https://youtu.be/4tGWr0Q7HV0) of the application functioning.
