import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
}

export const SubscribeWrapperStyled = styled.section`
  background-color: ${({ theme }: IProps) => theme.lightTheme.colors.secondary};
  border-bottom: 1px solid ${({ theme }: IProps) => theme.lightTheme.colors.helper_blue_2};
`

export const SubscribeContentStyled = styled.div`
  display: flex;
  padding: 80px 0;
  column-gap: 125px;
  justify-content: center;
  align-items: center;
`

export const TitleContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`

export const TitleStyled = styled.h3`
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[800]};
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.white};
`

export const FormStyled = styled.form`
  position: relative;
`

export const LabelStyled = styled.label``

export const InputStyled = styled.input`
  width: 445px;
  height: 54px;
  padding-left: 25px;
  border: 3px solid ${({ theme }: IProps) => theme.lightTheme.colors.helper_blue_3};
  border-radius: 6px;
  background-color: ${({ theme }: IProps) => theme.lightTheme.colors.helper_blue_3};
  transition: 0.3s;

  font-family: ${({ theme }: IProps) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[600]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.black};

  &:focus-visible {
    border: 3px solid ${({ theme }: IProps) => theme.lightTheme.colors.error};
    outline: none;
  }
`

export const ButtonStyled = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 125px;
  height: 54px;
  background-color: ${({ theme }: IProps) => theme.lightTheme.colors.white};
  border: none;
  border-radius: 6px;
  transition: 0.3s;
  cursor: pointer;

  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[700]};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.black};

  &:hover {
    background-color: ${({ theme }: IProps) => theme.lightTheme.colors.tertiary};
  }
`
