import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import MovieGenre from './MovieGenre';
import Movies from './Movies';
import * as _ from 'underscore';
import * as MdIcons from 'react-icons/md';
import * as GrIcons from 'react-icons/gr';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
const Sidebar = ({
	sideData,
	movie,
	setMovie,
	genre,
	setGenre,
	setSearchbox,
	searchbox,
}) => {
	const [search, setSearch] = useState(true);
	const [category, setCategory] = useState(0);
	const [submit, setSubmit] = useState(false);
	const [sidebar, setSidebar] = useState(true);
	const apiKey = process.env.REACT_APP_API_KEY;
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const showSidebar = () => setSidebar(!sidebar);
	const throttleChange = (e) => {
		const handleChange = () => {
			setSearchbox(e.target.value);
		};
		_.throttle(setTimeout(setSearchbox(e.target.value), 500), 500);
	};

	return (
		<>
			<div className='navbar'>
				<Link to='#' className='menu-bars'>
					<FaIcons.FaBars onClick={showSidebar} />
				</Link>
				{/* Hamburger */}
				<h1 style={{ color: 'white' }}>Movie Viewer</h1>
				<div style={{ display: 'grid' }}>
					<Link to='#' className='menu-bars'>
						<GrIcons.GrSearch
							onClick={() => setSearch(!search)}
							className={search ? 'search active' : 'search'}
							style={{ marginRight: '30px', marginTop: '10px', width: '60px' }}
						/>
					</Link>
					<input
						onChange={throttleChange}
						id='searchbox'
						className={search ? 'search' : 'search active'}
						style={{
							width: '150px',
							height: '30px',
							marginRight: '15px',
							marginBottom: '15px',
						}}></input>
				</div>
			</div>
			<nav className={sidebar ? 'nav-menu' : 'nav-menu active'}>
				<ul className='nav-menu-icons'>
					<li className='nav-bar-toggle'>
						<Link to='#' className='menu-bars'>
							<MdIcons.MdExitToApp onClick={showSidebar} />
						</Link>
					</li>
					{sideData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
};

export default Sidebar;

// <div
// 			className='sidebar'
// 			style={{ border: ' 2px solid black', gridRow: ' 1/ span 4' }}>
// 			<input
// 				onChange={throttleChange}
// 				id='searchbox'
// 				style={{ width: '100%', height: '30px', marginTop: '5px' }}></input>
// 			<ul onClick={(e) => setCategory(e.target.id)}>
// 				<Link to='/movies/popular'>
// 					<li id='popular'>Popular Movies</li>
// 				</Link>
// 				<Link to={'/movies/top_rated'}>
// 					<li id='top_rated'>Top Rated Movies</li>
// 				</Link>
// 				<Link to='/movies/now_playing'>
// 					<li id='now_playing'>Now Playing!</li>
// 				</Link>
// 			</ul>

// 			<select
// 				name='select'
// 				id='select'
// 				onChange={(e) => setGenre(e.target.value)}>
// 				<option value='' default>
// 					Select Genre
// 				</option>
// 				<option value='28'>Action</option>
// 				<option value='12'>Adventure</option>
// 				<option value='16'>Animation</option>
// 				<option value='35'>Comedy</option>
// 				<option value='80'>Crime</option>
// 				<option value='99'>Documentary</option>
// 				<option value='18'>Drama</option>
// 				<option value='10751'>Family</option>
// 				<option value='14'>Fantasy</option>
// 				<option value='36'>History</option>
// 				<option value='27'>Horror</option>
// 				<option value='10402'>Music</option>
// 				<option value='9648'>Mystery</option>
// 				<option value='10749'>Romance</option>
// 				<option value='878'>Science Fiction</option>
// 				<option value='10770'>TV Movie</option>
// 				<option value='53'>Thriller</option>
// 				<option value='10752'>War</option>
// 				<option value='37'>Western</option>
// 			</select>
// 		</div>
