import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import Movies from './Movies';

const Sidebar = () => {
	const [category, setCategory] = useState(0);
	const [genre, setGenre] = useState(0);
	const [submit, setSubmit] = useState(false);
	console.log(genre);
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
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setSubmit(true);
				}}>
				<select
					name='select'
					id='select'
					value={genre}
					onChange={(event) => setGenre(event.target.value)}>
					<option value='' default>
						Select Genre
					</option>
					<option value='mon'>Monday</option>
					<option value='wed'>Tuesday</option>
					<option value='wed'>Wednesday</option>
					<option value='thur'>Thurday</option>
					<option value='fri'>Friday</option>
				</select>
				<button type='submit'>GO</button>
			</form>
			{submit && <Movies />}
		</div>
	);
};

export default Sidebar;
