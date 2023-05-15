import { Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const RedirectInlineLink = ({ text, redirectLink, redirectText }) => {
  return (
    <Typography
      sx={{ color: '#72767d', marginTop: '1rem' }}
      variant="subtitle2"
    >
      {text}{' '}
      <NavLink
        to={redirectLink}
        style={{
          color: 'green',
          fontWeight: 500,
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        {' '}
        {redirectText}
      </NavLink>
    </Typography>
  );
};

export default RedirectInlineLink;
