import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  background-color: #E6E6E6;
  padding: 0.75rem;
  font-weight: 600;
  margin-right: 1rem;
  outline: none;
  border: 1px solid white;
  border-radius: 10px;
  transition: all .3s;

  &:hover {
    border: 1px solid #6ABEA7;
    box-shadow: 1px 1px 5px #6ABEA7;
  }

  &:active {
    border: 1px solid white;
    background-color: #6ABEA7;
    color: white;
  }
`;

export const SelectButton = styled(Button)`
  ${({ value, type}) => {
    if (type === value) return `
      background-color: #6ABEA7;
      color: white;
    `;
  }}
`;

export const ButtonsContainer = styled.div`
  margin: 1rem 0;
`;

const Value = styled.div`
  @media screen and (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    div {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: ${({ type }) => type === "income" ? "#6ABEA7" : "#EF6F6C"};
      margin-right: 0.5rem;
    }
    p {
      font-size: ${({size}) => size || "1.25rem"};
    }
  }
  @media screen and (max-width: 900px) {
    p {
      background-color: ${({ type }) => type === "income" ? "#6ABEA7" : "#EF6F6C"};
      padding: 0.5rem;
      border-radius: 10px;
      text-align: center;
    }
  }
`;

export const StyledValue = ({ value, type, size }) => (
  <Value type={type} size={size}>
    <div></div>
    <p>{value}</p>
  </Value>
);