import React, { useState } from 'react'

import { themes } from '@/theme/theme'
import { IProps } from './interfaces'
import {
  ButtonContainerStyled,
  ButtonStyled,
  InfoButtonStyled,
  InfoContainerStyled,
  InfoTitleStyled,
  ListItemStyled,
  ListStyled,
  PriceWrapperStyled,
  TitleContainerStyled,
  TitleStyled,
  PathStyled,
  SvgStyled,
} from './styled'

const Price = ({
  title,
  price,
  bg,
  color,
  data,
  bgHover,
  colorHover,
  bgMain,
  colorText,
}: IProps) => {
  const [onMonth, setOnMonth] = useState(true)
  const [btn, setBtn] = useState(1)

  const handleClick = (val: number) => () => {
    if (btn !== val) {
      setOnMonth(!onMonth)
      setBtn(val)
    }
  }

  return (
    <PriceWrapperStyled bgMain={bgMain}>
      <TitleContainerStyled>
        <TitleStyled colorText={colorText}>{title}</TitleStyled>
        <InfoContainerStyled>
          <InfoTitleStyled colorText={colorText}>{price}</InfoTitleStyled>
          <ButtonContainerStyled>
            <InfoButtonStyled
              onClick={handleClick(1)}
              month={onMonth}
              color={color}
              bg={bg}
              colorHover={colorHover}
              bgHover={bgHover}
            >
              Mo
            </InfoButtonStyled>
            <InfoButtonStyled
              onClick={handleClick(2)}
              month={!onMonth}
              color={color}
              bg={bg}
              colorHover={colorHover}
              bgHover={bgHover}
            >
              Yr
            </InfoButtonStyled>
          </ButtonContainerStyled>
        </InfoContainerStyled>
      </TitleContainerStyled>
      <ButtonStyled bg={bg} color={color} bgHover={bgHover} colorHover={colorHover}>
        Choose plan
      </ButtonStyled>
      <ListStyled>
        {data.map((el) => (
          <ListItemStyled key={el} colorText={colorText}>
            {el}
            <SvgStyled
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <PathStyled
                color={bg}
                d='M16.3992 5.12747C16.6454 5.34607 16.7891 5.64755 16.7987 5.96563C16.8083 6.2837 16.683 6.59233 16.4503 6.82366L9.20814 14.0245C9.09077 14.141 8.94972 14.2342 8.79333 14.2987C8.63694 14.3631 8.46839 14.3975 8.29762 14.3997C8.12686 14.4019 7.95734 14.372 7.7991 14.3117C7.64086 14.2514 7.4971 14.1619 7.37631 14.0485L3.54223 10.4481C3.31648 10.2206 3.19358 9.91967 3.19942 9.60875C3.20526 9.29783 3.33939 9.00118 3.57354 8.78129C3.8077 8.56141 4.1236 8.43545 4.4547 8.42997C4.7858 8.42448 5.10623 8.53989 5.3485 8.75188L8.25388 11.4786L14.5929 5.17547C14.8257 4.94424 15.1467 4.80929 15.4854 4.80029C15.8242 4.79128 16.1528 4.90897 16.3992 5.12747Z'
              />
            </SvgStyled>
          </ListItemStyled>
        ))}
      </ListStyled>
    </PriceWrapperStyled>
  )
}

export default Price
