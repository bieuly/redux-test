# redux-test
Learning redux with javascript / react

Going through the redux basics tutorial. With my own comments.
Look at v1.0 tag for one big file with more explicit comments and examples I made myself

Tutorial: https://redux.js.org/introduction

Notes:

1. Define all different types of actions
2. Make action creators
3. Create reducers that take in only the piece of state
- combineReducers({reducer1, reducer2}): creates a function that calls your reducers with the piece of state matched with the key of your reducer in the object parameter of combineReducer()
4. mapStateToProps: a function that passes the store/state as a parameter, then returns the object you expect to be the props of the component that you connect (basically lets the state or pieces of the state to be available as props to your component
- mapDispatchToProps: a function that passes the store's dispatch method as a parameter and returns the object that you expect to be the props of the component you connect (basically lets you provide the ability to dispatch actions to your component)
