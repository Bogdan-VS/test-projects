import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import Subtitle from '@/components/Subtitle'

const schema = yup.object().shape({
  email: yup.string().email('Ivalid email').required('Required'),
})

import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
  SubscribeContentStyled,
  SubscribeWrapperStyled,
  TitleContainerStyled,
  TitleStyled,
} from './styled'

const HomeSubscribeSection = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
    validationSchema: schema,
  })

  return (
    <SubscribeWrapperStyled>
      <SubscribeContentStyled>
        <TitleContainerStyled>
          <TitleStyled>Subscribe to our newsletter</TitleStyled>
          <Subtitle
            fontSize='20'
            width='540'
            lineHeight='33'
            text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
          />
        </TitleContainerStyled>
        <FormStyled onSubmit={formik.handleSubmit}>
          <LabelStyled htmlFor='email'>
            <InputStyled
              id='email'
              name='email'
              type='email'
              placeholder='Your email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </LabelStyled>
          <ButtonStyled type='submit'>Send</ButtonStyled>
        </FormStyled>
      </SubscribeContentStyled>
    </SubscribeWrapperStyled>
  )
}

export default HomeSubscribeSection
