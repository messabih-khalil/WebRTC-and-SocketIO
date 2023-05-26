import { Button, styled } from '@mui/material';
import React from 'react';
import GroupsIcon from '@mui/icons-material/Groups';

const MainContainer = styled('div')({
  width: '72px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#202225',
});

const SideBar = () => {
  return (
    <MainContainer>
      <Button
        style={{
          width: '48px',
          height: '55px',
          borderRadius: '16px',
          margin: 0,
          padding: 0,
          marginTop: '10px',
          color: 'white',
          backgroundColor: '#5865f2',
        }}
      >
        <GroupsIcon />
      </Button>
    </MainContainer>
  );
};

export default SideBar;
