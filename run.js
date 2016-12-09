import {addTodo, toggleTodo, setVisibilityFilter} from './actions'
import {createStore} from 'redux'
import reducer from './reducers'

let store = createStore(reducer)
console.log(store.getState())

let unsubscribe = store.subscribe(()=>console.log(store.getState()))

store.dispatch(addTodo('Learn about actions'))

store.dispatch(setVisibilityFilter('SHOW_COMPLETED'))

store.dispatch(toggleTodo(0))