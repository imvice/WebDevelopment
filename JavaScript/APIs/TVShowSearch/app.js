/**
 * Sets up a form to search for a movie or show.
 *
 * This function captures the search query from the form, makes an API call
 * to fetch data about the searched movie/show, and clears the form after
 * the request is made.
 *
 * @throws {Error} If the data fetch fails or there is an issue with the API call.
 */

const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
	e.preventDefault();
	const searchTerm = form.elements.query.value;
	const config = { params: { q: searchTerm } };
	try {
		const res = await axios.get("https://api.tvmaze.com/search/shows", config);
		clearImages();
		makeImages(res.data);
	} catch (error) {
		console.error("Error fetch data:", error);
	}
	form.elements.query.value = "";
});

/**
 * Creates and appends images to the document for each show that has an image.
 *
 * @param {Array<Object>} shows - An array of show objects from the API response.
 * Each object should have a `show` property containing show details,
 * including an optional `image` property.
 */
const makeImages = (shows) => {
	for (let result of shows) {
		if (result.show.image) {
			const img = document.createElement("img");
			img.src = result.show.image.medium;
			document.body.append(img);
		}
	}
};

// Clears all search result images
const clearImages = () => {
	const images = document.querySelectorAll("img");
	images.forEach((img) => img.remove());
};
