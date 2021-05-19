import React from 'react';
import Sidebar from './components/Sidebar';
import Movies from './components/Movies';
import './index.css';

const App = () => {
	const apiKey = process.env.REACT_APP_API_KEY;
	{
		fetch(`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`)
			.then((res) => res.json())
			.then((res) => console.log(res));
	}
	return (
		<div
			className='grid'
			style={{
				height: '100vh',
				width: '100vw',
				display: 'grid',
				gridTemplateColumns: '6fr 8fr 8fr 8fr',
				gridTemplateRows: '6fr 8fr 10fr 10fr',
			}}>
			<header style={{ gridColumn: '2/ span3', textAlign: 'center' }}>
				<h1>
					<a href='/'>Placeholder</a>
				</h1>
			</header>
			<Sidebar />
			<Movies />
		</div>
	);
};

export default App;
