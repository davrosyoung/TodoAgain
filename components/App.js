/**
 * Created by david on 7/12/16.
 */

import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => {
	console.log('App::render():invoked');
	return (<div>
		<div>Hello App</div>
		<AddTodo/>
		<VisibleTodoList/>
		<Footer/>
	</div>)
}

export default App