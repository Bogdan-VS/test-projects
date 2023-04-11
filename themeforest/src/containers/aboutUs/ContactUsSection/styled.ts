import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
  isError: {
    error: string | undefined
    touched: boolean | undefined
  }
}

export const ContactUsWrapperStyled = styled.section``

export const ContactUsContentStyled = styled.div`
  display: flex;
  padding: 120px 0;
  justify-content: center;
  column-gap: 125px;
`

export const LeftContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 80px;
`

export const TitleContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`

export const BrStyled = styled.br``

export const SubtitleContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`

export const LinkContainerStyled = styled.div``

export const LinkTitleStyled = styled.p`
  font-family: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.fontWeight[400]};
  font-size: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.fontSize['16px']};
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.colors.grey};
`

export const LinkStyled = styled.a`
  font-family: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.fontWeight[700]};
  font-size: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.fontSize['16px']};
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.colors.black};
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.colors.grey};
  }
`

export const CardContainerStyled = styled.div`
  display: flex;
  padding: 50px;
  width: 445px;
  flex-direction: column;
  row-gap: 30px;
  background-color: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.colors.white};
  border-radius: 6px;
  box-shadow: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.shadows.shadow_card_2};
`

export const CardTitleStyled = styled.h4`
  font-weight: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.fontWeight[800]};
  font-size: 30px;
  line-height: 40px;
  letter-spacing: -0.015em;
  color: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.colors.black};
`

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const LabelStyled = styled.label`
  position: relative;
  font-family: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.fontWeight[600]};
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.colors.grey};
`

export const InputStyled = styled.input`
  padding: 5.5px 0;
  width: 100%;
  font-family: ${({ theme }: IProps) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[600]};
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.black};
  border: none;
  border-bottom: 2px solid
    ${({ isError, theme }: IProps) =>
      isError.error && isError.touched
        ? theme.lightTheme.colors.error
        : theme.lightTheme.colors.grey};

  &:focus-visible {
    outline: none;
    border: none;
    border-bottom: 2px solid ${({ theme }: IProps) => theme.lightTheme.colors.primary};
  }
`

export const ErrorStyled = styled.p`
  position: absolute;
  color: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.colors.error};
`

export const ButtonContainerStyled = styled.div`
  display: flex;
  margin-top: 83px;
  justify-content: end;
`

export const ButtonStyled = styled.button`
  display: flex;
  width: 137px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.colors.primary};
  border-radius: 6px;
  transition: 0.3s;
  cursor: pointer;

  font-weight: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.fontWeight[600]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.colors.white};

  &:hover {
    background: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.colors.primery_hover};
  }
`
