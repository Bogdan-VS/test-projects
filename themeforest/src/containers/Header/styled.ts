import { IThemes } from '@/theme/interfaces'
import styled from 'styled-components'

interface IProps {
  theme: IThemes
  isOpen: boolean
}

export const HeaderWrapperStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }: Omit<IProps, 'isOpen'>) => theme.lightTheme.colors.background};
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
  position: relative;
  display: flex;
  column-gap: 40px;
  align-items: center;

  a {
    text-decoration: none;
    color: ${({ theme }: Omit<IProps, 'isOpen'>) => theme.lightTheme.colors.grey};
    transition: 0.3s;
  }

  a:hover {
    color: ${({ theme }: Omit<IProps, 'isOpen'>) => theme.lightTheme.colors.black};
  }

  .active {
    color: ${({ theme }: Omit<IProps, 'isOpen'>) => theme.lightTheme.colors.black};
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

  &:nth-child(3) {
    position: relative;
  }
`

export const ButtonNavStyled = styled.button`
  /* position: relative; */
  width: 59px;
  text-align: start;
  border: none;
  background: none;
  color: ${({ theme }: Omit<IProps, 'isOpen'>) => theme.lightTheme.colors.grey};
  transition: 0.3s;
  cursor: pointer;

  svg {
    position: absolute;
    left: 40px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover {
    color: ${({ theme }: Omit<IProps, 'isOpen'>) => theme.lightTheme.colors.black};

    svg path {
      fill: ${({ theme }: Omit<IProps, 'isOpen'>) => theme.lightTheme.colors.black};
    }
  }
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
  background: ${({ theme }: Omit<IProps, 'isOpen'>) => theme.lightTheme.colors.primary};
  border: none;
  border-radius: ${({ theme }: Omit<IProps, 'isOpen'>) => theme.lightTheme.borderRadius['6px']};
  color: #ffffff;
  font-size: 14px;
  font-weight: ${({ theme }: Omit<IProps, 'isOpen'>) => theme.lightTheme.fontWeight[600]};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }: Omit<IProps, 'isOpen'>) => theme.lightTheme.colors.primery_hover};
    box-shadow: ${({ theme }: Omit<IProps, 'isOpen'>) => theme.lightTheme.shadows.shadow_button};
  }

  &:disabled {
    background: ${({ theme }: Omit<IProps, 'isOpen'>) => theme.lightTheme.colors.grey};
  }
`

export const PagesContainerStyled = styled.ul`
  position: absolute;
  top: ${({ isOpen }: IProps) => (isOpen ? '40px' : '20px')};
  left: 170px;
  display: flex;
  flex-direction: column;
  column-gap: 15px;
  z-index: 0;
  background-color: ${({ theme }: IProps) => theme.lightTheme.colors.helper_blue_3};
  padding: 10px;
  visibility: ${({ isOpen }: IProps) => (isOpen ? 'visiable' : 'hidden')};
  opacity: ${({ isOpen }: IProps) => (isOpen ? 1 : 0)};
  border-radius: 6px;
  transition: 0.2s ease-in-out;
  z-index: 1;
`
