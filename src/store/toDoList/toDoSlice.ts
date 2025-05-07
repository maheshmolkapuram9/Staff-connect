import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { InitialStateType } from "../dataTypes";
import { toDoType } from "./dataTypes";

const initialState: InitialStateType<toDoType[]> = {
  data: [],
  loading: false,
  error: null,
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setToDoList: (state, action: PayloadAction<toDoType[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    addToDo: (state, action: PayloadAction<toDoType>) => {
      const lastToDo = state.data[state.data.length - 1];
      const nextId = lastToDo ? lastToDo.toDoId + 1 : 1;

      state.data.push({
        ...action.payload,
        toDoId: nextId,
      });
    },
    editToDo: (state, action: PayloadAction<toDoType>) => {
      const toDo = state.data.find(
        (eachToDo) => eachToDo.toDoId === action.payload.toDoId,
      );
      if (toDo) {
        toDo.title = action.payload.title;
        toDo.completed = action.payload.completed;
      }
    },
    changeToDoStatus: (state, action: PayloadAction<number>) => {
      const toDo = state.data.find(
        (eachToDo) => eachToDo.toDoId === action.payload,
      );
      if (toDo) {
        toDo.completed = !toDo.completed;
      }
    },
    deleteToDo: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter(
        (eachToDo) => eachToDo.toDoId !== action.payload,
      );
    },
    setToDoLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setToDoError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setToDoList,
  addToDo,
  editToDo,
  changeToDoStatus,
  deleteToDo,
  setToDoLoading,
  setToDoError,
} = toDoSlice.actions;

export const selectToDo = (state: RootState) => state.todo;

export default toDoSlice.reducer;
