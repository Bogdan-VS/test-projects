import React from 'react'

import HomeHeroImageSection from '@/containers/HomeHeroImageSection'
import HomeFeaturesSection from '@/containers/HomeFeaturesSection'
import { WrapperStyled } from './styled'

const Home = () => (
  <WrapperStyled>
    <HomeHeroImageSection />
    <HomeFeaturesSection />
  </WrapperStyled>
)

export default Home
