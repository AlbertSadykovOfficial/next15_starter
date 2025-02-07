import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  loggedIn: boolean;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: <IAuthState>{
    loggedIn: false,
  },
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setLoggedIn } = authSlice.actions;
export const authReducer = authSlice.reducer;
