import styled from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
  isError: {
    error: string | undefined
    touched: boolean | undefined
  }
}

export const HeroImagesWrapperStyled = styled.section`
  background-color: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.colors.white};
`

export const HeroImagesContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h2 {
    max-width: 540px;
    font-size: 80px;
    line-height: 88px;
  }
`

export const PositionWrapperStyled = styled.div`
  width: 1110px;
  margin-top: 20px;
`

export const PositionContainerStyled = styled.div`
  display: flex;
  column-gap: 7px;
`

export const SubtitlePositionStyled = styled.p`
  font-weight: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.fontWeight[500]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.colors.grey};

  &:nth-child(3) {
    color: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.colors.black};
  }
`

export const ContentContainerStyled = styled.div`
  display: flex;
  margin-top: 75px;
  column-gap: 30px;
`

export const FormContainerStyled = styled.form`
  display: flex;
  margin-top: 15px;
  width: 540px;
  flex-direction: column;
  row-gap: 20px;
`

export const TitleContainerStyled = styled.div`
  display: flex;
  column-gap: 30px;

  & input {
    width: 255px;
  }
`

export const LabelStyled = styled.label`
  position: relative;
`

export const InputStyled = styled.input`
  width: 100%;
  padding: 15px 0 15px 25px;
  border: 1px solid
    ${({ theme, isError }: IProps) =>
      isError.error && isError.touched
        ? theme.lightTheme.colors.error
        : theme.lightTheme.colors.grey};
  border-radius: 6px;

  font-family: ${({ theme }: IProps) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[600]};
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.black};

  &:focus-visible {
    outline: none;
    border: 1px solid
      ${({ theme, isError }: IProps) =>
        isError.error && isError.touched
          ? theme.lightTheme.colors.error
          : theme.lightTheme.colors.primary};
  }
`

export const ErrorStyled = styled.p`
  position: absolute;
  color: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.colors.error};
`

export const DescriptionContainer = styled.div`
  position: relative;
`

export const DescriptionStyled = styled.textarea`
  width: 100%;
  height: 140px;
  padding: 15px 0 15px 25px;
  border: 1px solid
    ${({ theme, isError }: IProps) =>
      isError.error && isError.touched
        ? theme.lightTheme.colors.error
        : theme.lightTheme.colors.grey};
  border-radius: 6px;
  resize: none;

  font-family: ${({ theme }: IProps) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: IProps) => theme.lightTheme.fontWeight[600]};
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }: IProps) => theme.lightTheme.colors.black};

  &:focus-visible {
    outline: none;
    border: 1px solid
      ${({ theme, isError }: IProps) =>
        isError.error && isError.touched
          ? theme.lightTheme.colors.error
          : theme.lightTheme.colors.primary};
  }
`

export const ButtonContainerStyled = styled.div`
  display: flex;
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

export const ContactsListStyled = styled.div`
  display: flex;
  width: 1110px;
  margin-bottom: 120px;
  column-gap: 47px;
`

export const ContactsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`

export const TitleItemStyled = styled.span`
  position: relative;
  padding-left: 32px;
  font-weight: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.fontWeight[600]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.colors.black};

  & svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const SubtitleItemStyled = styled.a`
  font-family: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.fontWeight[400]};
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.colors.grey};
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }: Omit<IProps, 'isError'>) => theme.lightTheme.colors.black};
  }
`
