import styled from 'styled-components'
import { Bg, BgMain, Color, ColorText, Month, Theme } from './interfaces'

export const PriceWrapperStyled = styled.div`
  display: flex;
  width: 255px;
  height: 525px;
  padding: 35px 20px 0 20px;
  flex-direction: column;
  row-gap: 30px;
  border-radius: 6px;
  background-color: ${({ bgMain }: BgMain) => bgMain};
  box-shadow: ${({ theme }: BgMain) => theme.lightTheme.shadows.shadow_card_3};
`

export const TitleContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`

export const TitleStyled = styled.h6`
  font-weight: ${({ theme }: ColorText) => theme.lightTheme.fontWeight[700]};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ colorText }: ColorText) => colorText};
`

export const InfoContainerStyled = styled.div`
  display: flex;
  width: 215px;
  justify-content: space-between;
`

export const InfoTitleStyled = styled.h5`
  font-weight: ${({ theme }: ColorText) => theme.lightTheme.fontWeight[800]};
  font-size: 26px;
  line-height: 40px;
  letter-spacing: -0.015em;
  color: ${({ colorText }: ColorText) => colorText};
`

export const ButtonContainerStyled = styled.div`
  display: flex;
  column-gap: 10px;
`

export const InfoButtonStyled = styled.button`
  width: 41px;
  height: 32px;
  font-weight: ${({ theme }: Month) => theme.lightTheme.fontWeight[600]};
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${({ color, month, bg }: Month) => (month ? color : bg)};
  background-color: ${({ color, month, bg }: Month) => (month ? bg : color)};
  border: 1px solid ${({ bg }: Month) => bg};
  border-radius: 6px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ colorHover, month, bgHover }: Month) => (month ? bgHover : colorHover)};
  }
`

export const ButtonStyled = styled.button`
  width: 215px;
  height: 44px;
  border: none;
  border-radius: 6px;
  color: ${({ color }: Bg) => color};
  background-color: ${({ bg }: Bg) => bg};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ colorHover }: Bg) => colorHover};
    background-color: ${({ bgHover }: Bg) => bgHover};
  }
`

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const ListItemStyled = styled.li`
  position: relative;
  list-style: none;
  padding-left: 32px;

  font-family: ${({ theme }: ColorText) => theme.lightTheme.fontFamily.openSans};
  font-weight: ${({ theme }: ColorText) => theme.lightTheme.fontWeight[400]};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ colorText }: ColorText) => colorText};
`

export const SvgStyled = styled.svg`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`

export const PathStyled = styled.path`
  fill: ${({ color }: Color) => color};
`
