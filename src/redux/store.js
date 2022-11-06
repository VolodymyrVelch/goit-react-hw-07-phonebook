import { configureStore } from '@reduxjs/toolkit';

import { contactReducer } from './phonebookSlice';

export const store = configureStore({
  reducer: {
    phonebooks: contactReducer,
  },
});
