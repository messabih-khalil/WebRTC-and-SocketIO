import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/Login';
import RegisterPage from './pages/auth/Register';
import DashboardPage from './pages/dashboard';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
