import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { LoadingStages } from "../types";
import { fetchTopStories } from "./actions";
import { TopStoriesState } from "./types";

const initialState: TopStoriesState = {
  articles: [],
  loading: LoadingStages.IDLE,
};

export const TopStoriesSlice = createSlice({
  name: "TopStories",
  initialState,
  reducers: {
    setTopStories: (state, action: PayloadAction<TopStoriesState>) => {
      state.articles = action.payload.articles;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<TopStoriesState>) => {
    builder.addCase(fetchTopStories.fulfilled, (state, action) => {
      state.articles = action.payload ?? [];
      state.loading = LoadingStages.SUCCEEDED;
    });
    builder.addCase(fetchTopStories.pending, (state) => {
      state.articles = state.articles ?? [];
      state.loading = LoadingStages.PENDING;
    });
    builder.addCase(fetchTopStories.rejected, (state) => {
      state.articles = state.articles ?? [];
      state.loading = LoadingStages.FAILED;
    });
  },
});
