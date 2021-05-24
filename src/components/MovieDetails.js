import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
//this component renders out the details page on the movie once it has been clicked

const MovieDetails = ({ match }) => {
	const apiKey = process.env.REACT_APP_API_KEY;
	const [movie, setMovie] = useState(0);
	const [trailer, setTrailer] = useState('');

	useEffect(() => {
		{
			fetch(
				` https://api.themoviedb.org/3/movie/${match.id}?api_key=${apiKey}&language=en-US&page=1`
			)
				.then((res) => res.json())
				.then((res) => setMovie(res));
		}
	}, []);
	useEffect(() => {
		{
			fetch(
				` https://api.themoviedb.org/3/movie/${match.id}/videos?api_key=${apiKey}&language=en-US`
			)
				.then((res) => res.json())
				.then((res) => setTrailer(res));
		}
	}, []);
	console.log(trailer);
	console.log(movie);
	if (!movie) {
		return null;
	}
	if (!trailer) {
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
					gridColumn: '0/ span 4',
					gridRow: '0/ span 4',
				}}
				src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
			/>
			{trailer.results.map((trailer) => {
				return (
					<div className='video-responsive'>
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${trailer.key}`}
							controls={true}
						/>
					</div>
				);
			})}

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
				<h2></h2>
			</div>
		</div>
	);
};

export default MovieDetails;
