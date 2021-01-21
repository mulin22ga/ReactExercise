import { takeEvery } from 'redux-saga-ie8'
import { put, select, call } from 'redux-saga-ie8/effects'
import ACTION_TYPES from './actionTypes'
import * as acitons from './actions'
import { save, load } from './../utils/callApi'
import {showConfirmDialog,showAlertDialog} from './../utils/dialog'
import _ from 'lodash'


function * saveTodo({payload}){
  // 將todoList存到伺服器 (已完成)
  const isSave = yield call(showConfirmDialog,'確定儲存嗎?')
  if (isSave) {
    yield call(save, payload.todoList)
    yield call(showAlertDialog,'儲存完畢')
  }
}

export default function * root () {
  const data = yield call(load)
  yield put(acitons.lodTodo(data))
  yield [
    takeEvery(ACTION_TYPES.SAV_TODO, saveTodo)

  ]
}

