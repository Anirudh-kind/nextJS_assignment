import { createSlice } from "@reduxjs/toolkit";
import { data } from "@/constants/data";

interface Post {
  text: string;
  id: number;
  posted_on: string;
}

const initialState: Array<Post> = data; //[...data];
export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    deleteFeed(state, action) {
      const id: number = action.payload;
      return state.filter((ele) => ele.id !== id);
    },
    addFeed(state, action) {
      state.push(action.payload);
    },
  },
});

export const { deleteFeed, addFeed } = feedSlice.actions;

export default feedSlice.reducer;