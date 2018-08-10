# redux-test
Learning redux with javascript / react

Going through the redux basics tutorial. With my own comments.
Look at v1.0 tag for one big file with more explicit comments and examples I made myself

Tutorial: https://redux.js.org/introduction

Notes:

1). Define all different types of actions
2). Make action creators
3). Create reducers that take in only the piece of state
  use combineReducers()
4). mapStateToProps:
- basically anything you want your component to watch in the state/store
5). mapDispatchToProps:
- makes the store's dispatch available to action creators
- defines anything that you want your compnonet to dispatch and change the store
