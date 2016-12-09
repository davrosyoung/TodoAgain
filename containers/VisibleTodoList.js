import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

/**
 * This looks like a reducer... return from the supplied list of todos, those which match the specified filter
 * @param todos
 * @param filter
 * @returns {*}
 */
const getVisibleTodos = (todos, filter) => {
	console.log('VisibleTodoList::getVisibleTodos(): invoked with filter=' + filter);
	switch(filter) {
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed);
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed);
		default:
			throw new Error('Unknown filter:' + filter)
	}
}

const mapStateToProps = (state) => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
			onTodoClick: (id) => dispatch(toggleTodo(id))
})

const VisibleTodoList = connect(
		mapStateToProps,
		mapDispatchToProps
)(TodoList)

export default VisibleTodoList