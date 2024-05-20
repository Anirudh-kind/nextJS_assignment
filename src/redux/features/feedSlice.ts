import { createSlice } from "@reduxjs/toolkit";
import { data } from "@/constants/data";

interface Post {
  text: string;
  id: number;
  posted_on: string;
}

const initialState: Array<Post> = [...data];

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    deleteFeed(state, action) {
      const { id } = action.payload;
      return state.filter((ele) => ele.id !== id);
    },
    addFeed(state, action) {
      // You can define the logic for adding a feed here
    }
  }
});

export const { deleteFeed, addFeed } = feedSlice.actions;

export default feedSlice.reducer;
