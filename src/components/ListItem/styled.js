import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';

export const StyledItem = styled.div`
  border-bottom: 1px solid #5E6973;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
  color: #EF6F6C;
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