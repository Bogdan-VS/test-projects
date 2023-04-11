import BlogArticleSection from '@/containers/blog/BlogArticleSection'
import BlogHeroImageSection from '@/containers/blog/BlogHeroImageSection'
import HomeSubscribeSection from '@/containers/home/HomeSubscribeSection'
import React from 'react'

import { WrapperStyled } from './styled'

const Blog = () => (
  <WrapperStyled>
    <BlogHeroImageSection />
    <BlogArticleSection />
    <HomeSubscribeSection />
  </WrapperStyled>
)

export default Blog
