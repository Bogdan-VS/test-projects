import React from 'react'

import HomeHeroImageSection from '@/containers/HomeHeroImageSection'
import HomeFeaturesSection from '@/containers/HomeFeaturesSection'
import { WrapperStyled } from './styled'
import HomeOverviewSection from '@/containers/HomeOverviewSection'

const Home = () => (
  <WrapperStyled>
    <HomeHeroImageSection />
    <HomeFeaturesSection />
    <HomeOverviewSection />
  </WrapperStyled>
)

export default Home
