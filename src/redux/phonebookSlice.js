import { createSlice} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchContacts, addContact, deleteContacts } from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const phoneBookSlice = createSlice({
  name: 'phonebooks',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  // reducers: {
  //   formSubmitData(state, action) {
  //     const { name, number } = action.payload;
  //     state.contacts.push({ id: nanoid(), name, number });
  //   },
  //   deleteContact(state, action) {
  //     const index = state.contacts.findIndex(
  //       contact => contact.id === action.payload
  //     );
  //     state.contacts.splice(index, 1);
  //   },
  //   filterContscts(state, action) {
  //     state.filter = action.payload;
  //   },
  // },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
  },
  [fetchContacts.rejected]: handleRejected,
  [addContact.pending]: handlePending,
  [addContact.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    state.contacts.push(action.payload);
  },
  [fetchContacts.rejected]: handleRejected,
  [deleteContacts.pending]: handlePending,
  [deleteContacts.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    const index = state.contacts.findIndex(
      contact => contact.id === action.payload
    );
    state.contacts.splice(index, 1);
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
