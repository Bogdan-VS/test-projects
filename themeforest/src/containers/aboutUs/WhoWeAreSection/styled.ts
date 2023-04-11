import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
}

export const WhoWeAreWrapperStyled = styled.section`
  background-color: ${({ theme }: IProps) => theme.lightTheme.colors.white};
`

export const WhoWeAreContentStyled = styled.div`
  display: flex;
  padding: 120px 0;
  column-gap: 30px;
  justify-content: center;
`

export const DescriptionContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`

export const TitleStyled = styled.h3`
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[800]};
  font-size: 46px;
  line-height: 60px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.black};
`

export const ImgConteiner = styled.div`
  display: flex;
  margin-top: 15px;
  max-width: 635px;
`

export const ImageStyled = styled.img`
  width: 100%;
  height: auto;
`
