import React from 'react';
import { styled } from '@mui/system';

const Wrapper = styled('div')({
  color: '#b9bbbe',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
});

const Label = styled('p')({
  color: '#b9bbbe',
  textTransform: 'uppercase',
  fontWeight: '600',
  fontSize: '16px',
});

const Input = styled('input')({
  flexGrow: 1,
  height: '40px',
  border: '1px solid black',
  borderRadius: '5px',
  color: '#dcddde',
  backgroundColor: '#35393f',
  fontSize: '16px',
  padding: '0 5px',
  margin: '1rem 0',
});

const InputWithLabel = ({ value, setValue, label, type, placeholder }) => {
  return (
    <>
      <Wrapper>
        <Label>{label}</Label>
        <Input
          type={type}
          placeholder={placeholder}
          onChange={e => setValue(e.target.value)}
          value={value}
        ></Input>
      </Wrapper>
    </>
  );
};

export default InputWithLabel;
