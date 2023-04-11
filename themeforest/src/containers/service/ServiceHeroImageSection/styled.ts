import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
}

export const HeroImageWrapperStyled = styled.section`
  background-color: ${({ theme }: IProps) => theme.lightTheme.colors.white};
`

export const HeroImageContentStyled = styled.div`
  display: flex;
  padding: 20px 0 60px 0;
  flex-direction: column;
  align-items: center;
  row-gap: 56px;
`

export const TopContainerStyled = styled.div`
  display: flex;
  width: 1110px;
  column-gap: 7px;
`

export const TopTitleStyled = styled.p`
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[500]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.grey};

  &:nth-child(3) {
    color: ${({ theme }: IProps) => theme.lightTheme.colors.black};
  }
`

export const BottomContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  align-items: center;
`

export const LogoStyled = styled.h6`
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[700]};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.primary};
`

export const TitleStyled = styled.h3`
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[800]};
  font-size: 46px;
  line-height: 60px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.black};
`
