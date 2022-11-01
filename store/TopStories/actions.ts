import { Section } from '@models';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTopStories } from '@services';

export const fetchTopStories = createAsyncThunk(
  "fetchTopStories",
  async (sections?: Section[]) => {
    try {
      const data = await getTopStories({ sections });
      return data;
    } catch (error) {
      console.error("Error while getting top stories", error);
    }
  }
);
