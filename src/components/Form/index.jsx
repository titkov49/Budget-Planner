import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Input, TextArea } from './styled';
import { ButtonsContainer, SelectButton } from '../common-styled';
import SidebarContainer from '../SidebarContainer';

export default function ({ item, list, onClose, onSave }) {
  const [newItem, setItem] = useState({
    name: item?.name || '',
    description: item?.description || '',
    date: item?.date || Date.now(),
    type: item?.type || null,
    value: item?.value || null
  });

  const changeProp = (e, prop) => {
    let obj = {};
    obj[prop] = e.target.value;
    setItem(prev => ({...prev, ...obj}));
  };
  
  const changeDate = date => setItem(prev => ({...prev, date: date}))

  const saveHandler = () => {
    let newList = [...list];
    if (item) {
      let index = newList.findIndex(item);
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
      <Input
        type="text"
        placeholder="Enter name"
        value={newItem.name}
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