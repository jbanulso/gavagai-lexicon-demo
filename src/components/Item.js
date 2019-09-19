import { animated } from 'react-spring';
import styled from 'styled-components';

const Item = styled(animated.li)`
  list-style: none;
  margin: 0 6px 10px;
  padding: 0.8em 1.1em;
  border-radius: 4px;
  background-color: #2c2d32;
  font-weight: 700;
  will-change: opacity;
`;

export default Item;
