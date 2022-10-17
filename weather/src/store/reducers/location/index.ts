import { LocationType } from '../../actions/actionsTypes'
import { LocationAction } from '../../actions/locationActions'
import { IInitStateLocation } from '../../types/locationTypes'

const initState: IInitStateLocation = {
  weather: {
    name: '',
    weather: [
      {
        main: '',
        icon: '',
      },
    ],
    main: { temp: 0 },
  },
}

// eslint-disable-next-line @typescript-eslint/default-param-last
const locationReducer = (state = initState, action: LocationType): IInitStateLocation => {
  switch (action.type) {
    case LocationAction.GET_WEATHER:
      return { ...state, weather: action.payload }
    default:
      return { ...state }
  }
}

export default locationReducer
