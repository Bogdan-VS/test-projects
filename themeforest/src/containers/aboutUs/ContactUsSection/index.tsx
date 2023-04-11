import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Subtitle from '@/components/Subtitle'
import { TitleH3Styled } from '@/theme/styled'

import {
  BrStyled,
  ButtonContainerStyled,
  ButtonStyled,
  CardContainerStyled,
  CardTitleStyled,
  ContactUsContentStyled,
  ContactUsWrapperStyled,
  ErrorStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
  LeftContainerStyled,
  LinkContainerStyled,
  LinkStyled,
  LinkTitleStyled,
  SubtitleContainerStyled,
  TitleContainerStyled,
} from './styled'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  theme: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  message: Yup.string().min(2, 'Too Short!').max(200, 'Too Long!').required('Required'),
})

const ContactUsSection = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      theme: '',
      message: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <ContactUsWrapperStyled>
      <ContactUsContentStyled>
        <LeftContainerStyled>
          <TitleContainerStyled>
            <TitleH3Styled>
              Left questions? Contacts us
              <BrStyled /> now for a free consultation
              <BrStyled /> and free trial!
            </TitleH3Styled>
            <Subtitle
              fontSize='16'
              lineHeight='28'
              width='540'
              text='Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.'
            />
          </TitleContainerStyled>
          <SubtitleContainerStyled>
            <LinkContainerStyled>
              <LinkTitleStyled>Email address</LinkTitleStyled>
              <LinkStyled href='mailto:ensome@info.co.us'>ensome@info.co.us</LinkStyled>
            </LinkContainerStyled>
            <LinkContainerStyled>
              <LinkTitleStyled>Phone number</LinkTitleStyled>
              <LinkStyled href='tel:+1601-201-5580'>+1601-201-5580</LinkStyled>
            </LinkContainerStyled>
            <LinkContainerStyled>
              <LinkTitleStyled>Address</LinkTitleStyled>
              <LinkStyled
                href='http://maps.google.com/?q=1642 Washington Avenue, Jackson, MS, Mississippi, 39201'
                target='_blank'
              >
                1642 Washington Avenue, Jackson, MS, Mississippi, 39201
              </LinkStyled>
            </LinkContainerStyled>
          </SubtitleContainerStyled>
        </LeftContainerStyled>
        <CardContainerStyled>
          <CardTitleStyled>Contact Us</CardTitleStyled>
          <FormStyled onSubmit={formik.handleSubmit}>
            <LabelStyled htmlFor='firstName'>
              Name
              <BrStyled />
              <InputStyled
                id='firstName'
                name='firstName'
                placeholder='Andrea'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.firstName}
                isError={{ error: formik.errors.firstName, touched: formik.touched.firstName }}
              />
              {formik.errors.firstName && formik.touched.firstName ? (
                <ErrorStyled>{formik.errors.firstName}</ErrorStyled>
              ) : null}
            </LabelStyled>
            <LabelStyled htmlFor='email'>
              Email
              <BrStyled />
              <InputStyled
                id='email'
                name='email'
                placeholder='andrea@gmaol.com'
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                isError={{ error: formik.errors.email, touched: formik.touched.email }}
              />
              {formik.errors.email && formik.touched.email ? (
                <ErrorStyled>{formik.errors.email}</ErrorStyled>
              ) : null}
            </LabelStyled>
            <LabelStyled htmlFor='theme'>
              Theme
              <BrStyled />
              <InputStyled
                id='theme'
                name='theme'
                placeholder='Job'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.theme}
                isError={{ error: formik.errors.theme, touched: formik.touched.theme }}
              />
              {formik.errors.theme && formik.touched.theme ? (
                <ErrorStyled>{formik.errors.theme}</ErrorStyled>
              ) : null}
            </LabelStyled>
            <LabelStyled htmlFor='message'>
              Message
              <BrStyled />
              <InputStyled
                id='message'
                name='message'
                placeholder='Your message'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.message}
                isError={{ error: formik.errors.message, touched: formik.touched.message }}
              />
              {formik.errors.message && formik.touched.message ? (
                <ErrorStyled>{formik.errors.message}</ErrorStyled>
              ) : null}
            </LabelStyled>
            <ButtonContainerStyled>
              <ButtonStyled type='submit'>Send</ButtonStyled>
            </ButtonContainerStyled>
          </FormStyled>
        </CardContainerStyled>
      </ContactUsContentStyled>
    </ContactUsWrapperStyled>
  )
}

export default ContactUsSection
