# redux-test
Learning redux with javascript / react

Going through the redux basics tutorial. With my own comments.
Look at v1.0 tag for one big file with more explicit comments and examples I made myself

Tutorial: https://redux.js.org/introduction

Notes:

- Define all different types of actions
- Make action creators
- Create reducers that take in only the piece of state...use combineReducers()
- mapStateToProps: basically anything you want your component to watch in the state/store
- mapDispatchToProps: makes the store's dispatch available to action creators. Defines anything that you want your compnonet to dispatch and change the store
