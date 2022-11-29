import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
  disabled: boolean
}

export const ControlsWrapperStyled = styled.div`
  display: flex;
  column-gap: 15px;
`

export const ButtonStyled = styled.button`
  padding: 15px 40px;
  gap: 10px;
  width: 110px;
  height: 60px;
  background: ${({ theme }: IProps) => theme.lightTheme.colors.tertiary};
  border: none;
  border-radius: 20px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: ${({ theme, disabled }: IProps) => !disabled && theme.lightTheme.colors.primary};

    li a svg path {
      fill: ${({ theme, disabled }: IProps) => !disabled && theme.lightTheme.colors.white};
    }
  }
`
