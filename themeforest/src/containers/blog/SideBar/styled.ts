import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
  isClicked: boolean
}

export const SideBarStyled = styled.aside`
  display: flex;
  width: 445px;
  flex-direction: column;
  row-gap: 60px;

  & label {
    position: relative;
  }

  & form input {
    background-color: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.colors.white};
    border: 1px solid ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.colors.grey};
  }

  & form input:focus-visible {
    border: 1px solid ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.colors.primary};
    outline: none;
  }

  & form button {
    background-color: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.colors.primary};
    color: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.colors.white};
  }

  & form button:hover {
    background-color: ${({ theme }: Omit<IProps, 'isClicked'>) =>
      theme.lightTheme.colors.primery_hover};
  }
`

export const ErrorStyled = styled.p`
  position: absolute;
  color: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.colors.error};
`

export const PopularPostContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
`

export const TitleStyled = styled.h4`
  font-weight: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.fontWeight[700]};
  font-size: 22px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.colors.black};
`

export const PostCardsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`

export const CardContainerStyled = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
`

export const ImgWrapperStyled = styled.div``

export const ImgStyled = styled.img``

export const InfoContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const InfoDateStyled = styled.span`
  font-family: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.fontWeight[400]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.colors.grey};
`

export const InfoTitleStyled = styled.h5``

export const InfoLinkStyled = styled.a`
  position: relative;
  font-weight: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.fontWeight[600]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.colors.primary};
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;

  svg {
    position: absolute;
    top: 50%;
    left: 73px;
    transform: translateY(-50%);
  }

  &:hover {
    color: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.colors.primery_hover};

    svg path {
      fill: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.colors.primery_hover};
    }
  }
`

export const CategoriesContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`

export const ListCategoriesStyled = styled.ul`
  display: flex;
  flex-direction: column;
`

export const CategoryItemStyled = styled.li`
  position: relative;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.colors.grey};
  transition: 0.3s;
  cursor: pointer;

  & svg {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  &:hover {
    border-bottom: 1px solid
      ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.colors.black};

    h6 {
      font-weight: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.fontWeight[600]};
    }

    path {
      fill: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.colors.black};
    }
  }
`

export const TitleItemStyled = styled.h6`
  font-family: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.fontWeight[400]};
  font-size: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.fontSize['20px']};
  line-height: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.lineHeight['33px']};
  letter-spacing: -0.015em;
  color: ${({ theme }: Omit<IProps, 'isClicked'>) => theme.lightTheme.colors.black};
  transition: 0.3s;
`

export const TagsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`

export const ListTagsStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const TagStyled = styled.li`
  padding: 3px 21px;
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[800]};
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.015em;
  color: ${({ theme, isClicked }: IProps) =>
    isClicked ? theme.lightTheme.colors.white : theme.lightTheme.colors.primary};
  background-color: ${({ theme, isClicked }: IProps) =>
    isClicked ? theme.lightTheme.colors.primary : theme.lightTheme.colors.white};
  border: 1px solid ${({ theme }: IProps) => theme.lightTheme.colors.background};
  border-radius: 6px;
  list-style: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme, isClicked }: IProps) =>
      isClicked ? theme.lightTheme.colors.primery_hover : theme.lightTheme.colors.helper_blue_3};
  }
`
