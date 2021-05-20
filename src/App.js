import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Movies from './components/Movies';
import './index.css';
import { Route, Link } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import MovieGenre from './components/MovieGenre';
import MovieSearch from './components/MovieSearch';
// const params = [
// 	{
// 		genre: '',
// 		category: '',
// 	},
// ];
const App = () => {
	const [genre, setGenre] = useState('');
	// const [parameters, setParameters] = useState(params);
	const [movie, setMovie] = useState(0);
	const [searchbox, setSearchbox] = useState('');
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
			<Sidebar
				movie={movie}
				setMovie={setMovie}
				setSearchbox={setSearchbox}
				searchbox={searchbox}
				genre={genre}
				setGenre={setGenre}
			/>
			<Route
				path='/movies/:category'
				render={(routerProps) => (
					<Movies
						genre={genre}
						movie={movie}
						setMovie={setMovie}
						searchbox={searchbox}
						// paramaters={parameters}
						// setParameters={setParameters}
						match={routerProps.match.params}
					/>
				)}
			/>
			<Route
				exact
				path='/:id'
				render={(routerProps) => (
					<MovieDetails
						match={routerProps.match.params}
						movie={movie}
						setMovie={setMovie}
					/>
				)}
			/>
			<MovieSearch movie={movie} setMovie={setMovie} searchbox={searchbox} />
		</div>
	);
};

export default App;
