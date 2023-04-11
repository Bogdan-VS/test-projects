import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'
import { Opasity } from '../HomeTestimonialsSection/styled'

interface IProps {
  theme: IThemes
}

export const BlogWrapperStyled = styled.section`
  background-color: ${({ theme }: IProps) => theme.lightTheme.colors.white};
`

export const BlogContentStyled = styled.div`
  display: flex;
  padding: 120px 0 60px 0;
  flex-direction: column;
  row-gap: 50px;
  align-items: center;
`

export const TopContainerStyled = styled.div`
  display: flex;
  width: 1110px;
  margin: 0 auto;
  justify-content: space-between;

  & h3 {
    padding-top: 17px;
  }
`

export const TopTitleStyled = styled.h3`
  padding-top: 17px;
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[800]};
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.black};
`

export const BottomContainerStyled = styled.div`
  display: flex;
  column-gap: 30px;
`

export const CardContainerStyled = styled.div`
  display: flex;
  width: 350px;
  flex-direction: column;
  row-gap: 20px;
  animation: 0.5s ${Opasity};
`

export const ImgContainerStyled = styled.div``

export const ImgStyled = styled.img`
  animation: 0.5s ${Opasity};
`

export const ContentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  animation: 0.5s ${Opasity};
`

export const TimeStyled = styled.span`
  font-family: ${({ theme }: IProps) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[400]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.grey};
  animation: 0.5s ${Opasity};
`

export const TitleStyled = styled.h4`
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[700]};
  font-size: 22px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.black};
  animation: 0.5s ${Opasity};
`

export const LinkStyled = styled.a`
  position: relative;
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[600]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.primary};
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;
  animation: 0.5s ${Opasity};

  svg {
    position: absolute;
    top: 50%;
    left: 73px;
    transform: translateY(-50%);
    animation: 0.5s ${Opasity};
  }

  &:hover {
    color: ${({ theme }: IProps) => theme.lightTheme.colors.primery_hover};

    svg path {
      fill: ${({ theme }: IProps) => theme.lightTheme.colors.primery_hover};
    }
  }
`
