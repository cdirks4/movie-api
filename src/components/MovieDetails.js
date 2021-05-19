import React, { useState, useEffect } from 'react';

const MovieDetails = (match) => {
	console.log(match.match.id);
	const apiKey = process.env.REACT_APP_API_KEY;
	const [movie, setMovie] = useState(0);
	useEffect(() => {
		{
			fetch(
				` https://api.themoviedb.org/3/movie/${match.match.id}?api_key=${apiKey}&language=en-US&page=1`
			)
				.then((res) => res.json())
				.then((res) => setMovie(res));
		}
	}, [match.match.id]);
	return <div></div>;
};

export default MovieDetails;
