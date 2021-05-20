import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Movies = (match) => {
	const [movies, setMovies] = useState(0);
	const [page, setPage] = useState(1);
	const apiKey = process.env.REACT_APP_API_KEY;
	useEffect(() => {
		{
			fetch(
				` https://api.themoviedb.org/3/movie/${match.match.category}?api_key=${apiKey}&language=en-US&page=${page}`
			)
				.then((res) => res.json())
				.then((res) => setMovies(res));
		}
	}, [page, match.match.category]);
	if (!movies) {
		return null;
	}
	if (!page || page > movies.total_pages) {
		setPage(1);
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
			<button onClick={() => setPage(page - 1)}>Previous Page</button>
			<button onClick={() => setPage(page + 1)}>Next Page</button>
			<h2>
				Page:{page} of {movies.total_pages}
			</h2>
		</div>
	);
};

export default Movies;
