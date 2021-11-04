import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "@counter",
  initialState: {
    value: 0
  },
  reducers: {
    incrementCounter: (draft) => {
      draft.value += 1
    },
    randomIncrementCounter: (draft, action: PayloadAction<number>) => {
      if (draft.value < 99) {
        draft.value += action.payload
      }
    },
    decrementCounter: (draft) => {
      if (draft.value > 0) {
        draft.value -= 1;
      }
    },
    resetCounter: (draft) => {
      draft.value = 0
    }
  },
})

export const { incrementCounter, decrementCounter, resetCounter, randomIncrementCounter } = counterSlice.actions

export const counterReducer = counterSlice.reducer