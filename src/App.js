import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListItem from './components/ListItem';
import Form from './components/Form';
import { Button, SelectButton as FilterButton, ButtonsContainer} from './components/common-styled';
import { initialLst } from './components/constants';
import './App.scss';

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

export default function () {
  const [isFormOpen, setForm] = useState(true);
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
  }, [filterType, initialList]);

  const filterList = type => {
    if (type === "initial") {
      return initialList;
    }
    return initialList.filter(item => item.type === type);
  };

  const reset = () => {
    setFilterType('initial');
  }

  const openForm = () => {
    if (isFormOpen) return;
    setForm(true);
  };

  return (
    <ListStyles>
      {isFormOpen && <Form 
        onClose={() => setForm(false)}
        onSave={setInitialList}
        list={initialList}
      />}
      <InputContainer>
        <ButtonsContainer>
          <Button onClick={openForm}>Create</Button>
          <Button onClick={reset} modType={filterType}>Reset List</Button>
          <FilterButton onClick={e => setFilterType(e.target.value)} value="income" type={filterType}>Only incomes</FilterButton>
          <FilterButton onClick={e => setFilterType(e.target.value)} value="spending" type={filterType}>Only spendings</FilterButton>
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
};
