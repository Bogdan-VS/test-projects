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

export interface IBlog {
  id: number
  img: string
  time: string
  title: string
  subtitle: string
  link: string
  linkText: string
}

export interface IServiceCards {
  id: number
  img: string
  title: string
  subtitle: string
  link: string
  linkText: string
}

export interface IIconLogoCustomers {
  id: number
  url: string
}

export interface IArticleContent {
  id: number
  type: string
  text: string
  decorate: {
    type: string
    text: string
  }
}

interface IArticleTag {
  id: number
  title: string
}

export interface IIconsData {
  SocialIcons: string[]
  LogoIcon: string[]
  HomeBenefits: IHomeBenefits[]
  ArrowIcons: IArrowIcons
  Testimonials: ITestimonials[]
  ServicesPoints: IServicesPoints
  Blogs: IBlog[]
  ServiceCards: IServiceCards[]
  LogoIconCustomers: IIconLogoCustomers[]
}

export interface IArticles {
  id: number
  img: string
  date: string
  person: string
  title: string
  content: IArticleContent[]
  views: number
  share: string[]
  tags: IArticleTag[]
}
