import { api } from "@services/api";
import { all, call, put, select, takeEvery, takeLatest } from "redux-saga/effects";

import { loginFailure, loginSuccess, login } from '@store/slices/user/index'
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IUserSignInAuth {
  payload: {
    email: string;
    password: string;
  }
}

export function* loginSaga({ payload: { email, password } }: IUserSignInAuth) {
  try {
    const { data, headers } = yield call(
      api.post,
      '/auth/sign-in',
      { email, password }
    );

    const user = { ...data, token: headers.authorization };

    console.log('Im a user:', headers)
    api.interceptors.request.use((config: any) => {

      config.headers.authorization = `Bearer ${user.token}`
      config.headers['refresh-token'] = headers['refresh-token']
      config.headers['Content-Type'] = 'application/json';

      return config;
    });

    yield call(AsyncStorage.setItem, '@user', JSON.stringify(user));
    yield put(loginSuccess(data));

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
    takeLatest(login().type, loginSaga),
  ])
}