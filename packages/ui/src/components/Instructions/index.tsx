import React, { FC } from "react";
import styled from "styled-components";

const StyledInstructionsBox = styled.div`
  position: fixed;
  border: 3px solid #000000;
  border-radius: 5px;
  background-color: #fde16d;
  height: 300px;
  width: 400px;
  top: -700px;
  left: 1000px;
  bottom: 0;
  right: 0;
  margin: auto;
`;

const StyledInstructions = styled.div`
  position: fixed;
  padding:0.5em;
  width: 100%;
`;

export const Instructions: FC = () => {
  return (
  <StyledInstructionsBox>
    <StyledInstructions>
      <b>Welcome to Porcugotchi!</b> <br></br>
      How to play:
        <li>Create a new character</li>
        <li>Keep your characters stats high to allow them to grow</li>
        
        <li>Save your progress by clicking the back-button (bottom left) to return to the main menu</li>
    </StyledInstructions>
  </StyledInstructionsBox>);
};