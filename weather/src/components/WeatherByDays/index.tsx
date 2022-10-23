import React from 'react'
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

interface IWeatherByDaysProps {
  date: string
  temp: number
  icon: string
  wind: number
}

const WeatherByDays = ({ date, temp, icon, wind }: IWeatherByDaysProps) => (
  <WrapperStyled>
    <DateStyled>{`Date: ${date.slice(0, 10)}`}</DateStyled>
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

export default WeatherByDays
