export interface IThemes {
  lightTheme: {
    fontFamily: {
      manrope: string
      openSans: string
    }
    fontWeight: {
      '400': number
      '500': number
      '600': number
      '700': number
      '800': number
    }
    colors: {
      primary: string
      primery_hover: string
      secondary: string
      tertiary: string
      helper_blue_1: string
      helper_blue_2: string
      helper_blue_3: string
      black: string
      white: string
      grey: string
      background: string
      error: string
    }
    shadows: {
      shadow_button: string
      shadow_card_1: string
      shadow_card_2: string
      shadow_card_3: string
      shadow_dropdown: string
    }
    borderRadius: {
      '6px': string
    }
    fontSize: {
      '16px': string
      '20px': string
      '22px': string
      '38px': string
      '46px': string
      '57px': string
    }
    lineHeight: {
      '24px': string
      '30px': string
      '33px': string
      '56px': string
      '60px': string
      '65.5px': string
    }
  }
}

export interface IPropsIcon {
  color?: string
  colorHover?: string
  colorDisabled?: string
  disabled?: boolean
}

export interface IPropsTitle {
  theme: IThemes
}
