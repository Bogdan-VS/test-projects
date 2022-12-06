import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
}

export const CompanyOverviewWrapperStyled = styled.section``

export const CompanyOverviewContentStyled = styled.div`
  display: flex;
  padding: 100px 0;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
`

export const TitleStyled = styled.h3`
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[800]};
  font-size: 46px;
  line-height: 60px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.black};
`

export const BottomContainerStyled = styled.div`
  display: flex;
  padding: 70px 0;
`

export const DescriptionContainerStyled = styled.div`
  display: flex;
  padding: 0 48px;
  flex-direction: column;
  row-gap: 20px;
`

export const DescriptionTytleStyled = styled.h4`
  font-family: ${({ theme }: IProps) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[800]};
  font-size: 56px;
  line-height: 56px;
  letter-spacing: -0.025em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.primary};
`

export const DescriptionSubtitleStyled = styled.p`
  font-family: ${({ theme }: IProps) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[700]};
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.grey};
`

export const LineStyled = styled.span`
  height: 92px;
  border-left: 1px solid ${({ theme }: IProps) => theme.lightTheme.colors.helper_blue_3};
`
