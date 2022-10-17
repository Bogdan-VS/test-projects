import { ApiLink } from './constants'
import { IIpAPi } from './types'

export const getIp = async () => {
  const res = await fetch(ApiLink.ipapi)
  const data: IIpAPi = await res.json()
  return data
}
