import styled from 'styled-components';

export const InputField = styled.input`
  padding: 5px;
  margin-left: 10px;
  border-radius: 10px;
  border: 1px solid black;
  outline: none;
  width: 200px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  font-size: medium;
  color: #1651b8;
  transition: all 300ms ease;

  :hover,
  :focus {
    border-color: gray;
    transition: all 300ms ease;
  }
`;

export const Lable = styled.label`

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: start;
  color: #525355;
  font-style: oblique 90deg;
  font-weight: bold;
  font-size: 18px;
  margin: 10px;
`;
