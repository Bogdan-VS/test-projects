import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
}

export const ArticleWrapperStyled = styled.section`
  background-color: ${({ theme }: IProps) => theme.lightTheme.colors.white};
`

export const ArticleContentStyled = styled.div`
  display: flex;
  padding: 120px 0;
  column-gap: 30px;
`

export const LeftContainerStyled = styled.div``

export const ArticleContainerStyled = styled.div``

export const ArticleStyled = styled.article``

export const ImgWrapperStyled = styled.div``

export const ImgStyled = styled.img``

export const InfoContainerStyled = styled.div``

export const InfoTitleStyled = styled.span``

export const InfoSubtitleStyled = styled.span``

export const TitleStyled = styled.h3``

export const TitleItemStyled = styled.h6``

export const SubtitleItemStyled = styled.p``

export const LinkItemStyled = styled.a``

export const CursiveItemStyled = styled.span``

export const DecorationItemStyled = styled.span``
