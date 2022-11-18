import {
  IGoogleCalendar,
  IOpenWeatherForcast,
  IOpenWeatherMap,
  IWeatherVisualCrossing,
} from '../../api/types'
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

export interface IWeatherVisualCrossingAction {
  type: string
  payload: IWeatherVisualCrossing
}

export interface IGoogleCalendarAction {
  type: string
  payload: IGoogleCalendar | null
}

export type LocationType =
  | IWeatherAction
  | ILocationAction
  | IWeatherForcast
  | ICity
  | IErrorAction
  | IWeatherVisualCrossingAction
  | IGoogleCalendarAction
