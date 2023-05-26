import React from 'react';

import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const Maincontainer = styled('div')({
  flexGrow: 3,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto',
});

const FriendsList = () => {
  return (
    <Maincontainer>
      <Typography
        sx={{
          textTranform: 'uppercase',
          color: '#8e9297',
          fontSize: '14px',
          marginTop: '10px',
        }}
      >
        Private Message
      </Typography>
    </Maincontainer>
  );
};

export default FriendsList;
