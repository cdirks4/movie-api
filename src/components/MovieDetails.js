import React, { useState, useEffect } from 'react';

const MovieDetails = (match) => {
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
	}, []);
	console.log(movie);
	if (!movie) {
		return null;
	}
	return (
		<div
			style={{
				gridColumn: '2/ span 4',
			}}>
			<img
				className='image'
				style={{
					borderRadius: '5%',
					height: '350px',
					width: '700px',
					gridColumn: '1/ span 4',
				}}
				src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
			/>

			<div>
				<h1>{movie.original_title}</h1>
				<h2>Budget: ${movie.budget}</h2>
			</div>
			<ul>
				Genre:
				{movie.genres.map((genre) => {
					return <li>{genre.name}</li>;
				})}
			</ul>
			<div>
				<h2>Adults only {movie.adult ? '✅' : '❌'}</h2>
			</div>
		</div>
	);
};

export default MovieDetails;
