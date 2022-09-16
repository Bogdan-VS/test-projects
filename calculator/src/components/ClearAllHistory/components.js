import styled from 'styled-components'

export const StyledClearAllHistory = styled.button`
  width: 120px;
  height: 50px;
  display: flex;
  margin: 20px;
  border: none;
  background-color: ${({ theme }) =>
    theme.colors.bgPrimary};
  -webkit-box-pack: ${({ theme }) =>
    theme.jsContent};
  justify-content: ${({ theme }) =>
    theme.jsContent};
  -webkit-box-align: ${({ theme }) =>
    theme.jsContent};
  align-items: ${({ theme }) => theme.jsContent};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.bgPrimary};
    color: ${({ theme }) =>
      theme.colors.textPrimary};
  }
`
