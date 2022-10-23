import { IOpenWeatherForcast, IOpenWeatherMap, IWeatherVisualCrossing } from '../../../api/types'
import { LocationType } from '../../actions/actionsTypes'
import { LocationAction } from '../../actions/locationActions'
import { IInitStateLocation, ILocation } from '../../types/locationTypes'

const initState: IInitStateLocation = {
  error: '',
  city: '',
  location: null,
  currentWeather: null,
  weatherForCast: null,
  weatherByDays: null,
}

// eslint-disable-next-line @typescript-eslint/default-param-last
const locationReducer = (state = initState, action: LocationType): IInitStateLocation => {
  switch (action.type) {
    case LocationAction.SET_LOCATION:
      return { ...state, location: action.payload as ILocation }
    case LocationAction.GET_CURRENT_WEATHER:
      return { ...state, currentWeather: action.payload as IOpenWeatherMap }
    case LocationAction.GET_WEATHER_FOR_CAST:
      return { ...state, weatherForCast: action.payload as IOpenWeatherForcast }
    case LocationAction.GET_WEATHER_BY_DAYS:
      return { ...state, weatherByDays: action.payload as IWeatherVisualCrossing }
    case LocationAction.GET_CURRENT_CITY:
      return { ...state, city: action.payload as string }
    case LocationAction.SET_ERROR:
      return { ...state, error: action.payload as string }
    default:
      return { ...state }
  }
}

export default locationReducer
