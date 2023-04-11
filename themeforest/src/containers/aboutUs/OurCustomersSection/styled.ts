import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
  bg: string
}

export const OurCustomersWrapperStyled = styled.section`
  background-color: ${({ theme }: Omit<IProps, 'bg'>) => theme.lightTheme.colors.white};
`

export const OurCustomersContentStyled = styled.div`
  display: flex;
  padding: 120px 0 60px 0;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;
`

export const TitleContainerStyled = styled.div`
  display: flex;
  width: 1110px;
  flex-direction: column;
  row-gap: 30px;
`

export const TitleStyled = styled.h3`
  font-weight: ${({ theme }: Omit<IProps, 'bg'>) => theme.lightTheme.fontWeight[800]};
  font-size: 46px;
  line-height: 60px;
  letter-spacing: -0.015em;
  color: ${({ theme }: Omit<IProps, 'bg'>) => theme.lightTheme.colors.black};
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
