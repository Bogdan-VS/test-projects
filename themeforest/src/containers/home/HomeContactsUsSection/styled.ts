import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
}

export const ContactsWrapperStyled = styled.section``

export const ContactsContentStyled = styled.div`
  display: flex;
  padding: 100px 0;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;

  p {
    text-align: center;
  }
`

export const TitleStyled = styled.h3`
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[800]};
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.black};
`
