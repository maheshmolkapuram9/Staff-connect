import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { staffDetails } from "./datatypes";

interface StaffState {
  staffDetails: staffDetails[];
  loading: boolean;
  error: string | null;
}

const initialState: StaffState = {
  staffDetails: [],
  loading: false,
  error: null,
};

export const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    setStaffDetails: (state, action: PayloadAction<staffDetails[]>) => {
      state.staffDetails = action.payload;
      state.loading = false;
      state.error = null;
    },
    setStaffLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setStaffError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setStaffDetails, setStaffLoading, setStaffError } =
  staffSlice.actions;

export const selectStaff = (state: RootState) => state.staff;

export default staffSlice.reducer;
