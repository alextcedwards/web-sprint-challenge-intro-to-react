// Write your Character component here
// Write your Character component here
import React from "react";
import styled, { keyframes } from "styled-components";

const keyframe = keyframes`
100% {
    opacity: 1;
}
`;

const StyledCharacter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2%;
  color: yellow;
  padding: 20px;
  border: 1px solid yellow;
  opacity: 0;
  animation: ${keyframe} 3s ease-in-out forwards;

  h2 {
    font-size: 3rem;
  }
  span {
    font-size: 2rem;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

export default function Character({ data }) {
  return (
    <StyledCharacter>
      <h2>{data.name}</h2>
      <span>Stats:</span>
      <ul>
        <li>Birth Year: {data.birth_year}</li>
        <li>Height: {data.height}cm</li>
        <li>Mass: {data.mass}cm</li>
        <li>Gender: {data.gender}</li>
      </ul>
    </StyledCharacter>
  );
}
