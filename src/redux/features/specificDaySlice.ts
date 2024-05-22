import { createSlice } from "@reduxjs/toolkit";

const initialState: Array<string> = [];

export const specificDaySlice = createSlice({
  name: "specificDay",
  initialState,
  reducers: {
    pushNewDay(state, action) {
      state.push(action.payload); 
    },
    removeDay(state, action) {
      return state.filter((ele) => ele !== action.payload);
    },
  },
});

export const { pushNewDay, removeDay } = specificDaySlice.actions;

export default specificDaySlice.reducer;
