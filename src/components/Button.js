import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5em 1em;
  border: 0;
  border-radius: 0 12px 12px 0;
  background-color: #33ceff;
  font-weight: 700;
  font-size: 0.8em;
  outline: 0;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #009bcc;
  }

  @media (min-width: 415px) {
    font-size: 1.1em;
  }
`;

export default Button;
