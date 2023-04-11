import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
  logo: string
}

export const TestimonialsContentStyled = styled.div`
  display: flex;
  padding: 60px 0 120px 0;
  flex-direction: column;
  row-gap: 50px;
  align-items: center;
`

export const LogoContainerStyled = styled.div`
  position: relative;
  display: flex;
  width: 80px;
  height: 80px;
`

export const LogoStyled = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: 100% 100% url(${({ logo }: Omit<IProps, 'theme'>) => logo});
`

export const InfoContainerStyled = styled.div`
  padding: 14px 0;
`

export const TitleStyled = styled.h4`
  font-weight: ${({ theme }: Omit<IProps, 'logo'>) => theme.lightTheme.fontWeight[700]};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }: Omit<IProps, 'logo'>) => theme.lightTheme.colors.black};
`

export const SubtitleStyled = styled.p`
  font-weight: ${({ theme }: Omit<IProps, 'logo'>) => theme.lightTheme.fontWeight[500]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }: Omit<IProps, 'logo'>) => theme.lightTheme.colors.grey};
`
