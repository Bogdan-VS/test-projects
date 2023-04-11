import styled from 'styled-components'
import { IPropsIcon, IPropsTitle } from './interfaces'

export const SvgStyled = styled.svg``

export const PathStyled = styled.path`
  fill: ${({ disabled, colorDisabled, color }: IPropsIcon) => (disabled ? colorDisabled : color)};
  transition: 0.3s;

  &:hover {
    fill: ${({ colorHover, disabled }: IPropsIcon) => !disabled && colorHover};
  }
`

export const TitleH5Styled = styled.h5`
  font-weight: ${({ theme }: IPropsTitle) => theme.lightTheme.fontWeight[700]};
  font-size: ${({ theme }: IPropsTitle) => theme.lightTheme.fontSize['16px']};
  line-height: ${({ theme }: IPropsTitle) => theme.lightTheme.lineHeight['24px']};
  letter-spacing: -0.015em;
  color: ${({ theme }: IPropsTitle) => theme.lightTheme.colors.black};
`

export const TitleH4Styled = styled.h4`
  font-weight: ${({ theme }: IPropsTitle) => theme.lightTheme.fontWeight[700]};
  font-size: ${({ theme }: IPropsTitle) => theme.lightTheme.fontSize['22px']};
  line-height: ${({ theme }: IPropsTitle) => theme.lightTheme.lineHeight['33px']};
  letter-spacing: -0.015em;
  color: ${({ theme }: IPropsTitle) => theme.lightTheme.colors.black};
`

export const TitleH3Styled = styled.h3`
  font-weight: ${({ theme }: IPropsTitle) => theme.lightTheme.fontWeight[800]};
  font-size: ${({ theme }: IPropsTitle) => theme.lightTheme.fontSize['38px']};
  line-height: ${({ theme }: IPropsTitle) => theme.lightTheme.lineHeight['56px']};
  letter-spacing: -0.015em;
  color: ${({ theme }: IPropsTitle) => theme.lightTheme.colors.black};
`

export const TitleH2Styled = styled.h2`
  font-weight: ${({ theme }: IPropsTitle) => theme.lightTheme.fontWeight[800]};
  font-size: ${({ theme }: IPropsTitle) => theme.lightTheme.fontSize['46px']};
  line-height: ${({ theme }: IPropsTitle) => theme.lightTheme.lineHeight['60px']};
  letter-spacing: -0.015em;
  color: ${({ theme }: IPropsTitle) => theme.lightTheme.colors.black};
`
