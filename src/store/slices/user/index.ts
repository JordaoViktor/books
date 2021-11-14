import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
  error: null,
  statusCode: null,
  isLoading: false,
}

const userSlice = createSlice({
  name: '@user',
  initialState,
  reducers: {
    login(draft, { payload }) {
      draft.error = null;
      draft.data = payload.data;
      draft.isLoading = true;
    },
    loginSuccess(draft, { payload }) {
      draft.data = payload.data;
      draft.isLoading = false;
    },
    loginFailure(draft, { payload }) {
      draft.error = payload.error;
      draft.isLoading = false;
      draft.statusCode = payload.status;
    },
  }
})

export const { login, loginSuccess, loginFailure } = userSlice.actions

export const userReducer = userSlice.reducer