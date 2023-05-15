import { Alert, Snackbar } from '@mui/material';
import React from 'react';

const AlertNotifaction = ({ message }) => {
  return (
    <>
      <Snackbar open={!!message} autoHideDuration={3000}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AlertNotifaction;
