import { articles } from '@/constants/articles'
import { PathStyled, SvgStyled } from '@/theme/styled'
import React from 'react'

import { themes } from '@/theme/theme'

import {
  ArticleContainerStyled,
  ArticleContentStyled,
  ArticleStyled,
  ArticleWrapperStyled,
  CursiveItemStyled,
  DecorationItemStyled,
  ImgStyled,
  ImgWrapperStyled,
  InfoContainerStyled,
  InfoSubtitleStyled,
  InfoTitleStyled,
  LeftContainerStyled,
  LinkItemStyled,
  SubtitleItemStyled,
  TitleItemStyled,
  TitleStyled,
} from './styled'
import ArticleContent from '@/components/ArticleContent'

const BlogArticleSection = () => (
  <ArticleWrapperStyled>
    <ArticleContainerStyled>
      <LeftContainerStyled>
        <ArticleContentStyled>
          {articles.map((item) => (
            <ArticleStyled key={item.id}>
              <ImgWrapperStyled>
                <ImgStyled src={item.img} alt={item.title} />
              </ImgWrapperStyled>
              <InfoContainerStyled>
                <InfoTitleStyled>
                  {item.date}
                  <SvgStyled
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <PathStyled
                      color={themes.lightTheme.colors.grey}
                      d='M5.5 3C4.83696 3 4.20107 3.26339 3.73223 3.73223C3.26339 4.20107 3 4.83696 3 5.5V6H17V5.5C17 4.83696 16.7366 4.20107 16.2678 3.73223C15.7989 3.26339 15.163 3 14.5 3H5.5ZM17 7H3V14.5C3 15.163 3.26339 15.7989 3.73223 16.2678C4.20107 16.7366 4.83696 17 5.5 17H14.5C15.163 17 15.7989 16.7366 16.2678 16.2678C16.7366 15.7989 17 15.163 17 14.5V7ZM8 10C8 10.2652 7.89464 10.5196 7.70711 10.7071C7.51957 10.8946 7.26522 11 7 11C6.73478 11 6.48043 10.8946 6.29289 10.7071C6.10536 10.5196 6 10.2652 6 10C6 9.73478 6.10536 9.48043 6.29289 9.29289C6.48043 9.10536 6.73478 9 7 9C7.26522 9 7.51957 9.10536 7.70711 9.29289C7.89464 9.48043 8 9.73478 8 10ZM7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13C6 12.7348 6.10536 12.4804 6.29289 12.2929C6.48043 12.1054 6.73478 12 7 12C7.26522 12 7.51957 12.1054 7.70711 12.2929C7.89464 12.4804 8 12.7348 8 13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14ZM11 10C11 10.2652 10.8946 10.5196 10.7071 10.7071C10.5196 10.8946 10.2652 11 10 11C9.73478 11 9.48043 10.8946 9.29289 10.7071C9.10536 10.5196 9 10.2652 9 10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9C10.2652 9 10.5196 9.10536 10.7071 9.29289C10.8946 9.48043 11 9.73478 11 10ZM10 14C9.73478 14 9.48043 13.8946 9.29289 13.7071C9.10536 13.5196 9 13.2652 9 13C9 12.7348 9.10536 12.4804 9.29289 12.2929C9.48043 12.1054 9.73478 12 10 12C10.2652 12 10.5196 12.1054 10.7071 12.2929C10.8946 12.4804 11 12.7348 11 13C11 13.2652 10.8946 13.5196 10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14ZM14 10C14 10.2652 13.8946 10.5196 13.7071 10.7071C13.5196 10.8946 13.2652 11 13 11C12.7348 11 12.4804 10.8946 12.2929 10.7071C12.1054 10.5196 12 10.2652 12 10C12 9.73478 12.1054 9.48043 12.2929 9.29289C12.4804 9.10536 12.7348 9 13 9C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10Z'
                    />
                  </SvgStyled>
                </InfoTitleStyled>
                <InfoSubtitleStyled>
                  {item.person}
                  <SvgStyled
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <PathStyled
                      color={themes.lightTheme.colors.grey}
                      d='M10 2C8.93913 2 7.92172 2.42143 7.17157 3.17157C6.42143 3.92172 6 4.93913 6 6C6 7.06087 6.42143 8.07828 7.17157 8.82843C7.92172 9.57857 8.93913 10 10 10C11.0609 10 12.0783 9.57857 12.8284 8.82843C13.5786 8.07828 14 7.06087 14 6C14 4.93913 13.5786 3.92172 12.8284 3.17157C12.0783 2.42143 11.0609 2 10 2ZM5.009 11C4.74564 10.9989 4.48466 11.0499 4.24102 11.1499C3.99739 11.2499 3.7759 11.3971 3.58926 11.5829C3.40261 11.7687 3.25448 11.9895 3.15337 12.2327C3.05225 12.4759 3.00013 12.7366 3 13C3 14.691 3.833 15.966 5.135 16.797C6.417 17.614 8.145 18 10 18C11.855 18 13.583 17.614 14.865 16.797C16.167 15.967 17 14.69 17 13C17 12.4696 16.7893 11.9609 16.4142 11.5858C16.0391 11.2107 15.5304 11 15 11H5.009Z'
                    />
                  </SvgStyled>
                </InfoSubtitleStyled>
              </InfoContainerStyled>
              <TitleStyled>{item.title}</TitleStyled>
              <ArticleContent content={item.content} />
            </ArticleStyled>
          ))}
        </ArticleContentStyled>
      </LeftContainerStyled>
    </ArticleContainerStyled>
  </ArticleWrapperStyled>
)

export default BlogArticleSection
