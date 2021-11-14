import { all } from 'redux-saga/effects';
import userSaga from './user'
import fetchBooksSaga from './books'

export function* rootSagas() {
  yield all([
    userSaga(),
    fetchBooksSaga(),
  ])
} 