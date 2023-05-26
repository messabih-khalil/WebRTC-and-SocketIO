import { createSlice } from '@reduxjs/toolkit';
import { login } from '../thunks/login';
import { redirectURL } from '../../utils/redirectUrl';
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
      state.token = action.payload;
      localStorage.setItem('token', state.token);
      redirectURL('/dashboard');
    });
  },
});

export const { setEmail, setPassword } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
