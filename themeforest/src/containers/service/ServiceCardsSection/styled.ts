import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
  img: string
}

export const CardsWrapperStyled = styled.section`
  background-color: ${({ theme }: Omit<IProps, 'img'>) => theme.lightTheme.colors.white};
`

export const CardsContentStyled = styled.div`
  display: flex;
  max-width: 1110px;
  padding: 60px 0 0 0;
  flex-wrap: wrap;
  column-gap: 30px;
  margin: 0 auto;
`

export const CardContainerStyled = styled.div`
  display: flex;
  padding: 35px;
  flex-direction: column;
  row-gap: 20px;
`

export const ImgContainerStyled = styled.span`
  width: 84px;
  height: 70px;
  background: 100% 100% url(${({ img }: Omit<IProps, 'theme'>) => img});
`

export const TitleStyled = styled.h4`
  font-weight: ${({ theme }: Omit<IProps, 'img'>) => theme.lightTheme.fontWeight[700]};
  font-size: 22px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: ${({ theme }: Omit<IProps, 'img'>) => theme.lightTheme.colors.black};
`
