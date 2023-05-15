import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpClient } from '../../utils/httpClient';

export const login = createAsyncThunk('user/login', async (_, { getState }) => {
  // ** Get State
  const state = getState();
  try {
    // ** Send Request To Create Account
    const res = await httpClient.post('/auth/login', {
      mail: state.login.email,
      password: state.login.password,
    });
    return res.data.token;
  } catch (e) {
    throw new Error(e.response.data.message ?? e.response.data);
  }
});
