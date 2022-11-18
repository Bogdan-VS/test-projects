import styled from 'styled-components'

interface IstyledProps {
  icon: string
}

export const WrapperStyled = styled.div``

export const InfoWrapperStyled = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  padding-bottom: 3px;
  border-bottom: 1px solid #fff;
`

export const DateStyled = styled.h3`
  font-size: 14px;
`

export const TempStyled = styled.h4``

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
  background: ${({ icon }: IstyledProps) =>
    `top 0 left 0 / 100% 100% url('https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${icon}.png')`};
`

export const InfoContainerStyled = styled.div``

export const InfoTitleStyled = styled.p``

export const InfoSubtitleStyled = styled.p``
