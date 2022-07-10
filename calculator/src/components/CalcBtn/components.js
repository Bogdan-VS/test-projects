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
  color: ${({ theme }) => theme.colors.digitBtn};
  opacity: 1;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.bgSecondary};
  }
`
