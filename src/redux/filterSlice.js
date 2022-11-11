import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    data: '',
  },
  reducers: {
    filterContscts(state, action) {
      state.data = action.payload;
    },
  },
});

export const { filterContscts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
