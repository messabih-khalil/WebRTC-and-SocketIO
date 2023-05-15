import { configureStore } from '@reduxjs/toolkit';
import { loginReducer, setEmail, setPassword } from './slices/loginSlice';
import {
  registerReducer,
  setUsername,
  setPassword as setRegisterPassword,
  setEmail as setRegisterEmail,
} from './slices/registerSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
  },
});

export {
  store,
  setUsername,
  setRegisterEmail,
  setRegisterPassword,
  setPassword,
  setEmail,
};

export * from './thunks/login';
