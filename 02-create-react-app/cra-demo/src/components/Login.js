import React from 'react';

function Login() {
	return (
		<form>
			<input type="email" name="email" placeholder="Enter Email" />
			<input type="password" name="password" placeholder="Enter Password" />
			<button type="submit">
				Login
			</button>
		</form>
	)
}

export default Login;