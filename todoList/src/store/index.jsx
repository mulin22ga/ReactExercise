import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../todo-app/reducers'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga-ie8'
import sagas from '../todo-app/sagas'

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  compose(
    applyMiddleware(logger),
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(sagas)

export default store
