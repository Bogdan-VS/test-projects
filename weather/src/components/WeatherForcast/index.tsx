import React from 'react'

import { IWeatherForcastProps } from './interface'
import {
  IconContainerStyled,
  IconStyled,
  SubtitleStyled,
  TempStyled,
  TitleStyled,
  WrapperContainerStyled,
  WrapperInfoStyled,
  TymeInfoStyled,
} from './styled'

const WeatherForcast = React.memo(function WeatherForcast({
  temp,
  wind,
  icon,
  description,
  time,
}: IWeatherForcastProps) {
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
      <TymeInfoStyled>{time.slice(11, time.length - 3)}</TymeInfoStyled>
    </WrapperContainerStyled>
  )
})

export default WeatherForcast
