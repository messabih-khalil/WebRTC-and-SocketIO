import React from 'react';
import { styled } from '@mui/system';
import SideBar from './components/SideBar';
import FriendsSideBar from './components/FriendsSideBar';
import Messenger from './components/Messenger';
import AppBar from './components/AppBar';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});

const DashboardPage = () => {
  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

export default DashboardPage;
