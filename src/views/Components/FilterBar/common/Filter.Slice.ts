import { FilterReducerState } from "@common/@types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: FilterReducerState = {
  searchType: '',
  searchQuery: ''
};

const filterSlice = createSlice({
  name: 'Filterbar',
  initialState,
  reducers: {
    setSearchType: (state: FilterReducerState, action: PayloadAction<{ searchType: string }>) => {
      const { searchType } = action.payload;
      state.searchType = searchType;
    },
    setSearchQuery: (state: FilterReducerState, action: PayloadAction<{ searchQuery: string }>) => {
      state.searchQuery = action.payload.searchQuery
    }
  }
});

export const { setSearchType, setSearchQuery } = filterSlice.actions;

export default filterSlice.reducer;