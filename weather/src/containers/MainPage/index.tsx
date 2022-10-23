import React, { useEffect, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Weather from '../../components/Weather'
import { RootState } from '../../store/reducers'
import {
  getCurrentCityCreator,
  getLocationCreator,
  getWeatherCreator,
  setCityCreator,
} from '../../store/actions/locationActions'

import {
  MainWrapperStyled,
  InfoWrapperStyled,
  FormStyled,
  InputStyled,
  DateStyled,
  LoadingStyled,
} from './styled'
import { filterWeatherForDays } from '../../utils/filterWeatherForcast'
import WeatherForcast from '../../components/WeatherForcast'
import WeatherByDays from '../../components/WeatherByDays'

const MainPage = () => {
  const { currentWeather, location, weatherForCast, city, error, weatherByDays } = useSelector(
    (state: RootState) => state.location,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLocationCreator())
  }, [])

  useEffect(() => {
    console.log(weatherByDays)
  }, [weatherByDays])

  useEffect(() => {
    console.log('loc', location)
    if (location) {
      dispatch(getWeatherCreator())
      dispatch(getCurrentCityCreator(location.city))
    }
  }, [location])

  const handleCityName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(getCurrentCityCreator(e.target.value))
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    console.log('start')
    e.preventDefault()
    dispatch(setCityCreator())
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
      {weatherForCast && (
        <InfoWrapperStyled>
          <FormStyled onSubmit={handleSubmit}>
            <InputStyled type='text' value={city} onChange={handleCityName} />
            {error && <h3>{error}</h3>}
          </FormStyled>
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
      {weatherByDays &&
        weatherByDays.location.values.map(({ temp, icon, datetimeStr, wspd }) => (
          <WeatherByDays key={datetimeStr} icon={icon} temp={temp} wind={wspd} date={datetimeStr} />
        ))}
    </MainWrapperStyled>
  )
}

export default MainPage
