import ACTION_TYPES from '../actionTypes'
import _ from 'lodash'
import { savTodo } from '../actions'

const initState = {
  todo: '',     // 事項
  todoList: [], // 清單
}

const setTodo = (state, {payload}) => {
  // 放入: 將輸入項目變數狀態中 (已完成)
  console.log('========setTodo========')
  console.log(payload.todo)
  return {...state,todo:payload.todo}
}
const ediTodo = (state, {payload}) => {
  // 放入修改： 將修改的文字欄位放入變數狀態todoList中 (已完成)
  console.log('========ediTodo========')
  const newTodoList = _.cloneDeep(payload.todoList)
  newTodoList[payload.index] = payload.value
  return {...state,todoList:newTodoList}
}
const delTodo = (state, {payload}) => {
  // 刪除: 取得物件在陣列內的排序並刪除 (已完成)
  console.log('========delTodo========')
  console.log('payload.index'+payload.index)
  const todoList = _.cloneDeep(payload.todoList)
  const newTodoList = _.filter(todoList,(v,i) => i!==payload.index)
  console.log(newTodoList)
  return {...state,todoList:newTodoList}
}
const addTodo = (state, {payload}) => {
  // 新增: 把文字位的內容放到todoList，並清空文字欄位 (已完成)
  console.log('========addTodo========')
  const newTodoList =  [...state.todoList, payload.todo]
  return {...state,todoList:newTodoList,todo:''}
}
const lodTodo = (state,{payload}) => {
  // 載入: 撈出過往儲存資料 (已完成)
  console.log('========lodTodo========')
  const newTodoList = payload.todoList ? payload.todoList : [];
  return {...state,todoList:newTodoList}
}

const actionMap = {
  SET_TODO: setTodo, // 輸入
  EDI_TODO: ediTodo, // 放入修改
  DEL_TODO: delTodo, // 刪除
  ADD_TODO: addTodo, // 新增
  LOD_TODO: lodTodo  // 載入todoList
}

export default function todoList (state = initState, action) {
  console.log('in reducer')
  const reducer = actionMap[action.type]
  return reducer ? reducer(state, action) : state
}


