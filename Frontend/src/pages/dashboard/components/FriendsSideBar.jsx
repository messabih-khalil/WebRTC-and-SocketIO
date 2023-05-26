import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import FriendsList from './FriendsList';
import PendingInvitations from './PendingInvitations';
import AddFriendDialog from './AddFriendDialog';

const MainContainer = styled('div')({
  width: '224px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#2f3136',
});

const FriendsSideBar = () => {
  const [isDialogOpen, toggleDialog] = useState(false);

  return (
    <MainContainer>
      <Button
        style={{
          width: '90%',
          height: '40px',
          borderRadius: '5px',
          margin: 0,
          padding: 0,
          marginTop: '10px',
          color: 'white',
          backgroundColor: '#3ba55d',
        }}
        onClick={() => toggleDialog(true)}
      >
        Add Friend
      </Button>
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={() => toggleDialog(false)}
      />
      <FriendsList />
      <PendingInvitations />
    </MainContainer>
  );
};

export default FriendsSideBar;
