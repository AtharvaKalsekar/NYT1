import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTopStories } from "@services";

export const fetchTopStories = createAsyncThunk("fetchTopStories", async () => {
  try {
    const data = await getTopStories({});
    return data.results;
  } catch (error) {
    console.error("Error while getting top stories", error);
  }
});
