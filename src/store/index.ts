import createSagaMiddleware from 'redux-saga';
import { configureStore } from "@reduxjs/toolkit";
import { rootSagas } from '@store/sagas'

import { userReducer } from "./slices/user/index"
import { bookReducer } from './slices/books';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user: userReducer,
    books: bookReducer,
  },
  middleware: [sagaMiddleware],

})

sagaMiddleware.run(rootSagas)

