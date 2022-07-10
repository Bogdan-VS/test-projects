import styled from 'styled-components'

export const HistoryStyled = styled.div`
  height: 100%;
  padding: 20px;
  border-left: 2px solid
    ${({ theme }) => theme.colors.bgPrimary};
  overflow-y: auto;
`

export const TitleStyled = styled.h3`
  list-style: none;
  padding: 5px;
  overflow-x: auto;
`

export const ContentStyled = styled.ul``

export const ContentItemStyled = styled.li`
  list-style: none;
  padding: 5px;
`
