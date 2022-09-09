import styled from 'styled-components'

export const StyledKeypad = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1vw;
  justify-content: ${({ theme }) =>
    theme.jsContent};
  padding: 10px;
`
