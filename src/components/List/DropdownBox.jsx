import React from 'react';
import styled from 'styled-components';

const SelectBox = styled.select`
  padding: 0.75rem;
  font-weight: 600;
  outline: none;
  border: 1px solid white;
  background-color: #E6E6E6;
  transition: all .3s;
`;

const OptionBox = styled.option`
  padding: 0.75rem;
  font-weight: 600;
  outline: none;
  border: 1px solid white;
  background-color: #E6E6E6;
  transition: all .3s;
`;


export default function ({ options }) {

  return (
    <SelectBox>
      {options.map(item => <OptionBox value={item} key={item}>{item}</OptionBox>)}
    </SelectBox>
  )
}