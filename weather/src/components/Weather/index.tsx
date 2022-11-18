import React from 'react'

import { IWeatherProps } from './interface'

import {
  IconStyled,
  InfoStyled,
  InfoSubtitleStyled,
  InfoTitleStyled,
  TempStyled,
  WrapperStyled,
} from './styled'

const Weather = React.memo(function Weather({ temp, icon, city, weather }: IWeatherProps) {
  return (
    <WrapperStyled>
      <TempStyled>{`${Math.floor(temp)}°`}</TempStyled>
      <InfoStyled>
        <InfoTitleStyled>{city}</InfoTitleStyled>
        <InfoSubtitleStyled>{weather}</InfoSubtitleStyled>
        <IconStyled icon={icon} />
      </InfoStyled>
    </WrapperStyled>
  )
})

export default Weather
