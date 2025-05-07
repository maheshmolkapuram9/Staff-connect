/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setTicketDetails,
  setTicketError,
  setTicketLoading,
} from "../store/tickets/ticketSlice";

const useTicketDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTicketLoading());
    const fetchTicketDeatils = async () => {
      try {
        const res = await fetch("/mocks/tickets.json");
        if (!res.ok) throw new Error("Failed to fetch staff deails data");
        const data = await res.json();
        dispatch(setTicketDetails(data));
      } catch (err) {
        if (err instanceof Error) {
          dispatch(setTicketError(err.message));
        } else {
          dispatch(
            setTicketError(
              "An unknown error occurred in fetching ticket details",
            ),
          );
        }
      }
    };

    setTimeout(() => {
      fetchTicketDeatils();
    }, 500);
  }, []);
};

export default useTicketDetails;
