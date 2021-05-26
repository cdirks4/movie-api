import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
const Home = () => {
	const [trailer, setTrailer] = useState('');
	const [id, setId] = useState(0);
	const apiKey = process.env.REACT_APP_API_KEY;
	useEffect(() => {
		{
			fetch(
				` https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
			)
				.then((res) => res.json())
				.then((res) => {
					if (res?.results?.length) {
						setTrailer(res);
					} else {
						setId(Math.floor(Math.random() * 500));
					}
				});
		}
	}, [id]);
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				backgroundColor: 'grey', ///less inline move into component specific css
				display: 'grid',
				gridTemplateRows: '1fr 2fr 1fr 6fr 1.5fr',
				gridTemplateColumns: '1fr 4fr 8fr 1fr',
			}}>
			<div style={{ gridColumn: '3', gridRow: '2' }}>
				<h2
					style={{
						marginTop: '65px',
						color: 'white',
						position: 'relative',
						bottom: '0',
						textAlign: 'center',
					}}>
					Welcome to Movie Viewer, click the sidebar to get started or watch a
					random trailer here!
				</h2>
			</div>
			<button
				onClick={() => setId(Math.floor(Math.random() * 500))}
				style={{
					gridRow: '3',
					gridColumn: '1/ span 4',
					backgroundColor: 'darkgrey',
					margin: '3px',
				}}>
				<h3 style={{ marginLeft: '135px' }}>
					Click for a random trailer or blooper!
				</h3>
			</button>

			{!trailer
				? null
				: trailer.results.map((trailer) => {
						return (
							<div
								style={{ gridRow: '4', gridColumn: '3' }}
								className='video-responsive'>
								<ReactPlayer
									url={`https://www.youtube.com/watch?v=${trailer.key}`}
									alt='a random movie trailer'
								/>
							</div>
						);
				  })}
			<footer
				style={{
					gridRow: '5',
					gridColumn: '1/ span 4',
					backgroundColor: 'rgb(11, 2, 55)',
				}}></footer>
		</div>
	);
};

export default Home;
