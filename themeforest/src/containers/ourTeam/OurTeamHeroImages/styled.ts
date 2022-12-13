import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
}

export const HeroImagesWrapperStyled = styled.section`
  background-color: ${({ theme }: IProps) => theme.lightTheme.colors.secondary};
`

export const ContentStyled = styled.div`
  display: flex;
  padding: 40px 0 90px 0;
  flex-direction: column;
  align-items: center;
`

export const PositionWrapperStyled = styled.div`
  width: 1110px;
`

export const PositionContainerStyled = styled.div`
  display: flex;
  column-gap: 7px;
`

export const SubtitlePositionStyled = styled.p`
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[500]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.grey};

  &:nth-child(3) {
    color: ${({ theme }: IProps) => theme.lightTheme.colors.white};
  }
`

export const TitleContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 366px;
  margin-top: 129px;

  & h2,
  & p {
    color: ${({ theme }: IProps) => theme.lightTheme.colors.white};
  }
`

export const SubtitleContainerStyled = styled.div``

export const BrStyled = styled.br``
