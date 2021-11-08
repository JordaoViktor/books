import { api } from "@services/api";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { loginFailure, loginSuccess, login } from '@store/slices/user/index'

interface IUserSignInAuth {
  payload: {
    email: string;
    password: string;
  }
}

export function* loginSaga({ payload: { email, password } }: IUserSignInAuth) {
  try {
    const { data } = yield call(
      api.post,
      '/auth/sign-in',
      { email, password }
    );

    yield put(loginSuccess({ data }));
    console.log(data)
  } catch (error) {
    if (error instanceof Error) {

      yield put(
        loginFailure({
          error: true,
          status: error.response.status
        })
      );
    }
  }
}

export default function* listener() {
  yield all([
    takeLatest(login().type, loginSaga)
  ])
}