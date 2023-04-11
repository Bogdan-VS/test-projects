import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
}

export const PricingWrapperStyled = styled.section`
  background-color: ${({ theme }: IProps) => theme.lightTheme.colors.white};
`

export const PricingContentStyled = styled.div`
  display: flex;
  padding: 60px 0;
  flex-direction: column;
  row-gap: 50px;
  align-items: center;
`

export const TitleStyled = styled.h3`
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[800]};
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.black};
`

export const SubtitleContainerStyled = styled.div`
  display: flex;
  column-gap: 30px;
`
