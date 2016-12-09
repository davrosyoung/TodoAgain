import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

/**
 * Component which allows a new todo to be added.
 * @param dispatch
 * @returns {XML}
 * @constructor
 */
let AddTodo = ({ dispatch }) => {
	let input
	
	return(
			<div>
				<div><blink>Hello World</blink></div>
				<form className="addTodoForm" onSubmit={e => {
					e.preventDefault()
					if (!input.value.trim()) { // if no text has been entered, ignore the add
						return
					}
					
					dispatch(addTodo(input.value))
					input.value = '';
				}}>
				<input className="newTodoEntry" ref={node => {input = node}}/>
				<button type="submit">Add Todo</button>
				</form>
			</div>
	)
}

// what the!?!? somehow wires up the render method for addtodo with something from redux.
AddTodo = connect()(AddTodo)

export default AddTodo