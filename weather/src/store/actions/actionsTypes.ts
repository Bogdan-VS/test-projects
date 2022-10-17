import { IOpenWeatherMap } from '../../api/types'

export interface ILocationActions {
  type: string
}

export interface IWeatherAction {
  type: string
  payload: IOpenWeatherMap
}

export type LocationType = IWeatherAction
