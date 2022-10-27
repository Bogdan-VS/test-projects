import React from 'react'
import { getEventDate } from '../../utils/date'

import { CalendarWrapperStyled, SubtitleStyled, TitleStyled } from './styled'

interface ICalendarEvents {
  title: string
  date: string
}

const CalendarEvents = ({ title, date }: ICalendarEvents) => (
  <CalendarWrapperStyled>
    <TitleStyled>{title}</TitleStyled>
    <SubtitleStyled>{getEventDate(date).date}</SubtitleStyled>
    <SubtitleStyled>{`Time: ${getEventDate(date).time}`}</SubtitleStyled>
  </CalendarWrapperStyled>
)

export default CalendarEvents
