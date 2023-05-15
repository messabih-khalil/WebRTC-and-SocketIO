import { useSelector, useDispatch } from 'react-redux';
import {
  setRegisterEmail,
  setUsername,
  setRegisterPassword,
} from '../../../../store/index';
import InputWithLabel from '../../../../shared/components/InputWithLabel';
import RedirectInlineLink from '../../../../shared/components/RedirectInlineButton';
import CustomPrimaryButton from '../../../../shared/components/CustomPrimaryButton';
import { useThunk } from '../../../../hooks/useThunks';
import { register } from '../../../../store/thunks/register';
import { useValidateForm } from '../../../../hooks/useValidateForm';
import AlertNotifaction from '../../../../shared/components/AlertNotifaction';

export const RegisterPageInputs = () => {
  // ** Register Thunk
  const [doRegister, isLoading, isError] = useThunk(register);
  // ** Create Action Dispatcher
  const dispatch = useDispatch();
  // **
  const { email, password, username } = useSelector(state => {
    return {
      username: state.register.username,
      email: state.register.email,
      password: state.register.password,
    };
  });
  // ** Validate Form

  const isValid = useValidateForm(email, password);

  // ** Render
  return (
    <>
      <AlertNotifaction message={isError} />
      <InputWithLabel
        label="Username"
        type="text"
        placeholder="Enter Your Username"
        value={username}
        setValue={value => dispatch(setUsername(value))}
      ></InputWithLabel>
      <br />
      <InputWithLabel
        label="Email"
        type="email"
        placeholder="Enter Your Email"
        value={email}
        setValue={value => dispatch(setRegisterEmail(value))}
      ></InputWithLabel>
      <br />
      <InputWithLabel
        label="Password"
        type="password"
        placeholder="Enter Your Password"
        value={password}
        setValue={value => dispatch(setRegisterPassword(value))}
      ></InputWithLabel>

      <CustomPrimaryButton
        label="Register"
        onClick={() => doRegister()}
        isLoading={isLoading}
        disabled={isValid}
      />

      <RedirectInlineLink
        text="I Have Account"
        redirectLink="/login"
        redirectText="Login"
      />
    </>
  );
};
