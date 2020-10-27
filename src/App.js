import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListItem from './components/ListItem';
import Form from './components/Form';
import ItemDescription from './components/ItemDescription';
import { Button, SelectButton as FilterButton, ButtonsContainer} from './components/common-styled';
import { initialLst } from './components/constants';
import './App.scss';

const ListStyles = styled.div`
  @media screen and (min-width: 900px) {
    margin: 0 10rem;
  }
  @media screen and (max-width: 900px) {
    margin: 0 1rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function () {
  const [isFormOpen, setForm] = useState(false);
  const [isDescriptionOpen, setDescription] = useState(false);
  const [listItem, setListItem] = useState(null);
  const [initialList, setInitialList] = useState([])
  const [modifiedList, setList] = useState(initialLst);
  const [filterType, setFilterType] = useState('initial');

  // Download list from local storage
  useEffect(() => {
    if (localStorage.getItem('list')) {
      setInitialList(JSON.parse(localStorage.getItem('list')));
    }
  }, []);

  // Creating and updating localStorage list
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(initialList));
  }, [initialList]);

  //Updating list based on filtering properties
  useEffect(() => {
    setList(filterList(filterType));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterType, initialList]);

  const onDelete = (id) => {
    setInitialList(initialList.filter(item => item.id !== id));
    setList(modifiedList.filter(item => item.id !== id));
  }

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
      {
        isFormOpen && <Form 
          onClose={() => {
            setForm(false);
            setListItem(null);
          }}
          onSave={setInitialList}
          list={initialList}
          item={listItem}
        />
      }
      {
        listItem && isDescriptionOpen && <ItemDescription
          item={listItem}
          onEdit={() => {
            setForm(true);
            setDescription(false)
          }}
          onClose={() => {
            setListItem(null);
            setDescription(false);
          }}
        />
      }
      <InputContainer>
        <ButtonsContainer>
          <Button onClick={openForm}>Create</Button>
          <Button onClick={reset} modType={filterType}>Reset List</Button>
          <FilterButton onClick={e => setFilterType(e.target.value)} value="income" type={filterType}>Only incomes</FilterButton>
          <FilterButton onClick={e => setFilterType(e.target.value)} value="spending" type={filterType}>Only spendings</FilterButton>
        </ButtonsContainer>
      </InputContainer>
      {
        modifiedList.map(item => <ListItem 
          item={item}
          onDelete={onDelete}
          onDescription={() => {
            setListItem(item);
            setDescription(true);
          }}
          key={item.id}
        />)
      }
    </ListStyles>
  );
};
