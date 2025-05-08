import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { InitialStateType } from "../dataTypes";
import { ticketType } from "./dataTypes";

interface ticketsLocal {
  tickets: ticketType[];
  userTickets: ticketType[];
}

const initialState: InitialStateType<ticketsLocal> = {
  data: { tickets: [], userTickets: [] },
  loading: false,
  error: null,
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setTicketDetails: (state, action: PayloadAction<ticketType[]>) => {
      state.data.tickets = action.payload;
      state.loading = false;
      state.error = null;
    },
    setUserTickets: (state, action: PayloadAction<ticketType[]>) => {
      state.data.userTickets = action.payload;
    },
    addTicket: (state, action: PayloadAction<ticketType>) => {
      const ticket = state.data.tickets[state.data.tickets.length - 1];
      const nextId = ticket ? ticket.ticketId + 1 : 1;
      state.data.tickets.push({ ...action.payload, ticketId: nextId });
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

export const {
  setTicketDetails,
  setUserTickets,
  addTicket,
  setTicketLoading,
  setTicketError,
} = ticketSlice.actions;

export const selectTickets = (state: RootState) => state.ticket;
export const selectOpenTicketsCount = (state: RootState) =>
  state.ticket.data.userTickets.filter((ticket) => ticket.status === "Open")
    .length;
export const selectTicketUpdatesCount = (state: RootState) =>
  state.ticket.data.userTickets.filter((ticket) => {
    const createdDate = new Date(ticket.created);
    const today = new Date();

    return (
      createdDate.getUTCFullYear() === today.getUTCFullYear() &&
      createdDate.getUTCMonth() === today.getUTCMonth() &&
      createdDate.getUTCDate() === today.getUTCDate()
    );
  }).length;

export default ticketSlice.reducer;
