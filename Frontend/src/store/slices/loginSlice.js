import { createSlice } from '@reduxjs/toolkit';
import { login } from '../thunks/login';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
    token: '',
  },
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log('token : ', action.payload);
      state.token = action.payload;
    });
  },
});

export const { setEmail, setPassword } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
