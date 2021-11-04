import createSagaMiddleware from 'redux-saga';
import { configureStore } from "@reduxjs/toolkit";
import { rootSagas } from '@store/sagas'
import { counterReducer } from "./slices/counter/index"

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSagas)

