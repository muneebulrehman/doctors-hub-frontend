import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../config';

const initialState = {
  user: null,
  loading: false,
  error: ''
};

export const signUp = createAsyncThunk('user/signUp', async (user) => {
  const response = await fetch(`${api}users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: user.name, email: user.email })
  });
  const data = await response.json();
  return data;
});

export const login = createAsyncThunk('user/login', async (user) => {
  const response = await fetch(`${api}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: user.name })
  });
  const data = await response.json();
  return data;
});
