import React from 'react'

import { IArticleContent } from '@/constants/interfaces'

import {
  BoldItemStyled,
  CursiveItemStyled,
  LinkItemStyled,
  SubtitleItemStyled,
  TitleItemStyled,
} from './styled'

interface IProps {
  content: IArticleContent[]
}

const ArticleContent = ({ content }: IProps) => (
  <>
    {content.map((el) => {
      switch (el.type) {
        case 'p':
          return (
            <SubtitleItemStyled key={el.id}>
              {el.text}
              {el.decorate.type && el.decorate.type === 'a' ? (
                <LinkItemStyled href='#'>{el.decorate.text}</LinkItemStyled>
              ) : el.decorate.type === 'bold' ? (
                <BoldItemStyled>{el.decorate.text}</BoldItemStyled>
              ) : (
                <CursiveItemStyled>{el.decorate.text}</CursiveItemStyled>
              )}
            </SubtitleItemStyled>
          )
          return <LinkItemStyled key={el.id}>{el.text}</LinkItemStyled>
        case 'h6':
          return <TitleItemStyled key={el.id}>{el.text}</TitleItemStyled>
      }
    })}
  </>
)

export default ArticleContent
