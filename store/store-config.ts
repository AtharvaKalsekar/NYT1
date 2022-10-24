import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { TopStoriesSlice } from "./TopStories";

const reducer = combineReducers({
  topStories: TopStoriesSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware(),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
