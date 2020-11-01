/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Input, TextArea, AlertBox } from './styled';
import { ButtonsContainer, SelectButton } from '../common-styled';
import SidebarContainer from '../SidebarContainer';

export default function ({ item, list, onClose, onSave }) {
  const asignProps = () => ({
    id: item?.id || Date.now(),
    name: item?.name || '',
    description: item?.description || '',
    date: item?.date || Date.now(),
    type: item?.type || null,
    value: item?.value || ''
  });

  const [newItem, setItem] = useState(asignProps());
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setItem(asignProps());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  const changeProp = (e, prop) => {
    let obj = {};
    obj[prop] = e.target.value;
    setItem(prev => ({...prev, ...obj}));
  };
  
  const changeDate = date => setItem(prev => ({...prev, date: date}))

  const saveHandler = () => {
    //Validation
    let errorsList = [];
    if (!/.+/.test(newItem.name)) {
      errorsList.push('Name must contain at least one character');
    }
    if (!/^\d+$/.test(newItem.value)) {
      errorsList.push('Value must contain only digits (at least one) that is greater than or equal to zero');
    }
    if (!newItem.type) {
      errorsList.push('Type of item must be chosen');
    }
    if(errorsList.length > 0) {
      setErrors(errorsList);
      return;
    }

    //Save new item or edit existing one if validation completed successfully 
    let newList = [...list];
    if (item) {
      let index = list.findIndex(listItem => item.id === listItem.id);
      newList[index] = newItem;
    } else {
      newList.unshift(newItem);
    }
    onSave(newList);
    onClose();
  };

  return (
    <SidebarContainer
      onClose={onClose}
      onButtonClick={saveHandler}
      buttonLabel="Save"
    >
      {
        errors.length > 0 &&
        <AlertBox errors={errors}/>
      }
      <Input
        type="text"
        placeholder="Enter name"
        value={newItem.name || ''}
        onChange={e => changeProp(e, 'name')}
      />
      <Input
        type="text"
        placeholder="Enter value"
        value={newItem.value}
        onChange={e => changeProp(e, 'value')}
      />
      <TextArea
        cols="4"
        placeholder="Enter description"
        value={newItem.description}
        onChange={e => changeProp(e, 'description')}
      />
      <DatePicker
        selected={newItem.date}
        onChange={date => changeDate(date)}
        customInput={<Input />}
        dateFormat="d MMM yyyy"
      />
      <ButtonsContainer>
        <SelectButton 
          value="income"
          type={newItem.type}
          onClick={e => changeProp(e, 'type')}
        >Income</SelectButton>
        <SelectButton 
          value="spending"
          type={newItem.type}
          onClick={e => changeProp(e, 'type')}
        >Spending</SelectButton>
      </ButtonsContainer>
    </SidebarContainer>
  );
}