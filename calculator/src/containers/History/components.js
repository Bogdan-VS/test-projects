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
  padding: 20px;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const ContentStyled = styled.ul``

export const ContentItemStyled = styled.li`
  list-style: none;
  padding: 5px;
  overflow-x: auto;
  color: ${({ theme }) => theme.colors.white};

  &.expCollection {
    color: ${({ theme }) => theme.colors.black};
  }
`

export const StyledFullHistory = styled.ul`
  position: absolute;
  top: 120px;
  left: ${({ isOpen }) => (isOpen ? '20px' : '-100%')};
  width: 85%;
  height: 75%;
  padding: 15px;
  background-color: ${({ theme }) =>
    theme.colors.bgPrimary};
  z-index: 1;
  overflow: auto;
  transition: 0.3s;
  box-shadow: ${({ theme }) => theme.boxShadow};
`
