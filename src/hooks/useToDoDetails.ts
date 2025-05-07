/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setToDoError,
  setToDoList,
  setToDoLoading,
} from "../store/toDoList/toDoSlice";

const useToDoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setToDoLoading());
    const fetchtoDoList = async () => {
      try {
        const res = await fetch("/mocks/toDo.json");
        if (!res.ok) throw new Error("Failed to fetch to do List");
        const data = await res.json();
        dispatch(setToDoList(data));
      } catch (err) {
        if (err instanceof Error) {
          dispatch(setToDoError(err.message));
        } else {
          dispatch(setToDoError("An unknown error occurred"));
        }
      }
    };

    setTimeout(() => {
      fetchtoDoList();
    }, 500);
  }, []);
};

export default useToDoList;
