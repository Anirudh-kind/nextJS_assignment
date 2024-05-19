import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => initialState,
    logIn: (state) => {
      state.isAuth = true;
    },
  },
});

export const { logOut, logIn } = authSlice.actions;
export default authSlice.reducer;
