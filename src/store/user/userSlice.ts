import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface userType {
  staffId: number;
  name: string;
  isAdmin: boolean;
}

const initialState: userType = {
  staffId: 1,
  name: "Mahesh",
  isAdmin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userType>) => {
      state.staffId = action.payload.staffId;
      state.name = action.payload.name;
      state.isAdmin = action.payload.isAdmin;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
