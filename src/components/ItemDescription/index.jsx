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
    <h1>{item.name}</h1>
    <DescriptionContainer>
      <StyledValue
          value={item.value}
          type={item.type}
          size="1.75rem"
      />
      <ItemDescription textAlign="left">{item.description}</ItemDescription>
      <ItemDescription>{format(item.date, 'd MMM yyyy')}</ItemDescription>
    </DescriptionContainer> 
  </SidebarContainer>
);