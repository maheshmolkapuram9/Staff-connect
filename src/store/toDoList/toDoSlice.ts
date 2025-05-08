import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { InitialStateType } from "../dataTypes";
import { toDoType } from "./dataTypes";

interface toDosLocal {
  toDos: toDoType[];
  userToDos: toDoType[];
}

const initialState: InitialStateType<toDosLocal> = {
  data: { toDos: [], userToDos: [] },
  loading: false,
  error: null,
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setToDoList: (state, action: PayloadAction<toDoType[]>) => {
      state.data.toDos = action.payload;
      state.loading = false;
      state.error = null;
    },
    setUserToDoList: (state, action: PayloadAction<toDoType[]>) => {
      state.data.userToDos = action.payload;
    },
    addToDo: (state, action: PayloadAction<toDoType>) => {
      const lastToDo = state.data.toDos[state.data.toDos.length - 1];
      const nextId = lastToDo ? lastToDo.toDoId + 1 : 1;

      state.data.toDos.push({
        ...action.payload,
        toDoId: nextId,
      });
    },
    editToDo: (state, action: PayloadAction<toDoType>) => {
      const toDo = state.data.toDos.find(
        (eachToDo) => eachToDo.toDoId === action.payload.toDoId,
      );
      if (toDo) {
        toDo.title = action.payload.title;
        toDo.completed = action.payload.completed;
      }
    },
    changeToDoStatus: (state, action: PayloadAction<number>) => {
      const toDo = state.data.toDos.find(
        (eachToDo) => eachToDo.toDoId === action.payload,
      );
      if (toDo) {
        toDo.completed = !toDo.completed;
      }
    },
    deleteToDo: (state, action: PayloadAction<number>) => {
      state.data.toDos = state.data.toDos.filter(
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
  setUserToDoList,
  addToDo,
  editToDo,
  changeToDoStatus,
  deleteToDo,
  setToDoLoading,
  setToDoError,
} = toDoSlice.actions;

export const selectToDo = (state: RootState) => state.todo;
export const selectPendingTasks = (state: RootState) =>
  state.todo.data.userToDos.filter((eachTodo) => eachTodo.completed === false)
    .length;

export default toDoSlice.reducer;
