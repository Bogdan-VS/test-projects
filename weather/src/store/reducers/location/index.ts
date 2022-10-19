import { IOpenWeatherForcast, IOpenWeatherMap } from '../../../api/types'
import { LocationType } from '../../actions/actionsTypes'
import { LocationAction } from '../../actions/locationActions'
import { IInitStateLocation, ILocation } from '../../types/locationTypes'

const initState: IInitStateLocation = {
  city: '',
  location: null,
  currentWeather: null,
  weatherForDays: null,
}

// eslint-disable-next-line @typescript-eslint/default-param-last
const locationReducer = (state = initState, action: LocationType): IInitStateLocation => {
  switch (action.type) {
    case LocationAction.SET_LOCATION:
      console.log(action.payload)
      return { ...state, location: action.payload as ILocation }
    case LocationAction.GET_CURRENT_WEATHER:
      return { ...state, currentWeather: action.payload as IOpenWeatherMap }
    case LocationAction.GET_WEATHER_FOR_CAST:
      return { ...state, weatherForDays: action.payload as IOpenWeatherForcast }
    case LocationAction.GET_CURRENT_CITY:
      return { ...state, city: action.payload as string }
    default:
      return { ...state }
  }
}

export default locationReducer
