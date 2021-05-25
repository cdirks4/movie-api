import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import * as FaIcons from 'react-icons/fa';
//this component renders out the details page on the movie once it has been clicked

const MovieDetails = ({ match }) => {
	const apiKey = process.env.REACT_APP_API_KEY;
	const [movie, setMovie] = useState(0);
	const [trailer, setTrailer] = useState('');
	const [current, setCurrent] = useState(0);

	const nextTrailer = () => {
		setCurrent(current === trailer.results.length - 1 ? 0 : current + 1);
	};
	const lastTrailer = () => {
		setCurrent(current === 0 ? trailer.results.length - 1 : current - 1);
	};
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
			<div
				className='carousel'
				style={{
					display: 'grid',
					gridTemplateRows: '3fr 3fr 3fr',
					gridTemplateColumns: '1fr 5fr 1fr',
					alignItems: 'center',
				}}>
				<FaIcons.FaArrowAltCircleLeft
					className={trailer.results.key ? 'arrow' : 'arrow active'}
					style={{ gridRow: '2', gridColumn: '1' }}
					onClick={lastTrailer}
				/>
				<FaIcons.FaArrowAltCircleRight
					className={trailer.results.key ? 'arrow' : 'arrow active'}
					style={{ gridRow: '2', gridColumn: '3' }}
					onClick={nextTrailer}
				/>
				{trailer.results.map((trailer, index) => {
					return (
						<div style={{ gridRow: '1/ span 3', gridColumn: ' 2' }}>
							{index === current && (
								<ReactPlayer
									url={`https://www.youtube.com/watch?v=${trailer.key}`}
									controls={true}
								/>
							)}
						</div>
					);
				})}
			</div>
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
			<div></div>
		</div>
	);
};

export default MovieDetails;
