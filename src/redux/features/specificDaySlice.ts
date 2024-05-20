import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "all";

export const specificDaySlice = createSlice({
  name: "specificDay",
  initialState,
  reducers: {
    changeSpecificDay(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { changeSpecificDay } = specificDaySlice.actions;

export default specificDaySlice.reducer;
