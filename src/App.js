/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { compareAsc } from 'date-fns';
import ListItem from './components/ListItem';
import Form from './components/Form';
import ItemDescription from './components/ItemDescription';
import { Button, SelectButton as FilterButton, ButtonsContainer} from './components/common-styled';
import { options } from './components/constants';
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
  const [modifiedList, setList] = useState(initialList);
  const [filterType, setFilterType] = useState('initial');
  const [sortingType, setSortingType] = useState(options[0]);

  console.log(sortingType);
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
    setList(sortList(filterList()));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterType, sortingType, initialList]);

  const onDelete = (id) => {
    setInitialList(initialList.filter(item => item.id !== id));
    setList(modifiedList.filter(item => item.id !== id));
  };

  const filterList = () => {
    if (filterType === "initial") {
      return [...initialList];
    }
    return initialList.filter(item => item.type === filterType);
  };

  const reset = () => {
    setFilterType('initial');
    setSortingType(options[0]);
  };

  const openForm = () => {
    if (isFormOpen) return;
    setForm(true);
  };

  const sortList = (lst) => {
    switch (sortingType) {
      case options[1]:
        console.log("By value");
        return lst.sort((a,b) => b.value - a.value);
      case options[2]:
        console.log("By name");
        return lst.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : b.name.toLowerCase() > a.name.toLowerCase() ? -1 : 0);
      default:
        console.log("By date");
        return lst.sort((a, b) => compareAsc(b.date, a.date));
    }
  }

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
        <Select
          value={sortingType}
          onChange={setSortingType}
          options={options}
        />
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
