import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  width: 75%;
  margin: auto;
  p {
    margin: 1rem 0;
  }
`;

export const ItemDescription = styled.p`
  margin: auto;
  text-align: ${({ textAlign }) => textAlign || 'center'};
  font-size: 1rem;
  overflow-wrap: break-word;
`;