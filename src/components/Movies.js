import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Movies = ({ genre, match, movie, setMovie, searchbox }) => {
	const [page, setPage] = useState(1);
	const apiKey = process.env.REACT_APP_API_KEY;
	useEffect(() => {
		{
			let timer = setTimeout(() => setTimeout);
			fetch(
				` https://api.themoviedb.org/3/movie/${match.category}?api_key=${apiKey}&language=en-US&page=${page}&with_genres=${genre}`
			)
				.then((res) => res.json())
				.then((res) => setMovie(res));
		}
	}, [page, match.category, genre, searchbox]);
	///updating the component on the change of these variables

	if (!movie.results) {
		return null;
	}
	if (!page || page > movie.total_pages) {
		setPage(1);
	}

	return (
		<div
			style={{
				gridColumn: '2/ span 4',
			}}>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '6fr 6fr 6fr 6fr',
					gridTemplateRows: '6fr 6fr 6fr 6fr',
					borderRadius: '5%',
					height: '300px',
				}}>
				{/* maping over the movies displaying the image and average on the main page */}
				{movie.results.map((movie, index) => {
					return (
						<Link to={`/${movie.id}`}>
							<img
								key={index}
								className='image'
								style={{
									borderRadius: '5%',
									height: '300px',
									gridColumn: '',
								}}
								src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
							/>
							{movie.vote_average}
						</Link>
					);
				})}
			</div>

			<div className='pages'>
				<button onClick={() => setPage(page - 1)}>Previous Page</button>
				<button onClick={() => setPage(page + 1)}>Next Page</button>
				<h2>
					Page:{page} of {movie.total_pages}
				</h2>
			</div>
		</div>
	);
};

export default Movies;
