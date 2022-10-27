import styled, { keyframes } from 'styled-components'
import { iconLink } from '../../constants/icons'

const weatherAnim = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

interface IStyledProps {
  icon: string
}

export const WrapperContainerStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding-bottom: 3px;
  border-bottom: 1px solid #fff;
`

export const TempStyled = styled.h3`
  animation: ${weatherAnim} 0.5s ease-in;
`

export const IconContainerStyled = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  animation: ${weatherAnim} 0.5s ease-in;
`

export const IconStyled = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ icon }: IStyledProps) => `top 0 left 0 / 100% 100% url(${iconLink}${icon}.png)`};
  animation: ${weatherAnim} 0.5s ease-in;
`

export const TymeInfoStyled = styled.span`
  animation: ${weatherAnim} 0.5s ease-in;
`

export const WrapperInfoStyled = styled.div`
  width: 140px;
  animation: ${weatherAnim} 0.5s ease-in;
`

export const TitleStyled = styled.h4`
  animation: ${weatherAnim} 0.5s ease-in;
`

export const SubtitleStyled = styled.p`
  animation: ${weatherAnim} 0.5s ease-in;
`
