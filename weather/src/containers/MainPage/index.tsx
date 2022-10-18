import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Weather from '../../components/Weather'
import { RootState } from '../../store/reducers'
import { getLocationCreator } from '../../store/actions/locationActions'

import { MainWrapperStyled } from './styled'

const MainPage = () => {
  const { weather } = useSelector((state: RootState) => state.location)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLocationCreator())
  }, [])

  useEffect(() => {
    console.log(weather)
  }, [weather])

  return (
    <MainWrapperStyled bg={weather && weather.list[0].weather[0].description}>
      {weather && (
        <Weather
          temp={weather.list[0].main.temp}
          icon={weather.list[0].weather[0].icon}
          city={weather.city.name}
          weather={weather.list[0].weather[0].main}
        />
      )}
    </MainWrapperStyled>
  )
}

export default MainPage
