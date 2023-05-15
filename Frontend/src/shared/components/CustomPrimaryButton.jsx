import { Button } from '@mui/material';
import React from 'react';

const CustomPrimaryButton = ({ label, disabled, onClick, isLoading }) => {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: '#5865f0',
        color: 'white',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 500,
        width: '100%',
        height: '40px',
      }}
      disabled={!disabled || isLoading}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;
