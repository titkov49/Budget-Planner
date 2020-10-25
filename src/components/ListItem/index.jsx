import React from 'react';
import {
  StyledItem, StyledDeleteIcon, StyledName
} from './styled';
import { StyledValue } from '../common-styled';
import { format } from 'date-fns';

export default function ({ item, onDescription, onDelete }) {
  const onDeleteHandler = (e, id) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <StyledItem onClick={() => onDescription(item.id)}>
      <StyledDeleteIcon onClick={e => onDeleteHandler(e, item.id)}/>
      <StyledName>{item.name}</StyledName>
      <StyledValue
        value={item.value}
        type={item.type}
      />
      <div>{format(item.date, 'd MMM yyyy')}</div>
    </StyledItem>
  );
};