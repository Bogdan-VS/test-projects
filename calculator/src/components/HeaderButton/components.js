import styled from 'styled-components'

export const StyledHeaderButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: ${({ theme }) =>
    theme.colors.bgSecondary};
  outline: none;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity 0.8;
  }
`
