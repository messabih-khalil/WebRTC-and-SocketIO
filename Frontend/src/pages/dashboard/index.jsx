import React from 'react';
import { logout } from '../../utils/logout';

const DashboardPage = () => {
  return (
    <div>
      Dashboard
      <button onClick={() => logout()}>LogOut</button>
    </div>
  );
};

export default DashboardPage;
