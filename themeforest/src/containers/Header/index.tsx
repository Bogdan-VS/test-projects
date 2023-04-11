import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { themes } from '@/theme/theme'
import { Pages } from '@/constants/path'
import PageLink from '@/components/PageLink'

import {
  ButtonNavStyled,
  ButtonStyled,
  ContentStyled,
  HeaderWrapperStyled,
  ItemStyled,
  LogoStyled,
  MenuStyled,
  PagesContainerStyled,
} from './styled'
import { PathStyled, SvgStyled } from '@/theme/styled'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HeaderWrapperStyled>
      <ContentStyled>
        <LogoStyled />
        <MenuStyled>
          <ItemStyled>
            <NavLink to={Pages.HOME}>Home</NavLink>
          </ItemStyled>
          <ItemStyled>
            <NavLink to={Pages.SOLUTIONS}>Solutions</NavLink>
          </ItemStyled>
          <ItemStyled>
            <ButtonNavStyled onClick={handleClick}>
              Pages
              <SvgStyled
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <PathStyled
                  d='M4.00012 7.17512C4.08383 7.08482 4.18451 7.01191 4.2964 6.96053C4.4083 6.90915 4.52922 6.88031 4.65226 6.87567C4.7753 6.87102 4.89805 6.89066 5.0135 6.93346C5.12895 6.97627 5.23484 7.04139 5.32512 7.12512L10.0001 11.5339L14.6751 7.12512C14.7654 7.0414 14.8713 6.97628 14.9867 6.93349C15.1022 6.89069 15.2249 6.87106 15.348 6.8757C15.471 6.88034 15.5919 6.90918 15.7038 6.96055C15.8157 7.01192 15.9164 7.08483 16.0001 7.17512C16.0838 7.2654 16.149 7.37129 16.1917 7.48674C16.2345 7.60219 16.2542 7.72494 16.2495 7.84797C16.2449 7.97101 16.2161 8.09193 16.1647 8.20382C16.1133 8.31572 16.0404 8.4164 15.9501 8.50012L10.6376 13.5001C10.4643 13.6609 10.2366 13.7502 10.0001 13.7502C9.76368 13.7502 9.53598 13.6609 9.36262 13.5001L4.05012 8.50012C3.95982 8.41641 3.88691 8.31573 3.83553 8.20383C3.78414 8.09194 3.75531 7.97102 3.75067 7.84797C3.74602 7.72493 3.76566 7.60218 3.80846 7.48673C3.85127 7.37128 3.91639 7.2654 4.00012 7.17512Z'
                  color={themes.lightTheme.colors.grey}
                  colorHover={themes.lightTheme.colors.black}
                />
              </SvgStyled>
            </ButtonNavStyled>
          </ItemStyled>
          <ItemStyled>
            <NavLink to={Pages.ELEMENTS}>Elements</NavLink>
          </ItemStyled>
          <ItemStyled>
            <NavLink to={Pages.BLOG}>Blog</NavLink>
          </ItemStyled>
          <ItemStyled>
            <NavLink to={Pages.CONTACTS}>Contacts</NavLink>
          </ItemStyled>
          <PagesContainerStyled isOpen={isOpen}>
            <PageLink link={Pages.SERVICE} name='Service' handleClick={handleClick} />
            <PageLink link={Pages.ABOUT_US} name='About us' handleClick={handleClick} />
            <PageLink link={Pages.OUR_TEAM} name='Our team' handleClick={handleClick} />
            <PageLink link={Pages.FAQ} name='FAQ' handleClick={handleClick} />
          </PagesContainerStyled>
        </MenuStyled>
        <ButtonStyled>
          <SvgStyled
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <PathStyled
              d='M10.6875 7.776C10.5164 7.67723 10.3224 7.62525 10.1248 7.62528C9.92728 7.62531 9.73323 7.67736 9.56219 7.77618C9.39114 7.87501 9.24914 8.01713 9.15045 8.18825C9.05176 8.35937 8.99987 8.55346 9 8.751V15.2505C8.99987 15.448 9.05176 15.6421 9.15045 15.8133C9.24914 15.9844 9.39114 16.1265 9.56219 16.2253C9.73323 16.3241 9.92728 16.3762 10.1248 16.3762C10.3224 16.3763 10.5164 16.3243 10.6875 16.2255L16.875 12.6495C16.989 12.5837 17.0837 12.489 17.1495 12.375C17.2153 12.261 17.25 12.1316 17.25 12C17.25 11.8684 17.2153 11.739 17.1495 11.625C17.0837 11.511 16.989 11.4163 16.875 11.3505L10.6875 7.776ZM0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12ZM12 1.5C10.6211 1.5 9.25574 1.77159 7.98182 2.29926C6.70791 2.82694 5.55039 3.60036 4.57538 4.57538C3.60036 5.55039 2.82694 6.70791 2.29926 7.98182C1.77159 9.25574 1.5 10.6211 1.5 12C1.5 13.3789 1.77159 14.7443 2.29926 16.0182C2.82694 17.2921 3.60036 18.4496 4.57538 19.4246C5.55039 20.3996 6.70791 21.1731 7.98182 21.7007C9.25574 22.2284 10.6211 22.5 12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5Z'
              color={themes.lightTheme.colors.white}
            />
          </SvgStyled>
          Watch the demo
        </ButtonStyled>
      </ContentStyled>
    </HeaderWrapperStyled>
  )
}

export default Header
