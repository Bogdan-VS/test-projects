import styled from 'styled-components'
import { IThemes } from '@/theme/interfaces'

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

  & h2 {
    max-width: 540px;
    font-size: 57px;
    line-height: 66px;
  }
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

export const SeparatorStyled = styled.br``
