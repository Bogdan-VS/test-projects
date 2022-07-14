import styled from 'styled-components'

export const StyledCalcBtn = styled.button`
  display: flex;
  border: none;
  background-color: ${({ theme }) =>
    theme.colors.bgPrimary};
  font-size: 40px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 5px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 1;
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  transition: 0.3s;

  &:nth-child(1) {
    grid-area: fullClear;
  }
  &:nth-child(2) {
    grid-area: seven;
  }
  &:nth-child(3) {
    grid-area: eight;
  }
  &:nth-child(4) {
    grid-area: nine;
  }
  &:nth-child(5) {
    grid-area: multi;
  }
  &:nth-child(6) {
    grid-area: minus;
  }
  &:nth-child(7) {
    grid-area: four;
  }
  &:nth-child(8) {
    grid-area: five;
  }
  &:nth-child(9) {
    grid-area: six;
  }
  &:nth-child(10) {
    grid-area: divide;
  }
  &:nth-child(11) {
    grid-area: plus;
  }
  &:nth-child(12) {
    grid-area: one;
  }
  &:nth-child(13) {
    grid-area: two;
  }
  &:nth-child(14) {
    grid-area: three;
  }
  &:nth-child(15) {
    grid-area: equal;
  }
  &:nth-child(16) {
    grid-area: dott;
  }
  &:nth-child(17) {
    grid-area: openBracket;
  }
  &:nth-child(18) {
    grid-area: zeroo;
  }
  &: nth-child(19) {
    grid-area: closeBracket;
  }
  &: nth-child(20) {
    grid-area: clearr;
  }
  &:nth-child(21) {
    grid-area: percent;
  }

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`
