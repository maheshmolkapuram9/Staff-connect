/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setStaffDetails,
  setStaffError,
  setStaffLoading,
} from "../store/staff/staffSlice";

const useStaffDeatils = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStaffLoading());
    const fetchStaffDeatils = async () => {
      try {
        const res = await fetch("/mocks/staff.json");
        if (!res.ok) throw new Error("Failed to fetch staff deails data");
        const data = await res.json();
        dispatch(setStaffDetails(data));
      } catch (err) {
        if (err instanceof Error) {
          dispatch(setStaffError(err.message));
        } else {
          dispatch(setStaffError("An unknown error occurred"));
        }
      }
    };

    setTimeout(() => {
      fetchStaffDeatils();
    }, 500);
  }, []);
};

export default useStaffDeatils;
