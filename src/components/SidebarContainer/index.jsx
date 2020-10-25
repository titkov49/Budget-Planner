import React from 'react';
import { 
  SidebarContainer, StyledCloseIcon, 
  BottomContainer, BottomButton,
  ChildrenContainer
} from './styled';

export default ({ children, onClose, onButtonClick, buttonLabel }) => (
  <SidebarContainer>
    <ChildrenContainer>
      <StyledCloseIcon onClick={onClose}/>
      {children}
    </ChildrenContainer>
    <BottomContainer>
      <BottomButton onClick={onButtonClick}>{buttonLabel}</BottomButton>
    </BottomContainer>
  </SidebarContainer>
);