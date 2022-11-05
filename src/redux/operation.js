import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://6362c45937f2167d6f6c9777.mockapi.io';

export const fetchAll = createAsyncThunk(
  'contacts/fetchAll',
  async function (_, thunkAPI) {
    try {
      const response = await axios.get('/contacts');
      if (!response.ok) {
        throw new Error('Server Error!');
      }
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async function (name, number, thunkAPI) {
    try {
      const response = await axios.post('/contacts', { name, number });
      if (!response.ok) {
        throw new Error('Server Error!');
      }
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  'contacts/addContacts',
  async function (contactId, thunkAPI) {
    try {
      const response = await axios.delete('/contacts', { contactId });
      if (!response.ok) {
        throw new Error('Server Error!');
      }
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
