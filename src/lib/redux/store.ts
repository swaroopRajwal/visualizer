import { configureStore } from "@reduxjs/toolkit";
import array from "./reducers/array";

const store = configureStore({
  reducer: {
    array,    
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch