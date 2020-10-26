import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';

export const StyledItemContainer = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #5E6973;
  border-radius: 5px;
  box-shadow: 0 5px 10px -7px #000;
  display: grid;
  grid-template-columns: 2fr 3fr 3fr 2fr;
  cursor: pointer;
  text-align: left;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 4fr 2fr 3fr;
    padding: 0 1rem;
  }
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
  margin: auto 0;
  color: #EF6F6C;
  border-radius: 5px;
  &:hover {
    box-shadow: 1px 1px 5px #EF6F6C;
  }
`;

export const StyledName = styled.p`
  margin: auto 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 20ch;
  font-weight: 500;
  @media screen and (max-width: 900px) {
    max-width: 15ch;
    margin-right: 1rem;
  }
`;

export const StyledDate = styled(StyledName)`
  text-align: right;
  font-weight: 400;
`