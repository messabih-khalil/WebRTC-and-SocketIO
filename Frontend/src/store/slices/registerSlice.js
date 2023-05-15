import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'login',
  initialState: {
    error: '',
    username: '',
    email: '',
    password: '',
  },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { setEmail, setPassword, setUsername } = registerSlice.actions;

export const registerReducer = registerSlice.reducer;
