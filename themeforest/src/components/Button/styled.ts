import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
  width: string
  height: string
}

export const ButtonStyled = styled.button`
  width: ${({ width }: IProps) => width}px;
  height: ${({ height }: IProps) => height}px;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.white};
  background: ${({ theme }: IProps) => theme.lightTheme.colors.primary};
  box-shadow: ${({ theme }: IProps) => theme.lightTheme.shadows.shadow_button};
  border: none;
  border-radius: 6px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }: IProps) => theme.lightTheme.colors.primery_hover};
  }
`
