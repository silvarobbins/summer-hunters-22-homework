import React, { useState } from 'react';
import styled from 'styled-components';

import { X } from '../../assets';

const StyledForm = styled.form`
  position: absolute;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  border: 3px solid#000000;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: #75c17b;
`;

const StyledInput = styled.input`
  width: 140px;
  margin:.25em;
  padding:.5em;
  border: 2px solid #3c4141;
  border-radius: 5px;
`

const StyledButton = styled.button`
  display: flex;
  margin:.25em;
  padding:0.5em;
  width: 125px;
  border: 2px solid #000000;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: #e9eff0;
  cursor: pointer;
`;

export interface IFormProps {
  toggleNewCharacterFormVisible: () => void;
  visible: boolean;
  handleAddCharacter: ({name, description} : any) => void;
};

export const NewCharacterForm: React.FC<IFormProps> = ({
  toggleNewCharacterFormVisible, 
  visible, 
  handleAddCharacter}) => {
  const initialState = {
    name: '',
    description: ''
  };

  const [values, setValues] = useState(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddCharacter(values);
  };

  if (visible) {
    return (
      <StyledForm onSubmit={onSubmit}>
      <button id='closeButton' onClick={toggleNewCharacterFormVisible}><X /></button>
          <StyledInput
              name='name'
              id='name'
              type='name'
              placeholder='Name'
              onChange={onChange}
              required
              />

          <StyledInput
              name='description'
              id='description'
              type='description'
              placeholder='Description'
              onChange={onChange}
              required
              />
          <StyledButton type='submit'>Add Character</StyledButton>
      </StyledForm>
    )    
  } else
  return null
};
