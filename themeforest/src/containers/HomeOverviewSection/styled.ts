import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
  bg: string
}

export const OverviewWrapperStyled = styled.section`
  background-color: ${({ theme }: Omit<IProps, 'bg'>) => theme.lightTheme.colors.white};
`

export const OverviewContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  align-items: center;
  padding: 120px 0 80px 0;
`

export const TitleStyled = styled.h3`
  font-weight: ${({ theme }: Omit<IProps, 'bg'>) => theme.lightTheme.fontWeight[800]};
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;
  color: ${({ theme }: Omit<IProps, 'bg'>) => theme.lightTheme.colors.black};
`

export const SubtitleContainerStyled = styled.div`
  display: flex;
  column-gap: 30px;
`

export const SubtitleContainerLeftStyled = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
`

export const SubtitleItemContainerStyled = styled.div``

export const LeftTitleStyled = styled.h4`
  font-family: ${({ theme }: Omit<IProps, 'bg'>) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: Omit<IProps, 'bg'>) => theme.lightTheme.fontWeight[800]};
  font-size: 50px;
  line-height: 66px;
  letter-spacing: -0.025em;
  color: ${({ theme }: Omit<IProps, 'bg'>) => theme.lightTheme.colors.primary};
`

export const LeftSubtitleStyled = styled.p`
  font-family: ${({ theme }: Omit<IProps, 'bg'>) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: Omit<IProps, 'bg'>) => theme.lightTheme.fontWeight[400]};
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }: Omit<IProps, 'bg'>) => theme.lightTheme.colors.grey};
`

export const LogoContainerStyled = styled.ul`
  display: flex;
`

export const LogoItem = styled.li`
  width: 185px;
  height: 132px;
  list-style: none;
  background: top 0 left 0 / 100% 100% url(${({ bg }: Omit<IProps, 'theme'>) => bg});
`
