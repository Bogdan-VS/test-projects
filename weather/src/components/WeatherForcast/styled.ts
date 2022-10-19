import styled from 'styled-components'
import { iconLink } from '../../constants/icons'

interface IStyledProps {
  icon: string
}

export const WrapperContainerStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 10px;
`

export const TempStyled = styled.h3``

export const IconContainerStyled = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`

export const IconStyled = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ icon }: IStyledProps) => `top 0 left 0 / 100% 100% url(${iconLink}${icon}.png)`};
`

export const WrapperInfoStyled = styled.div``

export const TitleStyled = styled.h4``

export const SubtitleStyled = styled.p``
