import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Movies = (match) => {
	const [movies, setMovies] = useState(0);
	const apiKey = process.env.REACT_APP_API_KEY;
	useEffect(() => {
		{
			fetch(
				` https://api.themoviedb.org/3/movie/${match.match.category}?api_key=${apiKey}&language=en-US&page=1`
			)
				.then((res) => res.json())
				.then((res) => setMovies(res));
		}
	}, [match.match.category]);
	if (!movies) {
		return null;
	}

	return (
		<div
			style={{
				gridColumn: '2/ span 4',
			}}>
			{movies.results.map((movie) => {
				return (
					<Link to={`/${movie.id}`}>
						<img
							className='image'
							style={{
								borderRadius: '5%',
								height: '300px',
								gridColumn: '1/ span 2',
							}}
							src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
						/>
					</Link>
				);
			})}
		</div>
	);
};

export default Movies;
