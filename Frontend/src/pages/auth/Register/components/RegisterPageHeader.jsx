import { Typography } from '@mui/material';

export const RegisterPageHeader = () => {
  return (
    <>
      <Typography
        variant="h5"
        align="center"
        sx={{
          color: 'white',
        }}
      >
        Welcom
      </Typography>
      <Typography align="center" sx={{ color: '#b9bbbe' }}>
        Create An Account
      </Typography>
    </>
  );
};
