import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
}

export const IconStyled = styled.li`
  list-style: none;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`

export const IconLinkStyled = styled.a`
  font-family: ${({ theme }: IProps) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[400]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-decoration: none;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.grey};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }: IProps) => theme.lightTheme.colors.white};
  }
`
