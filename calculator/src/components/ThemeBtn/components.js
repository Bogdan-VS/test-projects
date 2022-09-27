import styled from 'styled-components'

export const StyledThemeBtn = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`

export const StyledSelect = styled.select`
  padding: 10px;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.bgPrimary};
  background-color: ${({ theme }) =>
    theme.colors.bgSecondary};
  border: ${({ theme }) =>
    `1px solid ${theme.colors.bgPrimary}`};
  font-size: 30px;
  border-radius: 3px;
  transition: 0.3s;
  cursor: pointer;

  &:focus {
    border: ${({ theme }) =>
      `1px solid ${theme.colors.bgPrimary}`};
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  &:focus-visible {
    border: none;
    outline: none;
  }
`

export const StyledOption = styled.option``
