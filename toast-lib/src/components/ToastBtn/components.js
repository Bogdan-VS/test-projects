import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: ${({ color }) => color};
  width: 65px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.7;
  color: #fff;

  &:hover {
    opacity: 1;
  }
`
