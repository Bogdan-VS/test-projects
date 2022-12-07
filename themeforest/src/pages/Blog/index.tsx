import BlogArticleSection from '@/containers/blog/BlogArticleSection'
import BlogHeroImageSection from '@/containers/blog/BlogHeroImageSection'
import React from 'react'

import { WrapperStyled } from './styled'

const Blog = () => (
  <WrapperStyled>
    <BlogHeroImageSection />
    <BlogArticleSection />
  </WrapperStyled>
)

export default Blog
