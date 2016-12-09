/**
 * Reducer which takes just the state of a single to-do and returns the new state of that to-do.
 * Works for both the add and the toggle actions.
 * @param state
 * @param action
 * @returns {{}}
 */
const todo = (state = {}, action) => {
	switch(action.type) {
		case 'ADD_TODO': // how does this add another action into the state? doesn't it replace it?
			return {
				id: action.id,
				text: action.text,
				completed: false
			};
		case 'TOGGLE_TODO':
			if (state.id !== action.id) return state;
			return Object.assign({}, state, {completed: !state.completed});
			
		default:
			return state;
	}
}

/**
 * build up a reducer from two functions. this one deals with the entire todo-list
 * @param state
 * @param action
 * @returns {*}
 */
const todos = (state=[], action) => {
	switch(action.type) {
		case 'ADD_TODO': // add new todo to the end of the list of todos.
			return [...state, todo(undefined, action)]
		case 'TOGGLE_TODO': // iterate over each todo, but only the todo with the same id as the action gets updated.
			return state.map(t=>todo(t, action))
		default:
			return state
	}
}

export default todos