import React, {useState} from 'react';

/**
 if (condition) {
	 do something
 } else {
	 do something else
 }
 
 const ifValue = condition ? do something : do something else
 
 */


// const handleButtonClick = function() {
	
// }

// { name: 'Yariv', age: 35, todo: [...] }
function Hello(props) {
	// isVisible = true
	// [ isVisible, setIsVisible ]
	const isVisibleStateArray = useState(true);
	const isVisible = isVisibleStateArray[0];
	const setIsVisible = isVisibleStateArray[1];
	
	const [yairName, setYairName] = useState('Yair');
	
	const handleButtonClick = function () {
		setIsVisible(!isVisible);
	}
	
	return (
		<div>
			{
				isVisible ? (
					<h1>
						Hello {props.name}
					</h1>		
				) : null
			}
			
			<button onClick={handleButtonClick} >
				toggle greeting
			</button>
		</div>
		
	)
}

export default Hello;