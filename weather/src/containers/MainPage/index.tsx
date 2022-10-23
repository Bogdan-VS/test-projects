import React, { useEffect, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Weather from '../../components/Weather'
import { RootState } from '../../store/reducers'
import {
  getCurrentCityCreator,
  getLocationCreator,
  getWeatherCreator,
  setCityCreator,
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
  ErrorMessageStyled,
} from './styled'
import { filterWeatherForDays } from '../../utils/filterWeatherForcast'
import WeatherForcast from '../../components/WeatherForcast'
import WeatherByDays from '../../components/WeatherByDays'

const MainPage = () => {
  const { currentWeather, location, weatherForCast, city, error, weatherByDays, isWeatherForCast } =
    useSelector((state: RootState) => state.location)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLocationCreator())
  }, [])

  useEffect(() => {
    if (location) {
      dispatch(getWeatherCreator())
      dispatch(getCurrentCityCreator(location.city))
    }
  }, [location])

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

  return (
    <MainWrapperStyled bg={currentWeather && currentWeather.weather[0].description}>
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
              <DateStyled>{`Date: ${weatherForCast.list[0].dt_txt.slice(0, 11)}`}</DateStyled>
              {filterWeatherForDays(weatherForCast).map(({ dt, main, weather, wind, dt_txt }) => (
                <WeatherForcast
                  key={dt}
                  temp={main.temp}
                  description={weather[0].description}
                  icon={weather[0].icon}
                  wind={wind.speed}
                  time={dt_txt}
                />
              ))}
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
