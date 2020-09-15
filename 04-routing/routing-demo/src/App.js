import React from 'react';
import './App.css';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
	<BrowserRouter>
		<div className="App">
			{/* <a href=" ..." ></a> */}
			
			<nav>
				<ul>
					<li>
						<Link to="/?hello=world&foo=bar">
							Home Page
						</Link>
					</li>
					  <li>
						<Link to="/about/yariv">
							  About Page
						</Link>
					  </li>
				</ul>
			</nav>

			<Route path="/" exact>
				<HomePage />
			</Route>
			<Route path="/about/:name">
				<AboutPage />
			</Route>

		</div>
	</BrowserRouter>
    
  );
}

export default App;
