import { IThemes } from '@/theme/interfaces'
import styled from 'styled-components'

interface IProps {
  theme: IThemes
}

export const FooterWrapperStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }: IProps) => theme.lightTheme.colors.secondary};
`

export const WrapperContentTopStyled = styled.div`
  display: flex;
  width: 1110px;
  margin: 50px 0;
  justify-content: space-between;
`

export const ContentTopLeftStyled = styled.div`
  width: 285px;
`

export const LogoStyled = styled.div`
  width: 141px;
  height: 46px;
  margin-bottom: 20px;
  background: 100% 100% / cover url('./assets/logo/logo_white.png');
`

export const DescriptionStyled = styled.p`
  margin-bottom: 20px;
  font-family: ${({ theme }: IProps) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[400]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.white};
`

export const ListIconsStyled = styled.ul`
  display: flex;
  column-gap: 15px;
`

export const ContentTopRightStyled = styled.div`
  margin-top: 11px;
  display: flex;
  width: 613px;
  justify-content: space-between;
`

export const LinkConteinerStyled = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`

export const LinkWrapperStyled = styled.div`
  &:last-child {
    max-width: 233px;
  }
`

export const LinkTitleStyled = styled.h5`
  margin-bottom: 31px;
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[700]};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.white};
`

export const Link = styled.a`
  font-family: ${({ theme }: IProps) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[400]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
`

export const WrapperContentBottomStyled = styled.div`
  display: flex;
  width: 1110px;
  height: 58px;
  margin-bottom: 30px;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid ${({ theme }: IProps) => theme.lightTheme.colors.helper_blue_2};
`

export const PoliceContentRightStyled = styled.div`
  display: flex;
  column-gap: 95px;
`

export const SubtitleStyled = styled.p`
  font-family: ${({ theme }: IProps) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[400]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.helper_blue_2};
`
