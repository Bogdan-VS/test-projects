import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocationCreator } from './store/actions/locationActions'
import { RootState } from './store/reducers'

const App = () => {
  const { weather } = useSelector((state: RootState) => state.location)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLocationCreator())
  }, [])

  return (
    <>
      <div className='App'>hi</div>
      {weather.name && (
        <>
          <p>{weather.name}</p>
          <span className='weather-icon owf-803'>{weather.weather[0].icon}</span>
        </>
      )}
    </>
  )
}

export default App
