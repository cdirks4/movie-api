import React, { useEffect } from 'react';

// Only use of this component is calling my api with the search parameters should move

const MovieSearch = ({ setMovie, searchbox }) => {
	const apiKey = process.env.REACT_APP_API_KEY;
	useEffect(() => {
		{
			fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchbox}&page=1`
			)
				.then((res) => res.json())
				.then((res) => {
					if (res?.results?.length) {
						setMovie(res);
					}
				});
		}
	}, [searchbox]);
	return <div></div>;
};

export default MovieSearch;
