import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../config';

const initialState = {
  user: null,
  loading: false,
  error: {},
  loginError: ''
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
  const response = await fetch(`${api}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: user.name })
  });
  const data = await response.json();
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogout: (state) => {
      state.user = null;
    },
    userErrorClear: (state) => {
      state.error = {};
    },
    loginErrorClear: (state) => {
      state.loginError = '';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      if (!action.payload.success) {
        state.error = action.payload;
        state.user = null;
      }
      if (action.payload.success) {
        localStorage.setItem('username', action.payload.user.username);
        localStorage.setItem('user_id', action.payload.user.id);
        state.error = {};
      }
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.user = null;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload?.error) state.loginError = action.payload.error;
      else {
        state.user = action.payload;
        state.loginError = '';
      }
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  }
});

export default userSlice.reducer;
export const { userLogout, userErrorClear, loginErrorClear } = userSlice.actions;
