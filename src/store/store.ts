import { configureStore } from "@reduxjs/toolkit";
import staffReducer from "./staff/staffSlice";
import toDoReducer from "./toDoList/toDoSlice";
import ticketReducer from "./tickets/ticketSlice";
import userReducer from "./user/userSlice";
import { loadState, saveState } from "../utils/table/localStorage";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    user: userReducer,
    staff: staffReducer,
    todo: toDoReducer,
    ticket: ticketReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
