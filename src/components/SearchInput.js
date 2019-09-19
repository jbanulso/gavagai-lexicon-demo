import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input.attrs({ type: 'text' })`
  display: block;
  width: 100%;
  padding: 10px 16px;
  font-size: 1em;
  color: #4a4a4a;
  border: 0;
  border-radius: 0;
  outline: 0;
  z-index: 0;
  transition: box-shadow ease-in 100ms;

  &::placeholder {
    color: #8a8a8a;
  }

  &:focus {
    box-shadow: 0 0 4px 2px #00a7dc, inset 0 0 2px 1px #00a7dc;
  }

  @media (min-width: 415px) {
    padding: 10px 32px;
  }
`;

const SearchInput = props => {
  return <StyledInput {...props} />;
};

export default SearchInput;
