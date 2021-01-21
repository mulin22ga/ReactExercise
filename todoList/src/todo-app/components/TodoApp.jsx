import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import { connect } from 'react-redux'
import _ from 'lodash'
import '../style.scss'
import {setTodo,ediTodo,delTodo,addTodo,savTodo,lodTodo} from '../actions'

const TodoApp = createReactClass({
  proptypes: {
    // 待辦事項
    todo: PropTypes.string.isRequired,
    // 待辦事項列表
    todoList: PropTypes.array.isRequired
  },
  componentDidMount: function () {
    this.props.lodTodo()
  },
  
  render () {
    const { todo, todoList } = this.props
    return (
      <div className='todo-app'>
        <h1>React Exercises</h1>
        <h3>TodoList Exercises</h3>
        <div className='todo-content'>
          <div className='add-panel'>
            <input className='add-input' type='text' value={todo} placeholder='請輸入待辦事項' onChange={(e)=>this.props.setTodo(e.target.value)}/>
            <button className='add-btn' onClick={()=>this.props.addTodo(todo)}>新增待辦事項</button>
            <button className='add-btn' onClick={()=>this.props.savTodo(todoList)}>儲存待辦事項到伺服器</button>
          </div>
          <div className='todo-list'>
            <ul>
              {_.map(todoList, (todo, index) => {
                return (
                  <li key={index} className='todo'>
                    <span className='todo-text'><input className='add-input'  type='text' value={todo} onChange={(e)=>this.props.ediTodo(e.target.value,index,todoList)}/></span>
                    <button className='del-btn' onClick={()=>this.props.delTodo(todoList,index)}>刪除</button> 
                    
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
})

function selector (state) {
  return {
    todo: state.todo,
    todoList: state.todoList
  }
}

const actions = {
  setTodo,ediTodo,delTodo,addTodo,savTodo,lodTodo
}
export default connect(selector, actions)(TodoApp)
