import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
	return (
		<div
			className='sidebar'
			style={{ border: ' 2px solid black', gridRow: ' 1/ span 4' }}>
			<input
				style={{ width: '100%', height: '30px', marginTop: '5px' }}></input>
			<ul>
				<Link to='movies/popular'>
					<li id='popular'>Popular Movies</li>
				</Link>
				<li id='top_rated'>Top Rated Movies</li>
				<li id='now_playing'>Now Playing!</li>
				<li id='latest'>Latest Releases!</li>
			</ul>
		</div>
	);
};

export default Sidebar;
