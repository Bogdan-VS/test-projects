import styled from 'styled-components'

export const StyledHeaderButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  transition: 0.3s;
  cursor: pointer;
  font-size: 20px;
  padding-bottom: 3px;

  &.home {
    border-bottom: ${({ location, theme }) =>
      location === '/'
        ? `2px solid ${theme.colors.black}`
        : `2px solid ${theme.colors.bgPrimary}`};

  }
  &.settings {
    border-bottom: ${({ location, theme }) =>
      location === '/settings'
        ? `2px solid ${theme.colors.black}`
        : `2px solid ${theme.colors.bgPrimary}`};
  }

  &:hover {
    opacity 0.8;
  }
`
