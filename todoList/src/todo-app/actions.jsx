import ACTION_TYPES from './actionTypes'

export const setTodo = (todo) => ({
    type: ACTION_TYPES.SET_TODO,
    payload: {todo}
})
export const ediTodo = (value,index,todoList) => ({
    type: ACTION_TYPES.EDI_TODO,
    payload: {value,index,todoList}
})
export const delTodo = (todoList,index) => ({
    type: ACTION_TYPES.DEL_TODO,
    payload: {todoList,index}
})
export const addTodo = (todo) => ({
    type: ACTION_TYPES.ADD_TODO,
    payload: {todo}
})
export const savTodo = (todoList) => ({
    type: ACTION_TYPES.SAV_TODO,
    payload: {todoList}
})
export function lodTodo(todoList){
    return {
      type:ACTION_TYPES.LOD_TODO
      ,payload:{todoList}
    }
}



