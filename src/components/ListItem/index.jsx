import React from 'react';
import {
  StyledItemContainer, StyledDeleteIcon,
  StyledName, StyledDate
} from './styled';
import { StyledValue } from '../common-styled';
import { format } from 'date-fns';

export default function ({ item, onDescription, onDelete }) {
  const onDeleteHandler = (e, id) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <StyledItemContainer onClick={() => onDescription(item.id)}>
      <StyledDeleteIcon onClick={e => onDeleteHandler(e, item.id)}/>
      <StyledName>{item.name}</StyledName>
      <StyledValue
        value={item.value}
        type={item.type}
      />
      <StyledDate>{format(item.date, 'd MMM yyyy')}</StyledDate>
    </StyledItemContainer>
  );
};