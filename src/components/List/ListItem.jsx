import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import { format } from 'date-fns';

const ItemStyles = styled.div`
  border-bottom: 1px solid #5E6973;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  color: #EF6F6C;
`;

const NameStyles = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 20ch;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    max-width: 15ch;
  }
`;

const ValueStyles = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    div {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: ${({ type }) => type === "income" ? "#6ABEA7" : "#EF6F6C"};
      margin-right: 0.5rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
  @media screen and (max-width: 768px) {
    p {
      background-color: ${({ type }) => type === "income" ? "#6ABEA7" : "#EF6F6C"};
      padding: 0.5rem;
      border-radius: 10px;
    }
  }
`;

export default function ({ item, onDescription, onDelete }) {
  const onDeleteHandler = (e, id) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <ItemStyles onClick={() => onDescription(item.id)}>
      <StyledDeleteIcon onClick={e => onDeleteHandler(e, item.id)}/>
      <NameStyles>{item.name}</NameStyles>
      <ValueStyles type={item.type}>
        <div></div>
        <p>{item.value}</p>
      </ValueStyles>
      <div>{format(item.date, 'd MMM yyyy')}</div>
    </ItemStyles>
  );
};