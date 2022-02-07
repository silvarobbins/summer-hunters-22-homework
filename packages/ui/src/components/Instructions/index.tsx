import React, { FC } from "react";
import styled from "styled-components";

const StyledInstructionsBox = styled.div`
  position: fixed;
  border: 3px solid #000000;
  border-radius: 5px;
  background-color: #fde16d;
  height: 350px;
  width: 500px;
  top: -600px;
  left: 1000px;
  bottom: 0;
  right: 0;
  padding:0.5em;
  margin: auto;
`;

const StyledInstructions = styled.div`
  position: absolute;
  padding:0.5em;
  width: 80%;
  left: 20px
`;

export const Instructions: FC = () => {
  return (
  <StyledInstructionsBox>
      <b>Welcome to Porcugotchi!</b> <br></br>
      How to play:
    <StyledInstructions>
      <ul>
        <li>Create as many characters as you want</li>
        <li>Keep your characters stats high with the eat, play and sleep actions to allow them to age</li>
        <ul className="sub">
          <li>More specifically: energy, happiness and health should be over 50, while hunger should be between -10 and </li>
          <li>At age 5, your character will become an adult!</li>
        </ul>
        <li>Save your progress by clicking the back-button (bottom left) to return to the main menu</li>
        <li>Have fun!</li>
      </ul>
    </StyledInstructions>
  </StyledInstructionsBox>);
};