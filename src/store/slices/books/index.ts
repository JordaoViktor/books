import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
  error: null,
  statusCode: null,
  isLoading: false,
}

const bookSlice = createSlice({
  name: '@books',
  initialState,
  reducers: {
    fetchBooks(draft, { payload }) {
      draft.error = null;
      draft.isLoading = true;
    },
    fetchBooksSuccess(draft, { payload }) {
      draft.data = payload.data;
      draft.isLoading = false;
    },
    fetchBooksFailure(draft, { payload }) {
      draft.error = payload.error;
      draft.isLoading = false;
      draft.statusCode = payload.status;
    },
  }
})

export const { fetchBooks, fetchBooksSuccess, fetchBooksFailure } = bookSlice.actions

export const bookReducer = bookSlice.reducer