import React from 'react';
import Sidebar from './components/Sidebar';
import Movies from './components/Movies';
import './index.css';
import { Route, Link } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';

const App = () => {
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
			<Route
				path='/movies/:category'
				render={(routerProps) => <Movies match={routerProps.match.params} />}
			/>
			<Route
				exact
				path='/:id'
				render={(routerProps) => (
					<MovieDetails match={routerProps.match.params} />
				)}
			/>
		</div>
	);
};

export default App;
