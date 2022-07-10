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
    color: ${({ location, theme }) =>
      location === '/'
        ? `${theme.colors.textPrimary}`
        : `${theme.colors.white}`};

    border-bottom: ${({ location, theme }) =>
      location === '/'
        ? `2px solid ${theme.colors.textPrimary}`
        : `2px solid ${theme.colors.bgPrimary}`};

  }
  &.settings {
    color: ${({ location, theme }) =>
      location === '/settings'
        ? `${theme.colors.textPrimary}`
        : `${theme.colors.white}`};

    border-bottom: ${({ location, theme }) =>
      location === '/settings'
        ? `2px solid ${theme.colors.textPrimary}`
        : `2px solid ${theme.colors.bgPrimary}`};
  }

  &:hover {
    opacity 0.8;
  }
`
