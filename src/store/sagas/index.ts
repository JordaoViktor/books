import { all } from 'redux-saga/effects';
import userSaga from './user'

export function* rootSagas() {
  yield all([
    userSaga()
  ])
} 