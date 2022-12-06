import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
}

export const AboutUsWrapperStyled = styled.section`
  background-color: ${({ theme }: IProps) => theme.lightTheme.colors.background};
`

export const AboutUsContentStyled = styled.div`
  display: flex;
  padding: 100px 0 160px 0;
  flex-direction: column;
  column-gap: 20px;
  align-items: center;
`

export const TitleStyled = styled.h1`
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[800]};
  font-size: 46px;
  line-height: 60px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.black};
`

export const SubtitleContainerStyled = styled.div`
  display: flex;
  column-gap: 7px;
`

export const SubtitleStyled = styled.p`
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[500]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.grey};

  &:nth-child(3) {
    color: ${({ theme }: IProps) => theme.lightTheme.colors.black};
  }
`
