/**
React components
Dispayed only when the url is: /
 */
 
import React from 'react';
import { useLocation } from 'react-router-dom';

function HomePage() {
	const location = useLocation()
	return (
		<h1>
			Hello I'm in the homepage {location.search}
		</h1>
	)
}

export default HomePage;