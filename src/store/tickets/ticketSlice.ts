import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { InitialStateType } from "../dataTypes";
import { ticketType } from "./dataTypes";

const initialState: InitialStateType<ticketType[]> = {
  data: [],
  loading: false,
  error: null,
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setTicketDetails: (state, action: PayloadAction<ticketType[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    addTicket: (state, action: PayloadAction<ticketType>) => {
      const ticket = state.data[-1];
      const nextId = ticket ? ticket.ticketId : 1;
      state.data.push({ ...action.payload, ticketId: nextId });
    },
    setTicketLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setTicketError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setTicketDetails, addTicket, setTicketLoading, setTicketError } =
  ticketSlice.actions;

export const selectTickets = (state: RootState) => state.ticket;

export default ticketSlice.reducer;
