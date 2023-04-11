import styled, { keyframes } from 'styled-components'

import { IThemes } from '@/theme/interfaces'

interface IProps {
  theme: IThemes
  logo: string
}

export const Opasity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const TestimonialsWrapperStyled = styled.section`
  background-color: ${({ theme }: Omit<IProps, 'logo'>) => theme.lightTheme.colors.white};
`

export const TestimonialsContentStyled = styled.div`
  display: flex;
  padding: 120px 0 60px 0;
  flex-direction: column;
  row-gap: 50px;
  align-items: center;
`

export const TopContainerStyled = styled.div`
  display: flex;
  width: 1110px;
  margin: 0 auto;
  justify-content: space-between;
`

export const TopTitleStyled = styled.h3`
  padding-top: 17px;
  font-weight: ${({ theme }: Omit<IProps, 'logo'>) => theme.lightTheme.fontWeight[800]};
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;
  color: ${({ theme }: Omit<IProps, 'logo'>) => theme.lightTheme.colors.black};
`

export const BottomContainerStyled = styled.div`
  display: flex;
  column-gap: 30px;
`

export const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  padding: 35px;
  box-shadow: ${({ theme }: Omit<IProps, 'logo'>) => theme.lightTheme.shadows.shadow_card_3};
  animation: 0.5s ${Opasity};
`

export const TitleContainerStyled = styled.div`
  display: flex;
  column-gap: 25px;
  animation: 0.5s ${Opasity};
`

export const LogoContainerStyled = styled.div`
  position: relative;
  display: flex;
  width: 80px;
  height: 80px;
  animation: 0.5s ${Opasity};
`

export const LogoStyled = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: 100% 100% url(${({ logo }: Omit<IProps, 'theme'>) => logo});
  animation: 0.5s ${Opasity};
`

export const InfoContainerStyled = styled.div`
  padding: 14px 0;
  animation: 0.5s ${Opasity};
`

export const TitleStyled = styled.h4`
  font-weight: ${({ theme }: Omit<IProps, 'logo'>) => theme.lightTheme.fontWeight[700]};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }: Omit<IProps, 'logo'>) => theme.lightTheme.colors.black};
  animation: 0.5s ${Opasity};
`

export const SubtitleStyled = styled.p`
  font-weight: ${({ theme }: Omit<IProps, 'logo'>) => theme.lightTheme.fontWeight[500]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }: Omit<IProps, 'logo'>) => theme.lightTheme.colors.grey};
  animation: 0.5s ${Opasity};
`
