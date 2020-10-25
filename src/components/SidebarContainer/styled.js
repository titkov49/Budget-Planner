import styled from 'styled-components';
import Close from '@material-ui/icons/Close';
import {Button} from '../common-styled';

export const SidebarContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
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

export const StyledCloseIcon = styled(Close)`
  color: #EF6F6C;
  display: block !important;
  margin-bottom: 1rem;
`;

export const BottomContainer = styled.div`width: 100%`;

export const BottomButton = styled(Button)`
  width: 75%;
  color: ${({ color }) => color || "#5E6973"};
`;