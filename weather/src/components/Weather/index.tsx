import React from 'react'

import {
  IconStyled,
  InfoStyled,
  InfoSubtitleStyled,
  InfoTitleStyled,
  TempStyled,
  WrapperStyled,
} from './styled'

interface IWeatherProps {
  temp: number
  icon: string
  city: string
  weather: string
}

const Weather = ({ temp, icon, city, weather }: IWeatherProps) => {
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
}

export default Weather
