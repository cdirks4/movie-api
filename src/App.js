import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Movies from './components/Movies';
import './index.css';
import { Route, Link } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import MovieGenre from './components/MovieGenre';
import MovieSearch from './components/MovieSearch';
import { useThrottle } from '@react-hook/throttle';

import * as FiIcons from 'react-icons/fi';
import * as GiIcons from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

// const params = [
// 	{
// 		genre: '',
// 		category: '',
// 	},
// ];
const initialData = [
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text',
		id: 'home',
	},
	{
		title: 'Popular',
		path: '/movies/popular',
		icon: <FiIcons.FiTrendingUp style={{ color: 'green' }} />,
		cName: 'nav-text',
		id: 'popular',
	},
	{
		title: 'Top rated',
		path: '/movies/top_rated',
		icon: <GiIcons.GiTrophyCup style={{ color: 'gold' }} />,
		cName: 'nav-text',
		id: 'top_rated',
	},
	{
		title: 'Now playing',
		path: '/movies/now_playing',
		icon: <FaIcons.FaRegStar />,
		cName: 'nav-text',
		id: 'now_playing',
	},
];
const App = () => {
	const [genre, setGenre] = useState('');
	// const [parameters, setParameters] = useState(params);
	const [sideData, setSideData] = useState(initialData);
	const [movie, setMovie] = useState(0);
	const [searchbox, setSearchbox] = useThrottle('');
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
			<Sidebar
				sideData={sideData}
				setSideData={setSideData}
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
