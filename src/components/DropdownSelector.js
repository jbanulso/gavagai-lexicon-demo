import React from 'react';
import ReactSelect, { components } from 'react-select';
import styled, { css } from 'styled-components';

const DropdownIndicator = styled(components.DropdownIndicator)`
  && {
    padding: 18px 10px;
    min-height: 4.3em;
    height: 4.3em;

    @media (min-width: 415px) {
      padding-top: 22px;
      min-height: 4em;
      height: 4em;
    }
  }
`;

const StyledReactSelect = styled(ReactSelect)`
  && {
    color: #4a4a4a;
    width: 220px;
    font-size: 0.8em;

    @media (min-width: 415px) {
      font-size: 1em;
    }
  }
`;

const Control = styled(components.Control)`
  && {
    cursor: pointer;
    border-top: 0;
    border-left: 0;
    border-bottom: 0;
    border-radius: 12px 0 0 12px;
    transition: box-shadow ease-in 100ms;
    outline: 0;
    border-color: #cccccc !important;
    box-shadow: none;

    ${({ isFocused }) =>
      isFocused &&
      css`
        z-index: 1;
        border-right: none;
        box-shadow: 0 0 4px 2px #00a7dc, inset 0 0 2px 1px #00a7dc;
      `}
  }
`;

const ValueContainer = styled(components.ValueContainer)`
  && {
    padding: 0 0 0 1em;

    @media (min-width: 415px) {
      padding: 0 0 0 1.1em;
    }

    & div {
      margin: 0;
    }
  }
`;

const Placeholder = styled(components.Placeholder)`
  && {
    margin: 0;
    color: #8a8a8a;
  }
`;

const MenuList = styled(components.MenuList)`
  && {
    padding: 0;
  }
`;

const SingleValue = styled(components.SingleValue)`
  && {
    color: inherit;
    line-height: initial;
  }
`;

const IndicatorSeparator = () => null;

const Menu = styled(components.Menu)`
  && {
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    padding: 10px 0;
    background-color: white;
  }
`;

const Option = styled(components.Option)`
  && {
    color: inherit;
    padding: 10px 0 10px 1em;

    @media (min-width: 415px) {
      padding: 10px 0 10px 1.1em;
    }
    background-color: ${({ isFocused, isActive }) =>
      isFocused || (isFocused && isActive) ? '#33ceff' : 'white'};
    color: ${({ isFocused, isActive }) =>
      isFocused || (isFocused && isActive) ? 'white' : '#4a4a4a'};

    &:active {
      background-color: #33ceff;
    }
  }
`;

const DropdownSelector = props => {
  return (
    <StyledReactSelect
      {...props}
      components={{
        Control,
        Option,
        DropdownIndicator,
        IndicatorSeparator,
        ValueContainer,
        Placeholder,
        SingleValue,
        MenuList,
        Menu
      }}
    />
  );
};

export default DropdownSelector;
