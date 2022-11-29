import { IThemes } from '@/theme/interfaces'

export interface IProps {
  title: string
  price: string
  bg: string
  color: string
  bgHover: string
  colorHover: string
  bgMain: string
  colorText: string
  data: string[]
}

export interface IPropsStyled {
  theme: IThemes
  color: string
  colorHover: string
  bg: string
  bgHover: string
  month: boolean
  bgMain: string
  colorText: string
}

export type Color = Pick<IPropsStyled, 'color'>
export type ColorHover = Pick<IPropsStyled, 'colorHover'>
export type Bg = Omit<IPropsStyled, 'theme' | 'month' | 'bgMain' | 'colorText'>
export type BgHover = Pick<IPropsStyled, 'bgHover'>
export type Theme = Pick<IPropsStyled, 'theme'>
export type Month = Omit<IPropsStyled, 'bgMain' | 'colorText'>
export type BgMain = Pick<IPropsStyled, 'theme' | 'bgMain'>
export type ColorText = Pick<IPropsStyled, 'theme' | 'colorText'>
