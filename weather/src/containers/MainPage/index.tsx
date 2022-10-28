import React, { useEffect, ChangeEvent, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Weather from '../../components/Weather'
import { RootState } from '../../store/reducers'
import {
  callCalendarCreator,
  getCurrentCityCreator,
  getLocationCreator,
  getWeatherCreator,
  setCityCreator,
  setErrorSignCreator,
  signINGoogleCreator,
  signOutGoogleCreator,
  switchWeatherCreator,
} from '../../store/actions/locationActions'

import {
  MainWrapperStyled,
  InfoWrapperStyled,
  FormStyled,
  InputStyled,
  DateStyled,
  LoadingStyled,
  MainWeatherContainerStyled,
  WeatherContainerStyled,
  SwitchBtnStyled,
  CalendarWrapperStyled,
  ErrorMessageStyled,
  SignBtnWrapperStyled,
  SignBtnStyled,
  SwitchIconStyled,
  ErrorSignMessageStyled,
  LeftWrapperStyled,
} from './styled'
import { filterWeatherForDays } from '../../utils/filterWeatherForcast'
import WeatherForcast from '../../components/WeatherForcast'
import WeatherByDays from '../../components/WeatherByDays'
import CalendarEvents from '../../components/CalendarEvents'
import { SignState } from '../../constants/variables'

const MainPage = () => {
  const {
    currentWeather,
    location,
    weatherForCast,
    city,
    error,
    weatherByDays,
    isWeatherForCast,
    calendarEvents,
    errorSign,
  } = useSelector((state: RootState) => state.location)
  const dispatch = useDispatch()

  const [coef, setCoef] = useState(0)

  useEffect(() => {
    dispatch(getLocationCreator())
  }, [])

  useEffect(() => {
    if (location) {
      dispatch(getWeatherCreator())
      dispatch(getCurrentCityCreator(location.city))
    }
  }, [location])

  useEffect(() => {
    if (errorSign) {
      setTimeout(() => {
        dispatch(setErrorSignCreator(''))
      }, 5000)
    }
  }, [errorSign])

  const handleCityName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(getCurrentCityCreator(e.target.value))
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setCityCreator())
  }

  const handleSwitchWeather = () => {
    dispatch(switchWeatherCreator())
  }

  const handleSign = (val: string) => () => {
    if (val === SignState.signIn) {
      dispatch(signINGoogleCreator())
    } else if (val === SignState.signOut) {
      dispatch(signOutGoogleCreator())
    }
  }

  const handleCalendar = () => {
    dispatch(callCalendarCreator())
  }

  const handleCoef = () => {
    if (coef < 4) {
      setCoef(coef + 1)
    } else setCoef(0)
  }

  return (
    <MainWrapperStyled calendar={calendarEvents} bg={currentWeather && currentWeather.weather[0].description}>
      <LeftWrapperStyled>
        <SignBtnWrapperStyled>
          <SignBtnStyled onClick={handleSign(SignState.signIn)}>{SignState.signIn}</SignBtnStyled>
          <SignBtnStyled onClick={handleSign(SignState.signOut)}>{SignState.signOut}</SignBtnStyled>
          {!calendarEvents && <SignBtnStyled onClick={handleCalendar}>Calendar</SignBtnStyled>}
        </SignBtnWrapperStyled>
        <CalendarWrapperStyled calendar={calendarEvents}>
          {calendarEvents &&
            calendarEvents.result.items.map(({ start, summary, id }) => (
              <CalendarEvents key={id} title={summary} date={start.dateTime} />
            ))}
          {errorSign && (
            <ErrorSignMessageStyled>
              The events of calendar will be access after registration
            </ErrorSignMessageStyled>
          )}
        </CalendarWrapperStyled>
      </LeftWrapperStyled>
      {currentWeather ? (
        <Weather
          temp={currentWeather.main.temp}
          icon={currentWeather.weather[0].icon}
          city={currentWeather.name}
          weather={currentWeather.weather[0].main}
        />
      ) : (
        <LoadingStyled>Loading...</LoadingStyled>
      )}
      <MainWeatherContainerStyled>
        <FormStyled onSubmit={handleSubmit}>
          <InputStyled type='text' value={city} onChange={handleCityName} />
          {error && <ErrorMessageStyled>{error}</ErrorMessageStyled>}
        </FormStyled>
        <SwitchBtnStyled onClick={handleSwitchWeather}>Switch weather</SwitchBtnStyled>
        <WeatherContainerStyled>
          {weatherForCast && (
            <InfoWrapperStyled className={`${!isWeatherForCast && 'activeLeft'}`}>
              <SwitchIconStyled onClick={handleCoef}>⇨</SwitchIconStyled>
              <DateStyled>
                {new Date(filterWeatherForDays(weatherForCast, coef)[coef]?.dt_txt)
                  .toUTCString()
                  .slice(0, 16)}
              </DateStyled>
              {filterWeatherForDays(weatherForCast, coef).map(
                ({ dt, main, weather, wind, dt_txt }) => (
                  <WeatherForcast
                    key={dt}
                    temp={main.temp}
                    description={weather[0].description}
                    icon={weather[0].icon}
                    wind={wind.speed}
                    time={dt_txt}
                  />
                ),
              )}
            </InfoWrapperStyled>
          )}
          {weatherByDays && (
            <InfoWrapperStyled className={`${isWeatherForCast && 'activeRight'}`}>
              {weatherByDays.location.values.map(({ temp, icon, datetimeStr, wspd }) => (
                <WeatherByDays
                  key={datetimeStr}
                  icon={icon}
                  temp={temp}
                  wind={wspd}
                  date={datetimeStr}
                />
              ))}
            </InfoWrapperStyled>
          )}
        </WeatherContainerStyled>
      </MainWeatherContainerStyled>
    </MainWrapperStyled>
  )
}

export default MainPage
