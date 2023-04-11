import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { SelectStyled } from '@/containers/home/HomeHeroImageSection/styled'
import { PathStyled, SvgStyled, TitleH2Styled } from '@/theme/styled'
import {
  ButtonContainerStyled,
  ButtonStyled,
  ContactsItemContainer,
  ContactsListStyled,
  ContentContainerStyled,
  DescriptionContainer,
  DescriptionStyled,
  ErrorStyled,
  FormContainerStyled,
  HeroImagesContentStyled,
  HeroImagesWrapperStyled,
  InputStyled,
  LabelStyled,
  PositionContainerStyled,
  PositionWrapperStyled,
  SubtitleItemStyled,
  SubtitlePositionStyled,
  TitleContainerStyled,
  TitleItemStyled,
} from './styled'
import { themes } from '@/theme/theme'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  theme: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  message: Yup.string().min(2, 'Too Short!').max(200, 'Too Long!').required('Required'),
})

const ContactsHeroImages = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      theme: '',
      message: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <HeroImagesWrapperStyled>
      <HeroImagesContentStyled>
        <PositionWrapperStyled>
          <PositionContainerStyled>
            <SubtitlePositionStyled>Home</SubtitlePositionStyled>
            <SubtitlePositionStyled>/</SubtitlePositionStyled>
            <SubtitlePositionStyled>Contacts</SubtitlePositionStyled>
          </PositionContainerStyled>
        </PositionWrapperStyled>
        <ContentContainerStyled>
          <TitleH2Styled>How can we {<SelectStyled>help you?</SelectStyled>}</TitleH2Styled>
          <FormContainerStyled onSubmit={formik.handleSubmit}>
            <TitleContainerStyled>
              <LabelStyled htmlFor='email'>
                <InputStyled
                  id='email'
                  name='email'
                  placeholder='Your email'
                  type='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  isError={{ error: formik.errors.email, touched: formik.touched.email }}
                />
                {formik.errors.email && formik.touched.email ? (
                  <ErrorStyled>{formik.errors.email}</ErrorStyled>
                ) : null}
              </LabelStyled>
              <LabelStyled htmlFor='firstName'>
                <InputStyled
                  id='firstName'
                  name='firstName'
                  placeholder='Your name'
                  type='text'
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  isError={{ error: formik.errors.firstName, touched: formik.touched.firstName }}
                />
                {formik.errors.firstName && formik.touched.firstName ? (
                  <ErrorStyled>{formik.errors.firstName}</ErrorStyled>
                ) : null}
              </LabelStyled>
            </TitleContainerStyled>
            <LabelStyled htmlFor='theme'>
              <InputStyled
                id='theme'
                name='theme'
                placeholder='Theme'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.theme}
                isError={{ error: formik.errors.theme, touched: formik.touched.theme }}
              />
              {formik.errors.theme && formik.touched.theme ? (
                <ErrorStyled>{formik.errors.theme}</ErrorStyled>
              ) : null}
            </LabelStyled>
            <DescriptionContainer>
              <DescriptionStyled
                id='message'
                name='message'
                readOnly
                placeholder='Your message'
                onChange={formik.handleChange}
                value={formik.values.message}
                isError={{ error: formik.errors.message, touched: formik.touched.message }}
              />
              {formik.errors.message && formik.touched.message ? (
                <ErrorStyled>{formik.errors.message}</ErrorStyled>
              ) : null}
            </DescriptionContainer>
            <ButtonContainerStyled>
              <ButtonStyled>Send</ButtonStyled>
            </ButtonContainerStyled>
          </FormContainerStyled>
        </ContentContainerStyled>
        <ContactsListStyled>
          <ContactsItemContainer>
            <TitleItemStyled>
              Email
              <SvgStyled
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <PathStyled
                  color={themes.lightTheme.colors.black}
                  d='M5 3.75C4.33696 3.75 3.70107 4.01339 3.23223 4.48223C2.76339 4.95107 2.5 5.58696 2.5 6.25V6.50125L10 10.54L17.5 6.5025V6.25C17.5 5.58696 17.2366 4.95107 16.7678 4.48223C16.2989 4.01339 15.663 3.75 15 3.75H5ZM17.5 7.92125L10.2963 11.8C10.2052 11.849 10.1034 11.8747 10 11.8747C9.89659 11.8747 9.7948 11.849 9.70375 11.8L2.5 7.92125V13.75C2.5 14.413 2.76339 15.0489 3.23223 15.5178C3.70107 15.9866 4.33696 16.25 5 16.25H15C15.663 16.25 16.2989 15.9866 16.7678 15.5178C17.2366 15.0489 17.5 14.413 17.5 13.75V7.92125Z'
                />
              </SvgStyled>
            </TitleItemStyled>
            <SubtitleItemStyled href='mailto:ensome@info.co.us'>
              ensome@info.co.us
            </SubtitleItemStyled>
          </ContactsItemContainer>
          <ContactsItemContainer>
            <TitleItemStyled>
              Phone
              <SvgStyled
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <PathStyled
                  color={themes.lightTheme.colors.black}
                  d='M8.44421 8.77986L9.78671 7.54986C10.1538 7.21288 10.4118 6.7739 10.5276 6.28925C10.6434 5.8046 10.6118 5.29639 10.4367 4.82986L9.86421 3.30111C9.65032 2.73038 9.22689 2.26267 8.68018 1.99326C8.13346 1.72385 7.5046 1.67302 6.92171 1.85111C4.77671 2.50736 3.12796 4.50111 3.63546 6.86861C3.96921 8.42611 4.60796 10.3811 5.81796 12.4611C7.03046 14.5461 8.41546 16.0861 9.60296 17.1686C11.3955 18.7999 13.958 18.3924 15.6067 16.8549C16.0487 16.4428 16.3168 15.8777 16.3566 15.2747C16.3963 14.6718 16.2046 14.0763 15.8205 13.6099L14.7705 12.3349C14.4538 11.9493 14.029 11.6673 13.5507 11.5252C13.0724 11.3831 12.5626 11.3873 12.0867 11.5374L10.3517 12.0836C9.90365 11.6212 9.511 11.1082 9.18171 10.5549C8.86388 9.9953 8.61618 9.39873 8.44421 8.77861V8.77986Z'
                />
              </SvgStyled>
            </TitleItemStyled>
            <SubtitleItemStyled href='tel:+1601-201-5580'>+1 601-201-5580</SubtitleItemStyled>
          </ContactsItemContainer>
          <ContactsItemContainer>
            <TitleItemStyled>
              Address
              <SvgStyled
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <PathStyled
                  color={themes.lightTheme.colors.black}
                  d='M11.445 18.18C13.6238 16.2625 17.5 12.345 17.5 8.75C17.5 6.76088 16.7098 4.85322 15.3033 3.4467C13.8968 2.04018 11.9891 1.25 10 1.25C8.01088 1.25 6.10322 2.04018 4.6967 3.4467C3.29018 4.85322 2.5 6.76088 2.5 8.75C2.5 12.345 6.375 16.2625 8.555 18.18C8.95264 18.5349 9.467 18.7311 10 18.7311C10.533 18.7311 11.0474 18.5349 11.445 18.18ZM7.5 8.75C7.5 8.08696 7.76339 7.45107 8.23223 6.98223C8.70107 6.51339 9.33696 6.25 10 6.25C10.663 6.25 11.2989 6.51339 11.7678 6.98223C12.2366 7.45107 12.5 8.08696 12.5 8.75C12.5 9.41304 12.2366 10.0489 11.7678 10.5178C11.2989 10.9866 10.663 11.25 10 11.25C9.33696 11.25 8.70107 10.9866 8.23223 10.5178C7.76339 10.0489 7.5 9.41304 7.5 8.75Z'
                />
              </SvgStyled>
            </TitleItemStyled>
            <SubtitleItemStyled
              href='http://maps.google.com/?q=1642 Washington Avenue, Jackson, MS, Mississippi, 39201'
              target='_blank'
            >
              1642 Washington Ave, Jackson, MS
            </SubtitleItemStyled>
          </ContactsItemContainer>
        </ContactsListStyled>
      </HeroImagesContentStyled>
    </HeroImagesWrapperStyled>
  )
}

export default ContactsHeroImages
