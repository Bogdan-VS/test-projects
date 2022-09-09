import styled from 'styled-components'

export const StyledErrorBoundary = styled.div`
  width: 100%;
  height: 100%;
`

export const StyledTitle = styled.h2`
  text-align: ${({ theme }) => theme.jsContent};
  padding-top: 30px;
  color: ${({ theme }) => theme.colors.error};
`
