import { IOpenWeatherForcast, IOpenWeatherMap } from '../../api/types'
import { ILocation } from '../types/locationTypes'

export interface ILocationAction {
  type: string
  payload: ILocation
}

export interface IWeatherAction {
  type: string
  payload: IOpenWeatherMap
}

export interface IWeatherForcast {
  type: string
  payload: IOpenWeatherForcast
}

export interface ICity {
  type: string
  payload: string
}
export interface IErrorAction {
  type: string
  payload: string
}

export type LocationType = IWeatherAction | ILocationAction | IWeatherForcast | ICity | IErrorAction
