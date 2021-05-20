// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// const MovieGenre = ({ genre }) => {
// 	const apiKey = process.env.REACT_APP_API_KEY;
// 	const [movie, setMovie] = useState(0);
// 	const [page, setPage] = useState(1);
// 	useEffect(() => {
// 		{
// 			fetch(
// 				`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate `
// 			)
// 				.then((res) => res.json())
// 				.then((res) => setMovie(res));
// 		}
// 	}, [genre]);
// 	if (!movie) {
// 		return null;
// 	}
// 	console.log(movie);
// 	return (
// 		<div
// 			style={{
// 				gridColumn: '2/ span 4',
// 			}}>
// 			<div
// 				style={{
// 					display: 'grid',
// 					gridTemplateColumns: '6fr 6fr 6fr 6fr',
// 					gridTemplateRows: '6fr 6fr 6fr 6fr',
// 					borderRadius: '5%',
// 					height: '300px',
// 				}}>
// 				{movie.results.map((movie) => {
// 					return (
// 						<Link to={`/${movie.id}`}>
// 							<img
// 								className='image'
// 								style={{
// 									borderRadius: '5%',
// 									height: '300px',
// 									gridColumn: '',
// 								}}
// 								src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
// 							/>
// 							{movie.vote_average}
// 						</Link>
// 					);
// 				})}
// 			</div>

// 			<div style={{ gridRow: '4', gridColumn: '2' }}>
// 				<button onClick={() => setPage(page - 1)}>Previous Page</button>
// 				<button onClick={() => setPage(page + 1)}>Next Page</button>
// 				<h2>
// 					Page:{page} of {movie.total_pages}
// 				</h2>
// 			</div>
// 		</div>
// 	);
// };

// export default MovieGenre;
