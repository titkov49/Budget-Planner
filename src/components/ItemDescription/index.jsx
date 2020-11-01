/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { format } from 'date-fns';
import SidebarContainer from '../SidebarContainer';
import { StyledValue } from '../common-styled';
import { DescriptionContainer, ItemDescription } from './styled';

export default ({ item, onEdit, onClose }) => (
  <SidebarContainer
    onClose={onClose}
    onButtonClick={onEdit}
    buttonLabel={"Edit"}
  >
    <h2>{item.name}</h2>
    <DescriptionContainer>
      <StyledValue
          value={item.value}
          type={item.type}
          size="1.75rem"
      />
      <ItemDescription>{item.description}</ItemDescription>
      <ItemDescription>{format(item.date, 'd MMM yyyy')}</ItemDescription>
    </DescriptionContainer> 
  </SidebarContainer>
);