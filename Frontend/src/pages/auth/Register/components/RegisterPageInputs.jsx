import { useSelector, useDispatch } from 'react-redux';
import {
  setRegisterEmail,
  setUsername,
  setRegisterPassword,
} from '../../../../store/index';
import InputWithLabel from '../../../../shared/components/InputWithLabel';

export const RegisterPageInputs = () => {
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

  // ** Render
  return (
    <>
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
    </>
  );
};
