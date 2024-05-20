import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import feedSlice from "./features/feedSlice";
import specificDaySlice from "./features/specificDaySlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
export const store = configureStore({
  reducer: {
    authSlice,
    feedSlice,
    specificDaySlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
