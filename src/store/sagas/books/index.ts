import { api } from "@services/api";
import { all, call, delay, put, select, takeLatest } from "redux-saga/effects";
import { fetchBooks, fetchBooksFailure, fetchBooksSuccess, fetchMoreBooks, fetchMoreBooksSuccess } from '@store/slices/books/index'

interface IFetchBooks {
  payload?: string;
  error?: {
    response?: {
      status: string
    }
  }
}

export function* fetchBooksSaga({ payload = '' }: IFetchBooks) {
  try {
    yield delay(3000)
    const { data } = yield call(
      api.get,
      `/books/?page=1amount=15&category=${payload ? payload : 'biographies&category=children'}`,

    );
    yield put(fetchBooksSuccess(data));
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

export function* fetchMoreBooksSaga({ payload }) {
  try {
    console.log('payload:', payload);
    const booksPage = yield select((store) => store.books.page)
    yield delay(3000)
    const { data } = yield call(api.get, `/books/?page=${booksPage + 1}amount=15&category=biographies&category=children`)
    console.log('dataaaa:', data)
    yield put(fetchMoreBooksSuccess(data));
  } catch (error) {
    yield put(fetchBooksFailure({
      error: true
    }))
  }
}

export default function* listener() {
  yield all([
    takeLatest(fetchBooks().type, fetchBooksSaga),
    takeLatest(fetchMoreBooks().type, fetchMoreBooksSaga)
  ])
}