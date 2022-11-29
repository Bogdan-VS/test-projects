import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
}

export const BenefitsWrapperStyled = styled.section`
  background-color: ${({ theme }: IProps) => theme.lightTheme.colors.background};
`

export const BenefitsContainerStyled = styled.div`
  display: flex;
  padding: 120px 0;
  column-gap: 30px;
  align-items: center;
  justify-content: center;
`

export const LeftContainerStyled = styled.div`
  display: flex;
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

export const CardContainerStyled = styled.div`
  display: flex;
  width: 540px;
  height: 582px;
  flex-flow: column wrap;
  align-content: space-between;
  column-gap: 15px;

  &::before,
  &::after {
    content: '';
    flex-basis: 100%;
    width: 0;
    order: 2;
  }
`

export const CardItemStyled = styled.div`
  height: 248px;
  background-color: ${({ theme }: IProps) => theme.lightTheme.colors.white};
  padding: 25px;
  margin-bottom: 30px;
  border-radius: 6px;
  box-shadow: ${({ theme }: IProps) => theme.lightTheme.shadows.shadow_card_2};

  &:nth-child(2n + 1) {
    order: 1;
  }
  &:nth-child(2n) {
    order: 2;
  }

  &:nth-child(2) {
    margin-top: 56px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const CardlogoStyled = styled.span`
  margin-bottom: 15px;
`

export const CardTitleStyled = styled.h5`
  margin-bottom: 10px;
`
