import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	const [category, setCategory] = useState(0);
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
		</div>
	);
};

export default Sidebar;
