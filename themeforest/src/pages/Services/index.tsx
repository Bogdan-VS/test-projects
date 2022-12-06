import React from 'react'

import HomeContactsUsSection from '@/containers/home/HomeContactsUsSection'
import HomeOverviewSection from '@/containers/home/HomeOverviewSection'
import ServiceCardsSection from '@/containers/service/ServiceCardsSection'
import ServiceHeroImageSection from '@/containers/service/ServiceHeroImageSection'

import { WrapperStyled } from './styled'

const Services = () => (
  <WrapperStyled>
    <ServiceHeroImageSection />
    <ServiceCardsSection />
    <HomeOverviewSection />
    <HomeContactsUsSection />
  </WrapperStyled>
)

export default Services
