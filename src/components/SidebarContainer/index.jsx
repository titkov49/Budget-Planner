import React from 'react';
import { 
  SidebarContainer, StyledCloseIcon, 
  BottomContainer, BottomButton
} from './styled';

export default ({ children, onClose, onButtonClick, buttonLabel }) => (
  <SidebarContainer>
    <div>
      <StyledCloseIcon onClick={onClose}/>
      {children}
    </div>
    <BottomContainer>
      <BottomButton onClick={onButtonClick}>{buttonLabel}</BottomButton>
    </BottomContainer>
  </SidebarContainer>
);