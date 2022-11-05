import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchAll, addContact, deleteContacts } from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const phoneBookInitialState = {
  contacts: [],
  items: [],
  isLoading: false,
  error: null,
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
  // extraReducers: {
  //   []
  // },
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
