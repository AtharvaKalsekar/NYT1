import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { FiltersSlice } from './Filters';
import { TopStoriesSlice } from './TopStories';

const reducer = combineReducers({
  topStories: TopStoriesSlice.reducer,
  filters: FiltersSlice.reducer,
});

export const store = configureStore({
  reducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
