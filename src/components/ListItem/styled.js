import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';

export const StyledItem = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid #5E6973;
  border-radius: 5px;
  box-shadow: 0 5px 10px -7px #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
  color: #EF6F6C;
  border-radius: 5px;
  &:hover {
    box-shadow: 1px 1px 5px #EF6F6C;
  }
`;

export const StyledName = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 20ch;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    max-width: 15ch;
  }
`;