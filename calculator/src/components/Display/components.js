import styled from 'styled-components'

export const StyledWrapperDisplay = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid
    ${({ theme }) => theme.colors.bgPrimary};
`

export const StyledDisplay = styled.div`
  width: 100%;
  padding: 10px;
  text-align: end;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.textPrimary};
  box-shadow: ${({ theme }) => theme.boxShadow};
`
