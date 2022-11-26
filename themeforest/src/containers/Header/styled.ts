import { IThemes } from '@/theme/interfaces'
import styled from 'styled-components'

interface IProps {
  theme: IThemes
}

export const HeaderWrapperStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }: IProps) => theme.lightTheme.colors.background};
`

export const ContentStyled = styled.div`
  display: flex;
  width: 1110px;
  height: 46px;
  justify-content: space-between;
`

export const LogoStyled = styled.span`
  width: 141px;
  height: 46px;
  background: 100% 100% / cover url('./assets/logo/logo_blue.png');
`

export const MenuStyled = styled.ul`
  display: flex;
  column-gap: 40px;
  align-items: center;

  a {
    text-decoration: none;
    color: ${({ theme }: IProps) => theme.lightTheme.colors.grey};
    transition: 0.3s;
  }

  a:hover {
    color: ${({ theme }: IProps) => theme.lightTheme.colors.black};
  }

  .active {
    color: ${({ theme }: IProps) => theme.lightTheme.colors.black};
  }
`

export const ItemStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 3px;
  font-weight: 500;
  font-size: 14px;
  list-style: none;
  cursor: pointer;
  transition: 0.3s;
`

export const LinkStyled = styled.a`
  text-decoration: none;
`

export const ButtonStyled = styled.button`
  display: flex;
  width: 168px;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }: IProps) => theme.lightTheme.colors.primary};
  border: none;
  border-radius: ${({ theme }: IProps) => theme.lightTheme.borderRadius['6px']};
  color: #ffffff;
  font-size: 14px;
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[600]};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }: IProps) => theme.lightTheme.colors.primery_hover};
    box-shadow: ${({ theme }: IProps) => theme.lightTheme.shadows.shadow_button};
  }

  &:disabled {
    background: ${({ theme }: IProps) => theme.lightTheme.colors.grey};
  }
`
