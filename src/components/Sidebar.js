import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import MovieGenre from './MovieGenre';
import Movies from './Movies';

const Sidebar = ({ movie, setMovie }) => {
	const [category, setCategory] = useState(0);
	const [genre, setGenre] = useState(0);
	const [submit, setSubmit] = useState(false);
	const apiKey = process.env.REACT_APP_API_KEY;
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	// useEffect(() => {
	// 	fetch(
	// 		`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate `
	// 	)
	// 		.then((res) => res.json())
	// 		.then((res) => setMovie(res));
	// }, [genre]);

	return (
		<div
			className='sidebar'
			style={{ border: ' 2px solid black', gridRow: ' 1/ span 4' }}>
			<input
				style={{ width: '100%', height: '30px', marginTop: '5px' }}></input>
			<ul onClick={(e) => setCategory(e.target.id)}>
				<Link to='/movies/popular'>
					<li id='popular'>Popular Movies</li>
				</Link>
				<Link to={'/movies/top_rated'}>
					<li id='top_rated'>Top Rated Movies</li>
				</Link>
				<Link to='/movies/now_playing'>
					<li id='now_playing'>Now Playing!</li>
				</Link>
			</ul>
			<form onSubmit={handleSubmit}>
				<select
					name='select'
					id='select'
					onChange={(e) => setGenre(e.target.value)}>
					<option value='' default>
						Select Genre
					</option>
					<option value='28'>Action</option>
					<option value='12'>Adventure</option>
					<option value='16'>Animation</option>
					<option value='35'>Comedy</option>
					<option value='80'>Crime</option>
				</select>
				<button type='submit'>GO</button>
			</form>
		</div>
	);
};

export default Sidebar;
