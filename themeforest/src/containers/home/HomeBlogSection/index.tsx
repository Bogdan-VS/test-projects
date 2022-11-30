import SliderControls from '@/components/SliderControls'
import Subtitle from '@/components/Subtitle'
import { iconsData } from '@/constants/iconData'
import { useSlider } from '@/hooks/hooks'
import { PathStyled, SvgStyled } from '@/theme/styled'
import { themes } from '@/theme/theme'
import React from 'react'
import { TopLeftTitleStyled } from '../HomeFeaturesSection/styled'
import {
  BlogContentStyled,
  BlogWrapperStyled,
  BottomContainerStyled,
  CardContainerStyled,
  ContentContainerStyled,
  ImgContainerStyled,
  ImgStyled,
  LinkStyled,
  TimeStyled,
  TitleStyled,
  TopContainerStyled,
} from './styled'

const HomeBlogSection = () => {
  const { black, white, grey, incDisabled, decDisabled, handleDec, handleInc, ArrowIcons } =
    useSlider()

  return (
    <BlogWrapperStyled>
      <BlogContentStyled>
        <TopContainerStyled>
          <TopLeftTitleStyled>Our blog</TopLeftTitleStyled>
          <SliderControls
            handleInc={handleInc}
            handleDec={handleDec}
            incDisabled={incDisabled}
            decDisabled={decDisabled}
            dLeft={ArrowIcons.leftArrow_24}
            dRight={ArrowIcons.rightArrow_24}
            color={black}
            colorHover={white}
            colorDisabled={grey}
          />
        </TopContainerStyled>
        <BottomContainerStyled>
          {iconsData.Blogs.map(({ id, img, title, time, subtitle, link, linkText }) => (
            <CardContainerStyled key={id}>
              <ImgContainerStyled>
                <ImgStyled src={img} alt={title} />
              </ImgContainerStyled>
              <ContentContainerStyled>
                <TimeStyled>{time}</TimeStyled>
                <TitleStyled>{title}</TitleStyled>
                <Subtitle width='350' fontSize='16' text={subtitle} lineHeight='28' />
                <LinkStyled href={link}>
                  {linkText}
                  <SvgStyled
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <PathStyled
                      color={themes.lightTheme.colors.primary}
                      d='M17 10.2501C17.0002 10.1373 16.9754 10.0259 16.9273 9.92389C16.8792 9.82186 16.8091 9.73178 16.722 9.66014L13.776 6.72014C13.6354 6.57969 13.4448 6.5008 13.246 6.5008C13.0472 6.5008 12.8566 6.57969 12.716 6.72014C12.6465 6.7896 12.5914 6.87207 12.5538 6.96283C12.5162 7.0536 12.4968 7.15089 12.4968 7.24914C12.4968 7.34738 12.5162 7.44467 12.5538 7.53544C12.5914 7.62621 12.6465 7.70867 12.716 7.77814L14.434 9.50014L3.75 9.50014C3.55109 9.50014 3.36032 9.57915 3.21967 9.71981C3.07902 9.86046 3 10.0512 3 10.2501C3 10.449 3.07902 10.6398 3.21967 10.7805C3.36032 10.9211 3.55109 11.0001 3.75 11.0001L14.444 11.0001L12.711 12.7221C12.6414 12.7916 12.5861 12.8741 12.5484 12.965C12.5107 13.0559 12.4913 13.1533 12.4913 13.2516C12.4913 13.35 12.5107 13.4474 12.5484 13.5383C12.5861 13.6291 12.6414 13.7117 12.711 13.7811C12.7807 13.8508 12.8634 13.9061 12.9544 13.9438C13.0454 13.9816 13.143 14.001 13.2415 14.001C13.34 14.001 13.4376 13.9816 13.5286 13.9438C13.6196 13.9061 13.7023 13.8508 13.772 13.7811L16.78 10.7771C16.8502 10.7086 16.9059 10.6266 16.9437 10.536C16.9815 10.4455 17.0006 10.3483 17 10.2501Z'
                    />
                  </SvgStyled>
                </LinkStyled>
              </ContentContainerStyled>
            </CardContainerStyled>
          ))}
        </BottomContainerStyled>
      </BlogContentStyled>
    </BlogWrapperStyled>
  )
}

export default HomeBlogSection
