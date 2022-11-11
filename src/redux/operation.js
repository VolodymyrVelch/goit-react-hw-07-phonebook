import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://6362c45937f2167d6f6c9777.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, thunkAPI) {
    try {
      const response = await axios.get('/contacts');
      if (!response) {
        throw new Error('Server Error!');
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async function ({ name, number }, thunkAPI) {
    try {
      const response = await axios.post('/contacts', { name, number });
      if (!response) {
        throw new Error('Server Error!');
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function (contactId, thunkAPI) {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      if (!response) {
        throw new Error('Server Error!');
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
