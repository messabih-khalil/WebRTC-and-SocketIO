import { createSlice } from '@reduxjs/toolkit';
import { register } from '../thunks/register';
import { redirect } from 'react-router-dom';
const registerSlice = createSlice({
  name: 'login',
  initialState: {
    username: '',
    email: '',
    password: '',
    token: '',
  },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setRegisterEmail(state, action) {
      state.email = action.payload;
    },
    setRegisterPassword(state, action) {
      state.password = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(register.fulfilled, (state, action) => {
      state.token = action.payload;
      return redirect('/');
    });
  },
});

export const { setRegisterEmail, setRegisterPassword, setUsername } = registerSlice.actions;

export const registerReducer = registerSlice.reducer;
