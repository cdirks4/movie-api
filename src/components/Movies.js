import React, { useState, useEffect } from 'react';
import { FiRepeat } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Movies = ({ genre, match, movie, setMovie, searchbox }) => {
	const [page, setPage] = useState(1);
	const apiKey = process.env.REACT_APP_API_KEY;
	useEffect(() => {
		{
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
				marginTop: '100px',
			}}>
			<div
				className='cardgrid'
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))',
					borderRadius: '5%',
				}}>
				{/* maping over the movies displaying the image and average on the main page */}
				{movie.results.map((movie, index) => {
					return (
						<Link to={`/${movie.id}`}>
							<div className='Card'>
								<img
									key={index}
									className='image'
									style={{
										height: '300px',
									}}
									src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
								/>
								<div
									style={{
										className: 'rating container',
										display: 'grid',
										backgroundColor: 'rgb(11, 2, 55)',
										height: '75px',
									}}>
									<h2
										style={{
											width: '44px',
											border: '5px solid white',
											backgroundColor: 'white;',
										}}>
										{movie.vote_average}
									</h2>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Movies;
