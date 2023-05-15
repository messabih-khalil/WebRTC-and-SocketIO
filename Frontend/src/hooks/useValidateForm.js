import { useState, useCallback, useMemo } from 'react';
import { ValidateLoginForm } from '../utils/validators';

export const useValidateForm = (email, password) => {
  const [isValid, setIsValid] = useState(false);
  const runTest = useCallback(() => {
    const validator = new ValidateLoginForm(email, password);
    setIsValid(validator.isValidate());
  }, [email, password]);

  useMemo(() => {
    runTest();
  }, [runTest]);

  return isValid;
};
