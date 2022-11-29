import { IThemes } from '@/theme/interfaces'
import styled from 'styled-components'

interface IProps {
  theme: IThemes
}

export const FeaturesWrapperStyled = styled.section``

export const FeaturesTopWrapperStyled = styled.div`
  display: flex;
  padding: 120px 0;
  background-color: ${({ theme }: IProps) => theme.lightTheme.colors.white};
  justify-content: center;
  column-gap: 30px;
`

export const TopLeftTitleStyled = styled.h2`
  max-width: 540px;
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[800]};
  font-size: 57px;
  line-height: 66px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.black};
`

export const TopLeftSelectStyled = styled.span`
  color: ${({ theme }: IProps) => theme.lightTheme.colors.primary};
`

export const TopRightContainerStyled = styled.div`
  display: flex;
  padding-top: 8px;
  flex-direction: column;
  row-gap: 30px;
`

export const FeaturesBottomWrapperStyled = styled.div`
  display: flex;
  column-gap: 46px;
  align-items: center;
`

export const ImageWrapperStyled = styled.div`
  position: relative;
  width: 48.4%;
  padding-bottom: 38.55%;
`

export const ImageStyled = styled.img`
  position: absolute;
  width: 100%;
`

export const BottomRightWrapperStyled = styled.div`
  margin: 191px 0;
  display: flex;
  max-width: 540px;
  flex-direction: column;
  row-gap: 30px;
`

export const TitleStyled = styled.h3`
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[800]};
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.black};
`

export const SeparatorStyled = styled.br``
