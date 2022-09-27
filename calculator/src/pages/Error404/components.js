import styled from 'styled-components'

export const StyledError404 = styled.div`
  heigth: 100%;
  display: flex;
  justify-content: ${({ theme }) =>
    theme.jsContent};
  align-items: ${({ theme }) => theme.jsContent};
`

export const StyledWrapper = styled.div``

export const StyledTitle = styled.h2`
  text-align: ${({ theme }) => theme.jsContent};
  font-size: 75px;
  margin: 30px 0;
`

export const StyledSubtitle = styled.p`
  font-size: 20px;
`
