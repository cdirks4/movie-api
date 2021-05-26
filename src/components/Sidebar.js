import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as _ from 'underscore';
import * as MdIcons from 'react-icons/md';
import * as FcIcons from 'react-icons/fc';
import * as FaIcons from 'react-icons/fa';

/// this component renders out my nav, sidebar and takes in the search parameters for my search component
const Sidebar = ({ sideData, setSearchbox, setGenre }) => {
	const [search, setSearch] = useState(true);
	const [sidebar, setSidebar] = useState(true);
	const apiKey = process.env.REACT_APP_API_KEY;
	const [genreBar, setGenreBar] = useState('');
	const showSidebar = () => setSidebar(!sidebar);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
		)
			.then((res) => res.json())
			.then((res) => setGenreBar(res));
	}, [genreBar]);
	if (!genreBar) {
		return null;
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchbox(e.target[0].value);
	};
	const handleChange = (e) => {
		setSearchbox(e.target.value);
	};

	return (
		<main>
			<div className='navbar'>
				<Link to='#' className='menu-bars'>
					{/* {diplaying and hiding sidebar} */}
					<FaIcons.FaBars onClick={showSidebar} />
				</Link>
				{/* Hamburger */}
				<h1 className='logo' style={{ color: 'white' }}>
					Movie Viewer
				</h1>

				<select
					classsName='dropdown'
					name='select'
					id='select'
					style={{ padding: '10px 0px 0px 0px', width: '75px', height: '60px' }}
					onChange={(e) => setGenre(e.target.value)}>
					<option value='' default>
						Genre
					</option>

					{genreBar.genres.map((genre) => {
						return <option value={genre.id}>{genre.name}</option>;
					})}
				</select>
				<div className='searchdiv' style={{ display: 'grid' }}>
					<Link to='#' className='menu-bars'>
						<FcIcons.FcSearch
							onClick={() => setSearch(!search)}
							// displaying and hiding search logo
							className={search ? 'search active' : 'search'}
							style={{
								marginRight: '30px',
								marginTop: '10px',
								width: '60px',
							}}
						/>
					</Link>
					<form onSubmit={handleSubmit}>
						<input
							autoComplete='off'
							// changing state of searchbox attempting to slow down calls
							onChange={handleChange}
							id='searchbox'
							// displaing and hiding search bar opposite of logo
							className={search ? 'search' : 'search active'}
							style={{
								width: '150px',
								height: '30px',
								marginRight: '15px',
								marginBottom: '15px',
							}}></input>
					</form>
				</div>
			</div>
			{/* side bar showing or not hamburger click */}
			<nav className={sidebar ? 'nav-menu' : 'nav-menu active'}>
				<ul className='nav-menu-icons'>
					<li className='nav-bar-toggle'>
						<Link to='#' className='menu-bars'>
							{/* closing side bar */}
							<MdIcons.MdExitToApp onClick={showSidebar} />
						</Link>
					</li>
					{/* mapping over state holding info on list items */}
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
		</main>
	);
};

export default Sidebar;
