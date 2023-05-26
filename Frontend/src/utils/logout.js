import { redirectURL } from './redirectUrl';

export const logout = () => {
  localStorage.clear();
  redirectURL('/login');
};
