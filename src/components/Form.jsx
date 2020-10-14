import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Close from '@material-ui/icons/Close';
import {Button, SelectButton, ButtonsContainer} from './styled';

const FormContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: white;
  border: 1px solid #000;

  top:0;
  right:0;
  height: 100%;
  width: 25%;
  @media screen and (max-width: 768px) {
    top: 0;
    left: 0;
    width: 100%;
    border: none
  }
`;

const StyledCloseIcon = styled(Close)`
  color: #EF6F6C;
  display: block !important;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 75%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem; 
  width: 75%;
  height: 15%;
  padding: 0.5rem;
  resize: none;
`;

const BottomContainer = styled.div`width: 100%`;

const BottomButton = styled(Button)`
  width: 75%;
  color: ${({ color }) => color || "#5E6973"};
`;

export default function ({ item, list, onClose, onSave }) {
  console.log("Form", list);
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
    <FormContainer>
      <div>
        <StyledCloseIcon onClick={onClose}/>
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
      </div>
      <BottomContainer>
        <BottomButton>Edit</BottomButton>
        <BottomButton color="#6ABEA7" onClick={saveHandler}>Save</BottomButton>
      </BottomContainer>
    </FormContainer>
  );
}