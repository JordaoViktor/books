import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
  error: null,
  page: 1,
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
    fetchMoreBooks(draft, { payload }) {
      draft.error = null;
      draft.isLoading = true;
    },
    fetchMoreBooksSuccess(draft, { payload }) {
      draft.data.push(...payload.data);
      draft.page = draft.page + 1
      draft.isLoading = false;
    }
  }
})

export const {
  fetchBooks,
  fetchBooksSuccess,
  fetchBooksFailure,
  fetchMoreBooks,
  fetchMoreBooksSuccess } = bookSlice.actions

export const bookReducer = bookSlice.reducer