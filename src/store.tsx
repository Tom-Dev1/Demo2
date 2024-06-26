import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },

})

export type Store = ReturnType<typeof store.getState>