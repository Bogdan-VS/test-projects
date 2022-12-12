import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { iconsData } from '@/constants/iconData'
import { themes } from '@/theme/theme'
import { IProps } from './interfaces'
import { ITagsItems } from '@/constants/interfaces'

import { PathStyled, SvgStyled, TitleH5Styled } from '@/theme/styled'
import {
  CardContainerStyled,
  CategoriesContainerStyled,
  CategoryItemStyled,
  ErrorStyled,
  ImgStyled,
  ImgWrapperStyled,
  InfoContainerStyled,
  InfoDateStyled,
  InfoLinkStyled,
  ListCategoriesStyled,
  ListTagsStyled,
  PopularPostContainerStyled,
  PostCardsContainerStyled,
  SideBarStyled,
  TagsContainerStyled,
  TagStyled,
  TitleItemStyled,
  TitleStyled,
} from './styled'
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from '@/containers/home/HomeSubscribeSection/styled'

const schema = yup.object().shape({
  text: yup.string().min(2, 'Too Short!').max(100, 'Too Long!'),
})

const SideBar = ({ handleTag, tagItem, handleSearch }: IProps) => {
  const formik = useFormik({
    initialValues: {
      text: '',
    },
    onSubmit: (values) => {
      handleSearch(values.text)
      formik.resetForm()
    },
    validationSchema: schema,
  })

  return (
    <SideBarStyled>
      <FormStyled onSubmit={formik.handleSubmit}>
        <LabelStyled htmlFor='email'>
          <InputStyled
            id='text'
            name='text'
            type='text'
            placeholder='Search'
            onChange={formik.handleChange}
            value={formik.values.text}
          />
          {formik.errors.text && formik.touched.text ? (
            <ErrorStyled>{formik.errors.text}</ErrorStyled>
          ) : null}
        </LabelStyled>
        <ButtonStyled type='submit'>Search</ButtonStyled>
      </FormStyled>
      <PopularPostContainerStyled>
        <TitleStyled>Popular posts</TitleStyled>
        <PostCardsContainerStyled>
          {iconsData.PopularPosts.sort((a, b) => b.view - a.view).map(
            ({ id, img, title, date, link, linkText }) => (
              <CardContainerStyled key={id}>
                <ImgWrapperStyled>
                  <ImgStyled src={img} alt={title} />
                </ImgWrapperStyled>
                <InfoContainerStyled>
                  <InfoDateStyled>{date}</InfoDateStyled>
                  <TitleH5Styled>{title}</TitleH5Styled>
                  <InfoLinkStyled href={link}>
                    {linkText}
                    <SvgStyled
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <PathStyled
                        color={themes.lightTheme.colors.primary}
                        d='M17 10.2501C17.0002 10.1373 16.9754 10.0259 16.9273 9.92389C16.8792 9.82186 16.8091 9.73178 16.722 9.66014L13.776 6.72014C13.6354 6.57969 13.4448 6.5008 13.246 6.5008C13.0472 6.5008 12.8566 6.57969 12.716 6.72014C12.6465 6.7896 12.5914 6.87207 12.5538 6.96283C12.5162 7.0536 12.4968 7.15089 12.4968 7.24914C12.4968 7.34738 12.5162 7.44467 12.5538 7.53544C12.5914 7.62621 12.6465 7.70867 12.716 7.77814L14.434 9.50014L3.75 9.50014C3.55109 9.50014 3.36032 9.57915 3.21967 9.71981C3.07902 9.86046 3 10.0512 3 10.2501C3 10.449 3.07902 10.6398 3.21967 10.7805C3.36032 10.9211 3.55109 11.0001 3.75 11.0001L14.444 11.0001L12.711 12.7221C12.6414 12.7916 12.5861 12.8741 12.5484 12.965C12.5107 13.0559 12.4913 13.1533 12.4913 13.2516C12.4913 13.35 12.5107 13.4474 12.5484 13.5383C12.5861 13.6291 12.6414 13.7117 12.711 13.7811C12.7807 13.8508 12.8634 13.9061 12.9544 13.9438C13.0454 13.9816 13.143 14.001 13.2415 14.001C13.34 14.001 13.4376 13.9816 13.5286 13.9438C13.6196 13.9061 13.7023 13.8508 13.772 13.7811L16.78 10.7771C16.8502 10.7086 16.9059 10.6266 16.9437 10.536C16.9815 10.4455 17.0006 10.3483 17 10.2501Z'
                      />
                    </SvgStyled>
                  </InfoLinkStyled>
                </InfoContainerStyled>
              </CardContainerStyled>
            ),
          )}
        </PostCardsContainerStyled>
      </PopularPostContainerStyled>
      <CategoriesContainerStyled>
        <TitleStyled>Categories</TitleStyled>
        <ListCategoriesStyled>
          {iconsData.Categories.map(({ id, title }) => (
            <CategoryItemStyled key={id}>
              <TitleItemStyled>{title}</TitleItemStyled>
              <SvgStyled
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <PathStyled
                  color={themes.lightTheme.colors.grey}
                  d='M7.73294 4.20715C7.87698 4.07009 8.06955 3.99584 8.26832 4.00071C8.46709 4.00559 8.65579 4.08919 8.79294 4.23315L13.7939 9.48315C13.9269 9.62263 14.0011 9.80794 14.0011 10.0006C14.0011 10.1934 13.9269 10.3787 13.7939 10.5181L8.79394 15.7681C8.72605 15.8395 8.64476 15.8968 8.55472 15.9368C8.46468 15.9767 8.36765 15.9986 8.26918 16.001C8.1707 16.0035 8.0727 15.9865 7.98078 15.9511C7.88886 15.9157 7.80481 15.8625 7.73344 15.7946C7.66207 15.7268 7.60476 15.6455 7.56481 15.5554C7.52485 15.4654 7.50301 15.3684 7.50055 15.2699C7.49809 15.1714 7.51505 15.0734 7.55046 14.9815C7.58588 14.8896 7.63905 14.8055 7.70694 14.7341L12.2159 10.0001L7.70594 5.26615C7.56901 5.12197 7.49494 4.92933 7.5 4.73056C7.50506 4.53179 7.58885 4.34316 7.73294 4.20615V4.20715Z'
                />
              </SvgStyled>
            </CategoryItemStyled>
          ))}
        </ListCategoriesStyled>
      </CategoriesContainerStyled>
      <TagsContainerStyled>
        <TitleStyled>Tags</TitleStyled>
        <ListTagsStyled>
          {iconsData.Tags.map(({ id, tag }) => (
            <TagStyled
              isClicked={tagItem[tag as keyof ITagsItems]}
              key={id}
              onClick={handleTag(tag)}
            >
              {tag}
            </TagStyled>
          ))}
        </ListTagsStyled>
      </TagsContainerStyled>
    </SideBarStyled>
  )
}

export default SideBar
