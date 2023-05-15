import React from 'react';
import { RegisterPageHeader } from './components/RegisterPageHeader';
import { RegisterPageInputs } from './components/RegisterPageInputs';
import AuthBox from '../../../shared/components/AuthCard';

const RegisterPage = () => {
  return (
    <>
      <AuthBox>
        <RegisterPageHeader />
        <RegisterPageInputs />
      </AuthBox>
    </>
  );
};

export default RegisterPage;
