import { IThemes } from '@/theme/interfaces'
import styled from 'styled-components'

interface IProps {
  theme: IThemes
  width: string
  fontSize: string
}

export const SubtitleStyled = styled.p`
  max-width: ${({ width }: IProps) => width}px;
  font-family: ${({ theme }: IProps) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[400]};
  font-size: ${({ fontSize }: IProps) => fontSize}px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.grey};
`
