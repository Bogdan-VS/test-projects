import React from 'react'
import { getEventDate } from '../../utils/date'

import { CalendarWrapperStyled, SubtitleStyled, TitleStyled } from './styled'

export interface ICalendarEvents {
  title: string
  date: string
}

const CalendarEvents = React.memo(function CalendarEvents({ title, date }: ICalendarEvents) {
  return (
    <CalendarWrapperStyled>
      <TitleStyled>{title}</TitleStyled>
      <SubtitleStyled>{getEventDate(date).date}</SubtitleStyled>
      <SubtitleStyled>{`Time: ${getEventDate(date).time}`}</SubtitleStyled>
    </CalendarWrapperStyled>
  )
})

export default CalendarEvents
