import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: inherit;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
`

export const StyledWrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: ${({ theme }) => theme.jsContent};
`

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const StyledButtonContainer = styled.div`
  display: flex;
  column-gap: 15px;

  a {
    color: ${({ theme }) => theme.colors.white};
  }

  .active {
    color: ${({ theme }) => theme.colors.textPrimary};
    border-bottom: ${({ theme }) =>
      `2px solid ${theme.colors.textPrimary}`};
  }
`
