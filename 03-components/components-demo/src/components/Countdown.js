/**
 <Countdown count={5} />
 5..4..3..2
 */
 
import React, {useState, useEffect} from 'react';


// { count: 3 }
// setInterval(function() {}, 1000)
function Countdown(props) {
	const [num, setNum] = useState(props.count);
	
	useEffect(function(){
		console.log('will run only once')
				
		setInterval(function() {
			console.log('will run every second');
			setNum(function(updatedNum) {
				return updatedNum - 1;
			});
		}, 1000);	
		
	}, [])
	
	useEffect(function() {
		setNum(props.count);
	}, [props.count]);
	
	return (
		<h1>
			{num}
		</h1>
	)
}

export default Countdown;