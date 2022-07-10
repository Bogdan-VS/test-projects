import styled from 'styled-components'

export const StyledThemeBtn = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`

export const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  padding: 20px;
`
export const StyledSwitchBtn = styled.div`
  display: inline-block;
  width: 57px;
  height: 30px;
  border-radius: 19px;
  background: ${({ theme }) =>
    theme.colors.switchBtnPrimary};
  z-index: 0;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  position: relative;
  transition-duration: 300ms;

  &::after {
    content: '';
    height: 24px;
    width: 24px;
    border-radius: 17px;
    background: #fff;
    top: 3px;
    left: ${({ theme }) =>
      theme.isLight ? '3px' : '30px'};
    transition-duration: 300ms;
    position: absolute;
    z-index: 1;
  }
`
