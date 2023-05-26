import {
  Button,
  Dialog,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import InputWithLabel from '../../../shared/components/InputWithLabel';

const AddFriendDialog = ({ isDialogOpen, closeDialogHandler, _ }) => {
  const [mail, setMail] = useState('');

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail('');
  };
  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <div style={{ padding: '1rem' }}>
          <DialogContentText>
            Enter e-mail address of friend which you would like to invite
          </DialogContentText>
          <InputWithLabel
            value={mail}
            setValue={setMail}
            type="email"
            placeholder="exemple@gmail.com"
          ></InputWithLabel>

          <Button
            style={{
              marginBottom: '10px',
              backgroundColor: '#3ba55d',
              color: 'white',
              width: '100%',
            }}
          >
            Add Friend
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default AddFriendDialog;
