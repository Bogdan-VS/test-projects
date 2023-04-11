import React from 'react'

import ContactsHeroImages from '@/containers/contacts/ContactsHeroImages'
import ContactsMap from '@/containers/contacts/ContactsMap'

import { WrapperStyled } from './styled'

const Contacts = () => (
  <WrapperStyled>
    <ContactsHeroImages />
    <ContactsMap />
  </WrapperStyled>
)

export default Contacts
