import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.goit.ua/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/sign-up', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/sign-in', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signOut = createAsyncThunk(
  'auth/signOut',
  async (_, { rejectWithValue }) => {
    try {
      await axios.delete('/auth/sign-out');
      token.unset();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchTransactions = createAsyncThunk(
  'contacts/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/transactions`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const addTransaction = createAsyncThunk(
//   'contacts/addTransaction',
//   async (transaction, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post(`/transactions`, transaction);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
