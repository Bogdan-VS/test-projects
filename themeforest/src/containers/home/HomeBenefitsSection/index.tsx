import Subtitle from '@/components/Subtitle'
import { iconsData } from '@/constants/iconData'
import { PathStyled, SvgStyled } from '@/theme/styled'
import { themes } from '@/theme/theme'
import React from 'react'
import {
  BenefitsContainerStyled,
  BenefitsWrapperStyled,
  CardContainerStyled,
  CardItemStyled,
  CardlogoStyled,
  CardTitleStyled,
  LeftContainerStyled,
  TitleStyled,
} from './styled'

const HomeBenefitsSection = () => (
  <BenefitsWrapperStyled>
    <BenefitsContainerStyled>
      <LeftContainerStyled>
        <TitleStyled>The benefits of Ensome</TitleStyled>
        <Subtitle
          fontSize='20'
          width='540'
          lineHeight='33'
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        />
      </LeftContainerStyled>
      <CardContainerStyled>
        {iconsData.HomeBenefits.map(({ title, path, subtitle }) => (
          <CardItemStyled key={path}>
            <CardlogoStyled>
              <SvgStyled
                width='42'
                height='42'
                viewBox='0 0 42 42'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <PathStyled d={path} color={themes.lightTheme.colors.primary} />
              </SvgStyled>
            </CardlogoStyled>
            <CardTitleStyled>{title}</CardTitleStyled>
            <Subtitle fontSize='14' lineHeight='24' width='205' text={subtitle} />
          </CardItemStyled>
        ))}
      </CardContainerStyled>
    </BenefitsContainerStyled>
  </BenefitsWrapperStyled>
)

export default HomeBenefitsSection
