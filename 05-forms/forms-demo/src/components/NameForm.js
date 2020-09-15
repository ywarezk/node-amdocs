import React, {useState} from 'react';

function NameForm() {
	const [name, setName] = useState('Yariv');
	
	const handleNameSubmit = function(event) {
		console.log('we want to grab what the user typed in the input');
		console.log(name);
		event.preventDefault();
	}
	
	const handleChange = function(event) {
		const updatedValueInput = event.target.value;
		setName(updatedValueInput);
	}
	
	return (
		<form onSubmit={handleNameSubmit}>
			<input 
				value={name}	
				onChange={handleChange}
				type="text" 
				name="myName" 
				placeholder="Enter your name" />
			<button>
				Send you name
			</button>
		</form>
	)
}

export default NameForm;