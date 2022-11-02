import React from 'react'

import { IWeatherByDaysProps } from './interface'
import {
  DateStyled,
  IconContainerStyled,
  IconStyled,
  InfoContainerStyled,
  InfoSubtitleStyled,
  InfoTitleStyled,
  TempStyled,
  WrapperStyled,
  InfoWrapperStyled,
} from './styled'

const WeatherByDays = React.memo(function WeatherByDays({
  date,
  temp,
  icon,
  wind,
}: IWeatherByDaysProps) {
  return (
    <WrapperStyled>
      <DateStyled>{new Date(date).toUTCString().slice(0, 16)}</DateStyled>
      <InfoWrapperStyled>
        <TempStyled>{`${Math.round(temp)}°`}</TempStyled>
        <IconContainerStyled>
          <IconStyled icon={icon} />
        </IconContainerStyled>
        <InfoContainerStyled>
          <InfoTitleStyled>{icon}</InfoTitleStyled>
          <InfoSubtitleStyled>{`wind speed: ${wind} m/s`}</InfoSubtitleStyled>
        </InfoContainerStyled>
      </InfoWrapperStyled>
    </WrapperStyled>
  )
})

export default WeatherByDays
