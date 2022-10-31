import { Section } from '@models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FiltersState } from './types';

const initialState: FiltersState = {
  filters: [],
  appliedFilters: [],
};

export const FiltersSlice = createSlice({
  name: "Filters",
  initialState,
  reducers: {
    modifyFilters: (state, action: PayloadAction<Section>) => {
      const currentFilter = action.payload;
      if (state.filters.includes(currentFilter)) {
        state.filters = [...state.filters].filter(
          (sect) => sect !== currentFilter
        );
      } else {
        state.filters = [...state.filters, action.payload];
      }
    },
    applyFilters: (state) => {
      state.appliedFilters = [...state.filters];
    },
    clearAllFilters: (state) => {
      state.filters = [];
      state.appliedFilters = [];
    },
  },
});

export const { modifyFilters, applyFilters, clearAllFilters } =
  FiltersSlice.actions;
