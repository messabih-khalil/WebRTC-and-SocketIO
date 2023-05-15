import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useThunk = thunk => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const runThunk = useCallback(() => {
    // Clear Previus Error Message
    setError('');
    //
    setIsLoading(true);
    dispatch(thunk())
      .unwrap()
      .catch(e => {
        setError(e.message);
      })
      .finally(_ => {
        setIsLoading(false);
      });
  }, [dispatch, thunk]);

  return [runThunk, isLoading, error];
};
