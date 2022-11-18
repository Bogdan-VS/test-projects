import styled from 'styled-components'

import { iconLink } from '../../constants/icons'

interface IStyledProps {
  icon: string
}

export const WrapperStyled = styled.div`
  position: absolute;
  left: 10%;
  bottom: 10%;
  display: flex;
  column-gap: 20px;
  color: #fff;

  @media (max-width: 800px) {
    right: 10%;
    top: 10%;
    bottom: auto;
    left: auto;
  }
`

export const TempStyled = styled.h3`
  font-size: 70px;
`

export const InfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InfoTitleStyled = styled.h3`
  margin-top: 15px;
  font-size: 25px;
`

export const InfoSubtitleStyled = styled.p`
  font-size: 12px;
`

export const IconStyled = styled.span`
  position: absolute;
  top: -20px;
  width: 70px;
  height: 70px;
  background: ${({ icon }: IStyledProps) => `top 0 left 0 / 100% 100% url(${iconLink}${icon}.png)`};
`
