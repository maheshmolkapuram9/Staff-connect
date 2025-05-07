import { configureStore } from "@reduxjs/toolkit";
import staffReducer from "./staff/staffSlice";
import toDoReducer from "./toDoList/toDoSlice";
import ticketReducer from "./tickets/ticketSlice";

export const store = configureStore({
  reducer: {
    staff: staffReducer,
    todo: toDoReducer,
    ticket: ticketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
