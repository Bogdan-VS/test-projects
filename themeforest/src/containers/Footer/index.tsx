import React from 'react'

import { themes } from '@/theme/theme'
import SocialLink from '@/components/SocialLink'

import {
  ContentTopLeftStyled,
  ContentTopRightStyled,
  DescriptionStyled,
  FooterWrapperStyled,
  LinkConteinerStyled,
  LinkTitleStyled,
  LinkWrapperStyled,
  ListIconsStyled,
  LogoStyled,
  SubtitleStyled,
  WrapperContentTopStyled,
  WrapperContentBottomStyled,
  PoliceContentRightStyled,
} from './styled'
import { iconsData } from '@/constants/iconData'
import { linkData } from '@/constants/linkData'
import PageLink from '@/components/PageLink'

const Footer = () => (
  <FooterWrapperStyled>
    <WrapperContentTopStyled>
      <ContentTopLeftStyled>
        <LogoStyled />
        <DescriptionStyled>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi.
        </DescriptionStyled>
        <ListIconsStyled>
          {iconsData.SocialIcons.map((el) => (
            <SocialLink
              key={el}
              d={el}
              link='#'
              color={themes.lightTheme.colors.white}
              colorHover={themes.lightTheme.colors.grey}
            />
          ))}
        </ListIconsStyled>
      </ContentTopLeftStyled>
      <ContentTopRightStyled>
        <LinkWrapperStyled>
          <LinkTitleStyled>Quick link</LinkTitleStyled>
          <LinkConteinerStyled>
            {linkData.quickLink.map(({ title, link }) => (
              <PageLink key={title} name={title} link={link} />
            ))}
          </LinkConteinerStyled>
        </LinkWrapperStyled>
        <LinkWrapperStyled>
          <LinkTitleStyled>Service</LinkTitleStyled>
          <LinkConteinerStyled>
            {linkData.service.map((el) => (
              <PageLink key={el} name={el} link='#' />
            ))}
          </LinkConteinerStyled>
        </LinkWrapperStyled>
        <LinkWrapperStyled>
          <LinkTitleStyled>Contact info</LinkTitleStyled>
          <LinkConteinerStyled>
            {linkData.contactInfo.map((el) => (
              <PageLink key={el} name={el} link='#' />
            ))}
          </LinkConteinerStyled>
        </LinkWrapperStyled>
      </ContentTopRightStyled>
    </WrapperContentTopStyled>
    <WrapperContentBottomStyled>
      <SubtitleStyled>Ensome© 2022 All Rights Reserved</SubtitleStyled>
      <PoliceContentRightStyled>
        <SubtitleStyled>Privacy policy</SubtitleStyled>
        <SubtitleStyled>Terms of us</SubtitleStyled>
      </PoliceContentRightStyled>
    </WrapperContentBottomStyled>
  </FooterWrapperStyled>
)

export default Footer
