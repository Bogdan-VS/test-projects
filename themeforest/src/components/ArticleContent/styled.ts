import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
}

export const TitleItemStyled = styled.h6`
  max-width: 540px;
  margin: 39px 0 39px 95px;
  padding-left: 34px;
  border-left: 4px solid ${({ theme }: IProps) => theme.lightTheme.colors.primary};

  font-family: ${({ theme }: IProps) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[400]};
  font-size: ${({ theme }: IProps) => theme.lightTheme.fontSize['20px']};
  line-height: ${({ theme }: IProps) => theme.lightTheme.lineHeight['33px']};
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.black};
`

export const SubtitleItemStyled = styled.p`
  max-width: 635px;
  margin-top: 30px;
  font-family: ${({ theme }: IProps) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[400]};
  font-size: ${({ theme }: IProps) => theme.lightTheme.fontSize['16px']};
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.grey};
`

export const LinkItemStyled = styled.a`
  color: ${({ theme }: IProps) => theme.lightTheme.colors.primary};
  text-decoration: underline;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }: IProps) => theme.lightTheme.colors.primery_hover};
  }
`

export const CursiveItemStyled = styled.span`
  font-style: italic;
`

export const BoldItemStyled = styled.span`
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[800]};
`
