import styled from 'styled-components'

export const StyledCalcBtn = styled.button`
  display: flex;
  width: 18%;
  border: none;
  background-color: ${({ theme }) =>
    theme.colors.bgPrimary};
  font-size: 40px;
  -webkit-box-pack: ${({ theme }) =>
    theme.jsContent};
  justify-content: ${({ theme }) =>
    theme.jsContent};
  -webkit-box-align: ${({ theme }) =>
    theme.jsContent};
  align-items: ${({ theme }) => theme.jsContent};
  padding: 5px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 1;
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  transition: 0.3s;

  &:nth-child(1) {
    width: 38%;
  }

  &:nth-child(20) {
    width: 38%;
  }

  &:nth-child(22) {
    width: 38%;
  }

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.bgPrimary};
    color: ${({ theme }) =>
      theme.colors.textPrimary};
  }
`
