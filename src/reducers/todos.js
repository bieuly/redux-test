import { ADD_TODO, TOGGLE_TODO } from '../actions'

// This reducer only changes the todos piece of the state, so it only returns the array of todos
const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
  }
  export default todos