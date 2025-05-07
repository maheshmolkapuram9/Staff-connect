import { configureStore } from "@reduxjs/toolkit";
import staffReducer from "./staff/staffSlice";

export const store = configureStore({
  reducer: {
    staff: staffReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
