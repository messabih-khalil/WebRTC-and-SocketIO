import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpClient } from '../../utils/httpClient';

export const register = createAsyncThunk(
  'user/register',
  async (_, { getState }) => {
    // ** Get State
    const state = getState();

    // ** Send Request To Create Account

    try {
      const res = await httpClient.post('/auth/register', {
        username: state.register.username,
        mail: state.register.email,
        password: state.register.password,
      });

      return res.data.token;
    } catch (e) {
      throw new Error(e.response.data);
    }
  }
);
