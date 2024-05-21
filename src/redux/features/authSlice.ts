import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
}

const userFromSession = sessionStorage.getItem("user");

const initialState: AuthState = {
  isAuth: !!userFromSession, // Convert userFromSession to boolean
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.isAuth = false;
    },
    logIn: (state) => {
      state.isAuth = true;
    },
  },
});

export const { logOut, logIn } = authSlice.actions;
export default authSlice.reducer;
