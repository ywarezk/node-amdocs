/**
 * Todo list
 * take the todo list from a server
 * https://nztodo.herokuapp.com/api/tasks/?format=json
 * give me the array of todo items
 * display the todo items in a component for the user
 */
 
import React, { useEffect, useState } from 'react';

function TodoList() {
	const [todoList, setTodoList] = useState([]);
	
	useEffect( function() {
		// this function will run after the render
		// Promise
		fetch('https://nztodo.herokuapp.com/api/tasks/?format=json').then(
			function(response) {
				// Promise
				response.json().then(
					
					function(todo) {
						console.log(todo);
						setTodoList(todo);
					}
					
				)
			}
		)
		
	}, [] )
	
	// [ <li></li>, <li></li> ... ]
	return (
		<ul>
			{
				todoList.map(function(todoObj) {
					return (
						<li>
							{
								todoObj.title	
							}
						</li>
					)
				})
			}
		</ul>
	)
}

export default TodoList;