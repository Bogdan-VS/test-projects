import React from 'react'

import { getEventDate } from '@/utils/date'
import { ICalendarEventsProps } from './interface'

import { CalendarWrapperStyled, SubtitleStyled, TitleStyled } from './styled'

const CalendarEvents = React.memo(function CalendarEvents({ title, date }: ICalendarEventsProps) {
  return (
    <CalendarWrapperStyled>
      <TitleStyled>{title}</TitleStyled>
      <SubtitleStyled>{getEventDate(date).date}</SubtitleStyled>
      <SubtitleStyled>{`Time: ${getEventDate(date).time}`}</SubtitleStyled>
    </CalendarWrapperStyled>
  )
})

export default CalendarEvents
