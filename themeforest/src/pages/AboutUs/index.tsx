import React from 'react'

import AboutUsHeroImage from '@/containers/aboutUs/AboutUsHeroImage'
import CompanyOveviewSection from '@/containers/aboutUs/CompanyOverviewSection'
import OurCustomersSection from '@/containers/aboutUs/OurCustomersSection'
import OurMissionSection from '@/containers/aboutUs/OurMissionSection'
import TestimonialsSection from '@/containers/aboutUs/TestimonialsSection'
import WhoWeAreSection from '@/containers/aboutUs/WhoWeAreSection'
import ContactUsSection from '@/containers/aboutUs/ContactUsSection'

import { WrapperStyled } from './styled'
import HomeSubscribeSection from '@/containers/home/HomeSubscribeSection'

const AboutUs = () => (
  <WrapperStyled>
    <AboutUsHeroImage />
    <WhoWeAreSection />
    <OurMissionSection />
    <CompanyOveviewSection />
    <OurCustomersSection />
    <TestimonialsSection />
    <ContactUsSection />
    <HomeSubscribeSection />
  </WrapperStyled>
)

export default AboutUs
