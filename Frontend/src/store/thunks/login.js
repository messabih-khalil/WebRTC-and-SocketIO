import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('user/login', async (_, { getState }) => {
  // ** Get State
  const state = getState();

  // ** Send Request To Create Account
  const res = await axios.post('http://localhost:3232/api/auth/login', {
    mail: state.login.email,
    password: state.login.password,
  });
  return res.data.token;
});
