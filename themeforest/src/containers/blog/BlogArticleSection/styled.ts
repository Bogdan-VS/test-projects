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
  justify-content: center;
`

export const LeftContainerStyled = styled.div`
  & button {
    margin-top: 30px;
  }
`

export const ArticleContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`

export const ArticleStyled = styled.article``

export const ImgWrapperStyled = styled.div``

export const ImgStyled = styled.img``

export const InfoContainerStyled = styled.div`
  margin-top: 25px;
`

export const InfoTitleStyled = styled.span`
  position: relative;
  padding-left: 28px;

  &:nth-child(1) {
    margin-right: 30px;
  }

  & svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const TitleStyled = styled.h3`
  max-width: 635px;
  margin-top: 40px;
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[800]};
  font-size: 30px;
  line-height: 40px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.black};
`

export const SocialContainerStyled = styled.div`
  display: flex;
  margin-top: 38px;
  column-gap: 30px;

  font-family: ${({ theme }: IProps) => theme.lightTheme.fontFamily.openSans};
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.grey};
`

export const ViewItemStyled = styled.span`
  position: relative;
  padding-left: 24px;
  display: flex;
  align-items: center;

  & svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const ShareContainerStyled = styled.div`
  display: flex;
  column-gap: 8px;
`

export const ShareStyled = styled.span`
  position: relative;
  padding-left: 24px;
  display: flex;
  align-items: center;

  & svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const ListIconsStyled = styled.ul`
  display: flex;
  column-gap: 8px;
  align-items: center;

  & li {
    height: 24px;
    transition: 0.3s;
  }

  & li:hover {
    path {
      fill: ${({ theme }: IProps) => theme.lightTheme.colors.black};
    }
  }
`

export const TagsContainerStyled = styled.div`
  display: flex;
  column-gap: 8px;
`

export const TagTitleStyled = styled.span`
  position: relative;
  padding-left: 24px;
  display: flex;
  align-items: center;

  & svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const ListTagsStyled = styled.ul`
  display: flex;
  column-gap: 8px;
`

export const TagStyled = styled.li`
  display: flex;
  width: 54px;
  height: 30px;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[800]};
  color: ${({ theme }: IProps) => theme.lightTheme.colors.primary};
  border: 1px solid ${({ theme }: IProps) => theme.lightTheme.colors.background};
  border-radius: 6px;
  list-style: none;
`

export const RelatedContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  & h3 {
    margin-top: 60px;
  }
`

export const ListCardsStyled = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`

export const ListCardStyled = styled.li`
  list-style: none;
  transition: 0.3s;

  &:hover {
    box-shadow: ${({ theme }: IProps) => theme.lightTheme.shadows.shadow_card_1};
  }
`

export const LinkContainerStyled = styled.a`
  display: flex;
  column-gap: 20px;
  text-decoration: none;
  align-items: center;
`

export const InfoRelatedContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

export const InfoRelatedDateStyled = styled.span`
  padding-bottom: 5px;
  font-family: ${({ theme }: IProps) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[400]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.grey};
`
