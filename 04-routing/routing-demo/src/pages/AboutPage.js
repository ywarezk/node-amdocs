/**
React component
Displayed only when the url is: /about
 */
 
import React from 'react';
import { useParams } from 'react-router-dom';

function AboutPage() {
	// /about/yariv
	// {name: 'yariv'}
	const params = useParams();
	return (
		<h1>
			Hello I'm in the about page {params.name}
		</h1>
	)
}

export default AboutPage;