import { IThemes } from '@/theme/interfaces'
import styled from 'styled-components'

interface IProps {
  theme: IThemes
}

export const HeroImageWrapperStyled = styled.section`
  position: relative;
`

export const ContentWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }: IProps) => theme.lightTheme.colors.white};
`

export const ContentStyled = styled.div`
  display: flex;
  width: 1110px;
  margin: 73px 0 90px 0;
  justify-content: space-between;
`

export const TitleStyled = styled.h2`
  max-width: 540px;
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[800]};
  font-size: 46px;
  line-height: 60px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.black};
`

export const SelectStyled = styled.span`
  color: ${({ theme }: IProps) => theme.lightTheme.colors.primary};
`

export const SubtitleStyled = styled.p`
  max-width: 400px;
  font-family: ${({ theme }: IProps) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[400]};
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.grey};
`

export const ImageWrapperStyled = styled.div`
  position: relative;
  padding-bottom: 30.73%;
`

export const ImageStyled = styled.img`
  position: absolute;
  width: 100%;
`

export const ButtonWrapperStyled = styled.div`
  position: absolute;
  top: 215px;
  right: 625px;
  display: flex;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: white;
`

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  margin: 10px;
  background-color: ${({ theme }: IProps) => theme.lightTheme.colors.primary};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }: IProps) => theme.lightTheme.colors.primery_hover};

    div {
      background-color: ${({ theme }: IProps) => theme.lightTheme.colors.primery_hover};
    }
  }

  &:disabled {
    background-color: ${({ theme }: IProps) => theme.lightTheme.colors.grey};

    div {
      background-color: ${({ theme }: IProps) => theme.lightTheme.colors.grey};
    }
  }
`

export const ButtonTitleStyled = styled.div`
  display: flex;
  width: 104px;
  height: 104px;
  border: 1px solid ${({ theme }: IProps) => theme.lightTheme.colors.white};
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.white};

  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[600]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  transition: 0.3s;
`
