import React, { useState, useEffect } from 'react';

const Movies = () => {
	const [movies, setMovies] = useState(0);
	const apiKey = process.env.REACT_APP_API_KEY;
	useEffect(() => {
		{
			fetch(
				`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
			)
				.then((res) => res.json())
				.then((res) => setMovies(res));
		}
	}, []);
	if (!movies) {
		return null;
	}
	return (
		<div style={{ gridColumn: '2/ span 4' }}>
			{movies.results.map((movie) => {
				return (
					<img
						className='image'
						style={{
							borderRadius: '5%',
							height: '300px',
							gridColumn: '2/ span 4',
						}}
						src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					/>
				);
			})}
		</div>
	);
};

export default Movies;
