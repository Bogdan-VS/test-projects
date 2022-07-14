import styled from 'styled-components'

export const StyledControlBtn = styled.button`
  width: 120px;
  height: 35px;
  display: flex;
  border: none;
  background-color: ${({ theme }) =>
    theme.colors.bgPrimary};
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`
