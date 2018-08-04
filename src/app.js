import { combineReducers, createStore } from 'redux'

// Define state shape
const stateExample = {
    todos: [
        {text: 'Do laundry', completed: false},
        {text: 'Buy groceries', completed: true}
    ],
    visibilityFilter: 'SHOW_ALL',
}

// Define all types of actions
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_TODO = 'ADD_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBLITY_FILTER';

// Visbility filters
const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
}

// Create action creators to just return those types of actions.
// Need to figure out what kind of data those actions will have.
// These action creators will not dispatch it. Instead we can later call store.dispatch to do that.
// However, if using react-redux, don't need to worry about calling dispatch when using bindActionCreators().
// bindActionCreators() will automatically bind the provided action creators with the dispatch method.
function addTodo(text) {
    return { type: ADD_TODO, text }
}

function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}

function setVisibilityFilter(filter){
    return { type: SET_VISIBILITY_FILTER, filter }
}

// Create initial state
const initialState = {
    todos: [],
    visibilityFilter: VisibilityFilters.SHOW_ALL
}

// Create reducers
// This will take in the actions and then return a NEW state based on the data in the action
// Make one reducer that handles all the action types:
function todoApp_big_example(state = initialState, action) {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {visibilityFilter: action.filter})
        case ADD_TODO: 
            return Object.assign({}, state, {todos: [...state.todos, {text: action.text, completed: false}]})
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if(index === action.index){
                        return Object.assign({}, todo, {completed: !todo.completed})
                    }
                    return todo
                })
            })
        default:
            state
    }
}

// The above is quite long, lets split up the reducers based on which part of the state they are expected to change
// These reducers should only return the piece that is expected to be replaced in the new state

// This reducer only changes the todos piece of the state, so it only returns the array of todos
function todos(state = [], action) {
    switch(action.type) {
        case ADD_TODO: 
            return [...state, {text: action.text, completed: false}]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                    if(index === action.index){
                        return Object.assign({}, todo, {completed: !todo.completed})
                    }
                    return todo
                })
        default:
            return state
    }
}

// This reducer only changes the visibilityFilter property of the state, so it only returns the filter value
function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

// Now we combine the above 2 reducers into 1
// This reducer should return the new state entirely
// Every action will go through this reducer and will return the new state
function todoApp_without_Redux_combineReducer(state = {}, action) {
    return {
        // we're only passing the piece of the state that the reducer is expecting
        visibilityFilter: visiblityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}

// The above can be implemented with redux's combineReducer()
// combineReducers() will generate functions that calls the provided reducers with the 'slices of state' according to their keys
// Here, the keys are visiblityFilter (with shorthand notation), and todos. So it will call the reducers with state.visibilityFilter and state.todos respectively
// If you want to write with shorthand form like this, then you must name your reducers with the same name as the pieces of state you want to change
const todoAppReducer = combineReducers({
    visibilityFilter,
    todos
})

function todoAppReducer_more_explicit_example(state = {}, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action),
        other: any_reducer_function(state.other, action)
    }
}

function any_reducer_function(state, action) {}

// Create the store, and pass in the reducers
// When we call createStore() Redux will call all of the reducers with state = undefined, and so all the default values of each reducer will essentially become the initial state
const store = createStore(todoAppReducer);

console.log(store.getState());

// subscribe() lets you add listeners to the store whenever it changes
const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
});

store.dispatch(addTodo("pick up mom"));
store.dispatch(toggleTodo(0));

unsubscribe();
