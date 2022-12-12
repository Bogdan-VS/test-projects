import React, { useMemo, useState } from 'react'

import { themes } from '@/theme/theme'
import { ITagsItems } from '@/constants/interfaces'
import { articles } from '@/constants/articles'

import { PathStyled, SvgStyled, TitleH5Styled } from '@/theme/styled'
import {
  ArticleContainerStyled,
  ArticleContentStyled,
  ArticleStyled,
  ArticleWrapperStyled,
  ImgStyled,
  ImgWrapperStyled,
  InfoContainerStyled,
  InfoRelatedContainerStyled,
  InfoRelatedDateStyled,
  InfoTitleStyled,
  LeftContainerStyled,
  LinkContainerStyled,
  ListCardsStyled,
  ListCardStyled,
  ListIconsStyled,
  ListTagsStyled,
  RelatedContainerStyled,
  ShareContainerStyled,
  ShareStyled,
  SocialContainerStyled,
  TagsContainerStyled,
  TagStyled,
  TagTitleStyled,
  TitleStyled,
  ViewItemStyled,
} from './styled'
import ArticleContent from '@/components/ArticleContent'
import SocialLink from '@/components/SocialLink'
import SideBar from '../SideBar'
import { iconsData, tags } from '@/constants/iconData'
import Subtitle from '@/components/Subtitle'
import { searchNews } from '@/utils/cardsFilter'
import Button from '@/components/Button'
import { limitNews } from '@/constants/constants'

const BlogArticleSection = () => {
  const [tagItem, setTagItem] = useState(tags)
  const [news, setNews] = useState('')
  const [countNews, setCountNews] = useState(1)

  const handleSearch = (text: string) => setNews(text)

  const handleTag = (item: string) => () => {
    const updateTagItems = { ...tagItem }
    updateTagItems[item as keyof ITagsItems] = !updateTagItems[item as keyof ITagsItems]
    setTagItem(updateTagItems)
    setCountNews(1)
  }

  const handleCountNews = () => setCountNews(countNews + 1)

  const filterTopics = useMemo(() => {
    if (tagItem['All topics']) return searchNews(articles, news).slice(0, countNews * limitNews)

    return searchNews(articles, news)
      .filter((el) => {
        return el.tags.some((val) => tagItem[val.title as keyof ITagsItems])
      })
      .slice(0, countNews * limitNews)
  }, [tagItem, news, countNews])

  const filterRelatedPost = useMemo(() => {
    return iconsData.RelatedPost.filter((el) => tagItem[el.tag as keyof ITagsItems]).slice(0, 3)
  }, [tagItem])

  return (
    <ArticleWrapperStyled>
      <ArticleContentStyled>
        <LeftContainerStyled>
          <ArticleContainerStyled>
            {filterTopics.map((item) => (
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
                  <InfoTitleStyled>
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
                  </InfoTitleStyled>
                </InfoContainerStyled>
                <TitleStyled>{item.title}</TitleStyled>
                <ArticleContent content={item.content} />
                <SocialContainerStyled>
                  <ViewItemStyled>
                    {item.views} Views
                    <SvgStyled
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <PathStyled
                        color={themes.lightTheme.colors.grey}
                        d='M17.9996 5.49999C17.9997 5.90992 17.899 6.31359 17.7064 6.67544C17.5138 7.03729 17.2351 7.34622 16.895 7.57502C16.5548 7.80382 16.1637 7.94547 15.7559 7.98749C15.3481 8.02951 14.9363 7.97062 14.5566 7.81599L13.2746 9.73899C13.5184 9.98527 13.7083 10.2795 13.8323 10.6031C13.9563 10.9267 14.0117 11.2725 13.9949 11.6186C13.9781 11.9648 13.8896 12.3036 13.7349 12.6137C13.5802 12.9238 13.3627 13.1983 13.0963 13.4199C12.8299 13.6414 12.5203 13.8052 12.1872 13.9008C11.8541 13.9963 11.5048 14.0216 11.1614 13.9749C10.818 13.9283 10.4881 13.8108 10.1926 13.6299C9.89702 13.449 9.64231 13.2086 9.44461 12.924L6.94861 13.994C7.07357 14.6008 6.9688 15.2323 6.6546 15.7662C6.3404 16.3001 5.83915 16.6984 5.24803 16.8837C4.65691 17.0691 4.01802 17.0284 3.45521 16.7695C2.8924 16.5106 2.44576 16.0519 2.20188 15.4825C1.958 14.913 1.93424 14.2732 2.13521 13.6872C2.33618 13.1012 2.74757 12.6107 3.28962 12.3108C3.83168 12.0109 4.46579 11.9229 5.06903 12.0639C5.67227 12.2049 6.20168 12.5649 6.55461 13.074L9.05061 12.005C8.95869 11.5612 8.98914 11.1007 9.13871 10.6729C9.28828 10.2451 9.55134 9.86594 9.89975 9.57608C10.2482 9.28621 10.6688 9.09651 11.1167 9.02728C11.5646 8.95804 12.0229 9.01186 12.4426 9.18299L13.7246 7.26099C13.4354 6.96942 13.2225 6.61108 13.1047 6.21767C12.9869 5.82426 12.9678 5.40788 13.0491 5.00535C13.1305 4.60281 13.3097 4.22651 13.571 3.9097C13.8324 3.5929 14.1677 3.34535 14.5474 3.18893C14.9271 3.03251 15.3395 2.97205 15.7482 3.01288C16.1568 3.05371 16.5491 3.19458 16.8904 3.42303C17.2316 3.65149 17.5113 3.9605 17.7048 4.32274C17.8983 4.68499 17.9995 5.08932 17.9996 5.49999Z'
                      />
                    </SvgStyled>
                  </ViewItemStyled>
                  <ShareContainerStyled>
                    <ShareStyled>
                      Share:
                      <SvgStyled
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <PathStyled
                          color={themes.lightTheme.colors.grey}
                          d='M12.378 5.70809V3.57809C12.378 3.09809 12.908 2.84009 13.268 3.10809L13.33 3.16209L17.827 7.58209C18.037 7.78909 18.056 8.12109 17.884 8.35009L17.827 8.41509L13.33 12.8381C12.992 13.1701 12.443 12.9571 12.383 12.5041L12.378 12.4221V10.3261L12.12 10.3491C10.32 10.5421 8.594 11.3731 6.933 12.8561C6.543 13.2041 5.941 12.8761 6.005 12.3501C6.503 8.26009 8.59 6.00509 12.153 5.72309L12.378 5.70809ZM5.5 4.00009C4.83696 4.00009 4.20107 4.26348 3.73223 4.73232C3.26339 5.20116 3 5.83705 3 6.50009V14.5001C3 15.1631 3.26339 15.799 3.73223 16.2679C4.20107 16.7367 4.83696 17.0001 5.5 17.0001H13.5C14.163 17.0001 14.7989 16.7367 15.2678 16.2679C15.7366 15.799 16 15.1631 16 14.5001V13.5001C16 13.3675 15.9473 13.2403 15.8536 13.1465C15.7598 13.0528 15.6326 13.0001 15.5 13.0001C15.3674 13.0001 15.2402 13.0528 15.1464 13.1465C15.0527 13.2403 15 13.3675 15 13.5001V14.5001C15 14.8979 14.842 15.2794 14.5607 15.5608C14.2794 15.8421 13.8978 16.0001 13.5 16.0001H5.5C5.10218 16.0001 4.72064 15.8421 4.43934 15.5608C4.15804 15.2794 4 14.8979 4 14.5001V6.50009C4 6.10227 4.15804 5.72074 4.43934 5.43943C4.72064 5.15813 5.10218 5.00009 5.5 5.00009H8.5C8.63261 5.00009 8.75979 4.94741 8.85355 4.85364C8.94732 4.75988 9 4.6327 9 4.50009C9 4.36748 8.94732 4.24031 8.85355 4.14654C8.75979 4.05277 8.63261 4.00009 8.5 4.00009H5.5Z'
                        />
                      </SvgStyled>
                    </ShareStyled>
                    <ListIconsStyled>
                      {item.share.map((el) => (
                        <SocialLink
                          key={el}
                          d={el}
                          link='#'
                          color={themes.lightTheme.colors.grey}
                          colorHover={themes.lightTheme.colors.black}
                        />
                      ))}
                    </ListIconsStyled>
                  </ShareContainerStyled>
                  <TagsContainerStyled>
                    <TagTitleStyled>
                      Tags
                      <SvgStyled
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <PathStyled
                          color={themes.lightTheme.colors.grey}
                          d='M18.0052 4.03295C18.0044 3.50546 17.7952 2.99963 17.4233 2.6256C17.0513 2.25158 16.5467 2.03964 16.0192 2.03595L11.1292 2.00395C10.8647 2.00216 10.6024 2.05286 10.3577 2.1531C10.1129 2.25335 9.89043 2.40115 9.70317 2.58795L3.02117 9.25195C2.83508 9.43757 2.68741 9.65804 2.58659 9.90076C2.48577 10.1435 2.43378 10.4037 2.43359 10.6665C2.43341 10.9294 2.48503 11.1897 2.58551 11.4325C2.68598 11.6754 2.83335 11.8961 3.01917 12.082L7.96817 17.032C8.34322 17.4069 8.85184 17.6175 9.38217 17.6175C9.9125 17.6175 10.4211 17.4069 10.7962 17.032L17.4272 10.4C17.6133 10.2139 17.7608 9.993 17.8614 9.74984C17.9619 9.50669 18.0135 9.24608 18.0132 8.98295L18.0052 4.03295ZM13.9992 6.99995C13.734 6.99995 13.4796 6.89459 13.2921 6.70706C13.1045 6.51952 12.9992 6.26517 12.9992 5.99995C12.9992 5.73474 13.1045 5.48038 13.2921 5.29285C13.4796 5.10531 13.734 4.99995 13.9992 4.99995C14.2644 4.99995 14.5187 5.10531 14.7063 5.29285C14.8938 5.48038 14.9992 5.73474 14.9992 5.99995C14.9992 6.26517 14.8938 6.51952 14.7063 6.70706C14.5187 6.89459 14.2644 6.99995 13.9992 6.99995Z'
                        />
                      </SvgStyled>
                    </TagTitleStyled>
                    <ListTagsStyled>
                      {item.tags.map(({ id, title }) => (
                        <TagStyled key={id}>{title}</TagStyled>
                      ))}
                    </ListTagsStyled>
                  </TagsContainerStyled>
                </SocialContainerStyled>
              </ArticleStyled>
            ))}
          </ArticleContainerStyled>
          {limitNews * countNews <= filterTopics.length && (
            <Button onClick={handleCountNews} text='More articles' />
          )}
          {filterRelatedPost.length > 0 && (
            <RelatedContainerStyled>
              <TitleStyled>Related Post</TitleStyled>
              <ListCardsStyled>
                {filterRelatedPost.map(({ id, link, img, title, text, date }) => (
                  <ListCardStyled key={id}>
                    <LinkContainerStyled href={link}>
                      <ImgWrapperStyled>
                        <ImgStyled src={img} alt={title} />
                      </ImgWrapperStyled>
                      <InfoRelatedContainerStyled>
                        <InfoRelatedDateStyled>{date}</InfoRelatedDateStyled>
                        <TitleH5Styled>{title}</TitleH5Styled>
                        <Subtitle width='400' fontSize='16' lineHeight='28' text={text} />
                      </InfoRelatedContainerStyled>
                    </LinkContainerStyled>
                  </ListCardStyled>
                ))}
              </ListCardsStyled>
            </RelatedContainerStyled>
          )}
        </LeftContainerStyled>
        <SideBar handleTag={handleTag} handleSearch={handleSearch} tagItem={tagItem} />
      </ArticleContentStyled>
    </ArticleWrapperStyled>
  )
}

export default BlogArticleSection
