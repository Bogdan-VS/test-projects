import React, { useEffect, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Weather from '../../components/Weather'
import { RootState } from '../../store/reducers'
import {
  getCurrentCityCreator,
  getLocationCreator,
  getWeatherCreator,
} from '../../store/actions/locationActions'

import { MainWrapperStyled, InfoWrapperStyled, FormStyled, InputStyled } from './styled'
import { filterWeatherForDays } from '../../utils/filterWeatherForcast'
import WeatherForcast from '../../components/WeatherForcast'

const MainPage = () => {
  const { currentWeather, location, weatherForDays, city } = useSelector(
    (state: RootState) => state.location,
  )
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
    console.log(e.target.value)
  }

  return (
    <MainWrapperStyled bg={currentWeather && currentWeather.weather[0].description}>
      {currentWeather && (
        <Weather
          temp={currentWeather.main.temp}
          icon={currentWeather.weather[0].icon}
          city={currentWeather.name}
          weather={currentWeather.weather[0].main}
        />
      )}
      {weatherForDays && (
        <InfoWrapperStyled>
          <FormStyled>
            <InputStyled type='text' value={city} onChange={handleCityName} />
          </FormStyled>
          {filterWeatherForDays(weatherForDays).map(({ dt, main, weather, wind }) => (
            <WeatherForcast
              key={dt}
              temp={main.temp}
              description={weather[0].description}
              icon={weather[0].icon}
              wind={wind.speed}
            />
          ))}
        </InfoWrapperStyled>
      )}
    </MainWrapperStyled>
  )
}

export default MainPage
