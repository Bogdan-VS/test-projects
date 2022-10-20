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

import { MainWrapperStyled, InfoWrapperStyled, FormStyled, InputStyled, DateStyled } from './styled'
import { filterWeatherForDays } from '../../utils/filterWeatherForcast'
import WeatherForcast from '../../components/WeatherForcast'

const MainPage = () => {
  const { currentWeather, location, weatherForDays, city, error } = useSelector(
    (state: RootState) => state.location,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLocationCreator())
  }, [])

  useEffect(() => {
    console.log(error)
  }, [error])

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
        <h3>Loading...</h3>
      )}
      {weatherForDays && (
        <InfoWrapperStyled>
          <FormStyled onSubmit={handleSubmit}>
            <InputStyled type='text' value={city} onChange={handleCityName} />
            {error && <h3>{error}</h3>}
          </FormStyled>
          <DateStyled>{`Date: ${weatherForDays.list[0].dt_txt.slice(0, 11)}`}</DateStyled>
          {filterWeatherForDays(weatherForDays).map(({ dt, main, weather, wind, dt_txt }) => (
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
    </MainWrapperStyled>
  )
}

export default MainPage
