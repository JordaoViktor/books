import { api } from "@services/api";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchBooks, fetchBooksFailure, fetchBooksSuccess } from '@store/slices/books/index'

export function* fetchBooksSaga() {
  try {
    const { data } = yield call(
      api.get,
      '/books/?page=1&amount=25&category=biographies',
    );
    // console.log('aqui')
    // console.log('Im a book:', data)

    yield put(fetchBooksSuccess({ data }));
  } catch (error) {
    if (error instanceof Error) {
      yield put(
        fetchBooksFailure({
          error: true,
          status: error.response.status
        })
      );
    }
  }
}

export default function* listener() {
  yield all([
    takeLatest(fetchBooks().type, fetchBooksSaga),
  ])
}