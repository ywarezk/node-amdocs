import React, {useState} from 'react';
import './App.css';
import Countdown from './components/Countdown';
import Hello from './components/Hello';
import TodoList from './components/Todo';

function App() {
	const [ count, setCount ] = useState(3);
	
	const resetCount = function() {
		console.log('set the count back to 3')
		
		setCount(count + 1);
	}
	
	return (
		<div className="App">
			<Hello name="Yariv" age={35} todo={ ['hello', 'world'] } />
			{/* <Hello name="Piglet" />
			<Hello name="Sweetness" /> */}
			
			{/* <TodoList /> */}
			
			<Countdown count={count} />
			
			<button onClick={resetCount}>
				Reset count
			</button>
		</div>
	);
}

export default App;
