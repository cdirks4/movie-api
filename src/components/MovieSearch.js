// import React, { useEffect, useState } from 'react';

// const MovieSearch = ({ movie, setMovie }) => {
// 	const apiKey = process.env.REACT_APP_API_KEY;
// 	useEffect(() => {
// 		{
// 			fetch(
// 				`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=&page=1`
// 			)
// 				.then((res) => res.json())
// 				.then((res) => setMovie(res));
// 		}
// 	}, []);
// 	return <div></div>;
// };

// export default MovieSearch;
