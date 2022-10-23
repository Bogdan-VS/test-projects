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
} from './styled'

interface IWeatherByDaysProps {
  date: string
  temp: number
  icon: string
  wind: number
}

const WeatherByDays = ({ date, temp, icon, wind }: IWeatherByDaysProps) => (
  <WrapperStyled>
    <DateStyled>{date}</DateStyled>
    <TempStyled>{temp}</TempStyled>
    <IconContainerStyled>
      <IconStyled icon={icon} />
    </IconContainerStyled>
    <InfoContainerStyled>
      <InfoTitleStyled>{icon}</InfoTitleStyled>
      <InfoSubtitleStyled>{`wind speed: ${wind} m/s`}</InfoSubtitleStyled>
    </InfoContainerStyled>
  </WrapperStyled>
)

export default WeatherByDays
