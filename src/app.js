import { createStore } from 'redux'
import { VisibilityFilters, addTodo, toggleTodo, setVisibilityFilter } from './actions'
import todoApp from './reducers'

const {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} = VisibilityFilters;

// Our state shape...
const stateExample = {
    todos: [
        {text: 'Do laundry', completed: false},
        {text: 'Buy groceries', completed: true}
    ],
    visibilityFilter: 'SHOW_ALL',
}

// Create the store, and pass in the reducers
// When we call createStore() Redux will call all of the reducers with state = undefined, and so all the default values of each reducer will essentially become the initial state
const store = createStore(todoApp);

console.log(store.getState());

// subscribe() lets you add listeners to the store whenever it changes
const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
});

store.dispatch(addTodo("pick up mom"));
store.dispatch(toggleTodo(0));
store.dispatch(setVisibilityFilter(SHOW_ACTIVE));

unsubscribe();
