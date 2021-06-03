import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import * as FaIcons from 'react-icons/fa';
//this component renders out the details page on the movie once it has been clicked

const MovieDetails = ({ match }) => {
	const apiKey = process.env.REACT_APP_API_KEY;
	const [movie, setMovie] = useState(0);
	const [trailer, setTrailer] = useState('');
	const [current, setCurrent] = useState(0);

	// if current is = trailer length -1 set to 0 else move forward on slide
	const nextTrailer = () => {
		setCurrent(current === trailer.results.length - 1 ? 0 : current + 1);
	};
	// if current is =  0 (first image) set it to last
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

			fetch(
				` https://api.themoviedb.org/3/movie/${match.id}/videos?api_key=${apiKey}&language=en-US`
			)
				.then((res) => res.json())
				.then((res) => setTrailer(res));
			console.log(trailer.results);
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
					marginTop: '70px',
					borderRadius: '5%',
					height: '350px',
					width: '700px',
					gridColumn: '0/ span 4',
					gridRow: '0/ span 4',
				}}
				alt='an image from the movie'
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
					className={trailer.results.length ? 'arrow active' : 'arrow'}
					style={{ gridRow: '2', gridColumn: '1' }}
					onClick={lastTrailer}
				/>
				<FaIcons.FaArrowAltCircleRight
					className={trailer.results.length ? 'arrow active' : 'arrow'}
					style={{ gridRow: '2', gridColumn: '3' }}
					onClick={nextTrailer}
				/>

				{/* mapping over trailers calling the index we want with current and displaying it with reactplayer */}
				{trailer.results.map((trailer, index) => {
					return (
						<div style={{ gridRow: '1/ span 3', gridColumn: ' 2' }}>
							{index === current && (
								<ReactPlayer
									url={`https://www.youtube.com/watch?v=${trailer.key}`}
									alt={`the trailer or blooper for ${movie.original_title}`}
								/>
							)}
						</div>
					);
				})}
			</div>
			<div>
				<h1 className='title'>{movie.original_title}</h1>
				{/* <h2>Budget: ${movie.budget}</h2> */}
			</div>
			{/* <ul>
				Genres:
				{movie.genres.map((genre) => {
					return <li style={{ listStyleType: 'none' }}>{genre.name}</li>;
				})}
			</ul> */}
			<div></div>
		</div>
	);
};

export default MovieDetails;
