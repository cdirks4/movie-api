import React from 'react';

const Sidebar = () => {
	return (
		<div
			className='sidebar'
			style={{ border: ' 2px solid black', gridRow: ' 1/ span 4' }}>
			<input
				style={{ width: '100%', height: '30px', marginTop: '5px' }}></input>
			<span>Genres:</span>
			Popular Movies: Top-rated Movies:
		</div>
	);
};

export default Sidebar;
