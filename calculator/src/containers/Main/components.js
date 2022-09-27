import styled from 'styled-components'

export const StyledMain = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  background-color: ${({ theme }) =>
    theme.colors.bgSecondary};
`
