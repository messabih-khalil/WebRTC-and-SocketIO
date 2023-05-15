import AuthBox from '../../../shared/components/AuthCard';
import { LoginPageHeader } from './components/LoginPageHeader';
import { LoginPageInputs } from './components/LoginPageInputs';



const RegisterPage = () => {

  // ** Render
  return (
    <>
      <AuthBox>
        <LoginPageHeader />
        <LoginPageInputs />
      </AuthBox>
    </>
  );
};

export default RegisterPage;
