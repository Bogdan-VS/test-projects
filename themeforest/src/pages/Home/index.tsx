import React from 'react'

import HomeHeroImageSection from '@/containers/home/HomeHeroImageSection'
import HomeFeaturesSection from '@/containers/home/HomeFeaturesSection'
import { WrapperStyled } from './styled'
import HomeOverviewSection from '@/containers/home/HomeOverviewSection'
import HomeBenefitsSection from '@/containers/home/HomeBenefitsSection'
import HomeTestimonialsSection from '@/containers/home/HomeTestimonialsSection'
import HomePricingSection from '@/containers/home/HomePricingSection'

const Home = () => (
  <WrapperStyled>
    <HomeHeroImageSection />
    <HomeFeaturesSection />
    <HomeOverviewSection />
    <HomeBenefitsSection />
    <HomeTestimonialsSection />
    <HomePricingSection />
  </WrapperStyled>
)

export default Home
