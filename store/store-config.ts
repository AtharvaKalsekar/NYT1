import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TopStoriesSlice } from "./TopStories";

const reducer = combineReducers({
  topStories: TopStoriesSlice.reducer,
});

export const store = configureStore({
  reducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
