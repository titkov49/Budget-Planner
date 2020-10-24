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