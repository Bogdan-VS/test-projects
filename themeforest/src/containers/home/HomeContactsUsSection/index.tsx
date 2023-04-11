import React from 'react'

import Button from '@/components/Button'
import Subtitle from '@/components/Subtitle'

import { ContactsContentStyled, ContactsWrapperStyled, TitleStyled } from './styled'

const HomeContactsUsSection = () => (
  <ContactsWrapperStyled>
    <ContactsContentStyled>
      <TitleStyled>Do you need help?</TitleStyled>
      <Subtitle
        fontSize='16'
        lineHeight='28'
        width='540'
        text='Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.'
      />
      <Button width='190' height='54' text='Contact Us' />
    </ContactsContentStyled>
  </ContactsWrapperStyled>
)

export default HomeContactsUsSection
