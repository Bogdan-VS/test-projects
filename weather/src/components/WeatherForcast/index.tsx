import React from 'react'

import {
  IconContainerStyled,
  IconStyled,
  SubtitleStyled,
  TempStyled,
  TitleStyled,
  WrapperContainerStyled,
  WrapperInfoStyled,
} from './styled'

interface IWeatherForcastProps {
  temp: number
  wind: number
  icon: string
  description: string
}

const WeatherForcast = ({ temp, wind, icon, description }: IWeatherForcastProps) => {
  return (
    <WrapperContainerStyled>
      <TempStyled>{`${Math.round(temp)}°`}</TempStyled>
      <IconContainerStyled>
        <IconStyled icon={icon} />
      </IconContainerStyled>
      <WrapperInfoStyled>
        <TitleStyled>{description}</TitleStyled>
        <SubtitleStyled>{`wind speed: ${wind} m/s`}</SubtitleStyled>
      </WrapperInfoStyled>
    </WrapperContainerStyled>
  )
}

export default WeatherForcast
