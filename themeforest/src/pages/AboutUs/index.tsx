import React from 'react'

import AboutUsHeroImage from '@/containers/aboutUs/AboutUsHeroImage'
import CompanyOveviewSection from '@/containers/aboutUs/CompanyOverviewSection'
import OurCustomersSection from '@/containers/aboutUs/OurCustomersSection'
import OurMissionSection from '@/containers/aboutUs/OurMissionSection'
import TestimonialsSection from '@/containers/aboutUs/TestimonialsSection'
import WhoWeAreSection from '@/containers/aboutUs/WhoWeAreSection'

import { WrapperStyled } from './styled'

const AboutUs = () => (
  <WrapperStyled>
    <AboutUsHeroImage />
    <WhoWeAreSection />
    <OurMissionSection />
    <CompanyOveviewSection />
    <OurCustomersSection />
    <TestimonialsSection />
  </WrapperStyled>
)

export default AboutUs
