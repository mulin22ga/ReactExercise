import 'regenerator-runtime/runtime'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import TodoApp from '../todo-app/components/TodoApp'
import store from '../store'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    )
  }
}
