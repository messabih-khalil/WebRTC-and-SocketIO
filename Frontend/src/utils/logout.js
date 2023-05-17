import { redirect } from 'react-router-dom';

export const logout = () => {
  localStorage.clear();
  redirect('/login');
};
