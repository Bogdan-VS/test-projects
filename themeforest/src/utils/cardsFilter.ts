import { IBlog, ITestimonials } from '@/constants/interfaces'

export type IData = ITestimonials[] | IBlog[]

export const CardsFilter = (arr: IData, koef: number, count: number) => {
  const length = Math.ceil(arr.length / koef)
  const firstElement = koef * count
  const lastElement = firstElement + koef
  const sliceData = arr.slice(firstElement, lastElement)

  return {
    limit: length,
    data: sliceData,
  }
}
