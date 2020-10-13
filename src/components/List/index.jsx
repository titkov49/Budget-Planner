import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import { initialLst } from '../constants';

const ListStyles = styled.div`
  @media screen and (min-width: 768px) {
    margin: 0 10rem;
  }
  @media screen and (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  margin: 1rem 0;
  text-align: left;
`;

const FilterButton = styled.button`
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
  ${({ value, modType}) => {
    if (modType === value) return `
      background-color: #6ABEA7;
      color: white;
    `;
  }}
`;

export default function () {
  const [initialList, setInitialList] = useState(initialLst)
  const [modifiedList, setList] = useState(initialLst);
  const [filterType, setFilterType] = useState('initial');

  const onDelete = (id) => {
    setInitialList(initialList.filter(item => item.id !== id));
    setList(modifiedList.filter(item => item.id !== id));
  }

  useEffect(() => {
    setList(filterList(filterType));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterType]);

  const filterList = type => {
    if (type === "initial") {
      return initialList;
    }
    return initialList.filter(item => item.type === type);
  };

  const reset = () => {
    setFilterType('initial');
  }

  return (
    <ListStyles>
      <InputContainer>
        <ButtonsContainer>
          <FilterButton onClick={reset} value="reset" modType={filterType}>Reset</FilterButton>
          <FilterButton onClick={e => setFilterType(e.target.value)} value="income" modType={filterType}>Only incomes</FilterButton>
          <FilterButton onClick={e => setFilterType(e.target.value)} value="spending" modType={filterType}>Only spendings</FilterButton>
        </ButtonsContainer>
      </InputContainer>
      {modifiedList.map(item => <ListItem 
        item={item}
        onDelete={onDelete}
        onDescription={() => alert('Description!')}
        key={item.id}
      />)}
    </ListStyles>
  );
}