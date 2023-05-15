import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPassword, login } from '../../../../store/index';
import { useThunk } from '../../../../hooks/useThunks';
import InputWithLabel from '../../../../shared/components/InputWithLabel';
import CustomPrimaryButton from '../../../../shared/components/CustomPrimaryButton';
import RedirectInlineLink from '../../../../shared/components/RedirectInlineButton';
import { useValidateForm } from '../../../../hooks/useValidateForm';
import AlertNotifaction from '../../../../shared/components/AlertNotifaction';

export const LoginPageInputs = () => {
  // ** Login Thunk
  const [doLogin, isLoading, isError] = useThunk(login);
  // ** Create Action Dispatcher
  const dispatch = useDispatch();
  // **
  const { email, password } = useSelector(state => {
    return {
      email: state.login.email,
      password: state.login.password,
    };
  });
  // ** Validate Form

  const isValid = useValidateForm(email, password);

  // ** Render
  return (
    <>
      <AlertNotifaction message={isError} />
      <InputWithLabel
        label="Email"
        type="email"
        placeholder="Enter Your Email"
        value={email}
        setValue={value => dispatch(setEmail(value))}
      ></InputWithLabel>
      <br />
      <InputWithLabel
        label="Password"
        type="password"
        placeholder="Enter Your Password"
        value={password}
        setValue={value => dispatch(setPassword(value))}
      ></InputWithLabel>
      <CustomPrimaryButton
        label="Login"
        onClick={() => doLogin()}
        isLoading={isLoading}
        disabled={isValid}
      />

      <RedirectInlineLink
        text="I dont Have Account"
        redirectLink="/register"
        redirectText="Register"
      />
    </>
  );
};
