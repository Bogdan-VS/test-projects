export interface IHomeBenefits {
  title: string
  path: string
  subtitle: string
}

export interface IArrowIcons {
  leftArrow_24: string
  rightArrow_24: string
}

export interface ITestimonials {
  logo: string
  title: string
  subtitle: string
  text: string
  id: number
}

export interface IServicesPoints {
  free: string[]
  lite: string[]
  basic: string[]
  enterprises: string[]
}

export interface IIconsData {
  SocialIcons: string[]
  LogoIcon: string[]
  HomeBenefits: IHomeBenefits[]
  ArrowIcons: IArrowIcons
  Testimonials: ITestimonials[]
  ServicesPoints: IServicesPoints
}
