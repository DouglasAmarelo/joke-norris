const fetchDataFromApi = async (apiUrl) => {
	try {
		const data = await (await fetch(apiUrl)).json();

		return data;
	}
	catch (err) {
		throw new Error(err);
	}
};

const getJokeCategories = () => fetchDataFromApi(`https://api.chucknorris.io/jokes/categories`);
const getJoke = jokeCategory => fetchDataFromApi(`https://api.chucknorris.io/jokes/random?category=${jokeCategory}`);

export {
	getJokeCategories,
	getJoke
}

