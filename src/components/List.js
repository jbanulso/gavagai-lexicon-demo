import React, { Fragment, useRef } from 'react';
import { useTransition, useChain } from 'react-spring';
import styled from 'styled-components';

import Item from './Item';

const StyledList = styled.ul`
  width: 100%;
  max-width: 650px;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const List = ({ children, words, ...props }) => {
  console.log(words.length);
  const transRef = useRef();
  const transitions = useTransition(words, null, {
    ref: transRef,
    unique: true,
    trail: 300 / words.length,
    from: { opacity: 0 },
    enter: { opacity: 1 }
  });

  useChain([transRef]);

  return (
    <StyledList>
      {transitions.map(({ item, props: style, key }) => {
        console.log(item);
        return (
          <Item key={key} style={style} {...props}>
            {item}
          </Item>
        );
      })}
    </StyledList>
  );
};

export default List;
