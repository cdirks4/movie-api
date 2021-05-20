import React, { useEffect, useState } from 'react';

const MovieSearch = ({ movie, setMovie, searchbox }) => {
	const apiKey = process.env.REACT_APP_API_KEY;
	useEffect(() => {
		{
			fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchbox}&page=1`
			)
				.then((res) => res.json())
				.then((res) => setMovie(res));
		}
	}, [searchbox]);
	return <div></div>;
};

export default MovieSearch;
