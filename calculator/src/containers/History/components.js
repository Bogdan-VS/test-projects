import styled from 'styled-components'

export const HistoryStyled = styled.div`
  position: relative;
  height: 100%;
  padding: 20px;
  border-left: 2px solid
    ${({ theme }) => theme.colors.bgPrimary};
  overflow-y: auto;
`

export const TitleStyled = styled.h3`
  list-style: none;
  padding: 5px;
`

export const ContentStyled = styled.ul``

export const ContentItemStyled = styled.li`
  list-style: none;
  padding: 5px;
  overflow-x: auto;
`

export const StyledFullHistory = styled.ul`
  position: absolute;
  top: 70px;
  left: ${({ isOpen }) => (isOpen ? '20px' : '-100%')};
  width: 84%;
  height: 85%;
  padding: 15px;
  background-color: #607d8b;
  z-index: 1;
  overflow: auto;
  transition: 0.3s;
`
