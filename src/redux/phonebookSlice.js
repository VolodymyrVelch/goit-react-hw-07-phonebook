import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { phonebookReducer } from './phonebookSlice';

const phoneBookInitialState = {
  contacts: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'phonebooks',
  initialState: phoneBookInitialState,
  reducers: {
    formSubmitData(state, action) {
      const { name, number } = action.payload;
      state.contacts.push({ id: nanoid(), name, number });
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    filterContscts(state, action) {
      state.filter = action.payload;
    },
  },
});

// Зберігаємо дані в LocalStorage за допомогою бібліотеки persist-redux
const persistConfig = {
  key: 'root',
  storage,
};

export const persistedPhonebookReducer = persistReducer(
  persistConfig,
  phoneBookSlice.reducer
);

export const { formSubmitData, deleteContact, filterContscts } =
  phoneBookSlice.actions;
