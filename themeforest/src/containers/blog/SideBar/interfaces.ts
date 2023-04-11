import { ITagsItems } from '@/constants/interfaces'

export interface IProps {
  handleTag: (item: string) => () => void
  handleSearch: (text: string) => void
  tagItem: ITagsItems
}
