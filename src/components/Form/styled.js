import React from 'react';
import styled from 'styled-components';

export const Input = styled.input`
  width: 75%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const TextArea = styled.textarea`
  margin-bottom: 1rem; 
  width: 75%;
  height: 15%;
  padding: 0.5rem;
  resize: none;
`;

const AlertContainer = styled.div`
  box-sizing: border-box;
  border: 1px solid #EF6F6C;
  margin: 0 auto 1rem auto;
  background-color: #F7A6A5;
  color: #EF6F6C;
  width: 80%;

  h4 {
    padding: 0 1rem;
  }

  ul {
    padding: 0 1.5rem;
    font-size: 1rem;
    text-align: left;
  }
`;

export const AlertBox = ({ errors }) => (
  <AlertContainer>
    <h4>Item should match these requirements</h4>
    <ul>
      {errors.map(item => <li>{item}</li>)}
    </ul>
  </AlertContainer>
);