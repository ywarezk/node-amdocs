/**
 * Create h1 with hello world using React
 */

/* 
<h1>
	<span>
		<u>
			Hello world from React with underline
		</u>		
	</span>
</h1>
*/

/*const h1 = React.createElement(
	'h1',
	null,
	React.createElement(
		'span',
		null,
		React.createElement(
			'u',
			null,
			'Hello world from React with underline'
		)
	)
)*/

// JSX
// const h1 = (
	// <h1>
	// 	<span>
	// 		<u>
	// 			Hello world from React with underline + JSX + Babel
	// 		</u>
	// 	</span>
	// </h1>
// )


// React.createElement(H1)
// <H1 />
// Component
function H1() {
	return (
		<h1>
			<span>
				<u>
					Hello world from React with underline + JSX + Babel
			</u>
			</span>
		</h1>
	)
}

function Header() {
	return (
		<header>
			<h1>im a header</h1>
		</header>
	)
}

function LoginForm() {
	return (
		<form>
			<input type="email" />
			<input type="password" />
		</form>
	)
}

function Footer() {
	return (
		<footer>
			<img src="..." />
		</footer>
	)
}

function Login() {
	return (
		<div>
			<Header />
			<LoginForm />
			<Footer />
		</div>
	)
}

ReactDOM.render(
	<H1 />,
	document.getElementById('container')
)