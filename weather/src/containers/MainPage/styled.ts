import styled, { keyframes } from 'styled-components'
import { IGoogleCalendar } from '../../api/types'

interface StyledProps {
  bg?: string | null
  calendar?: IGoogleCalendar | null
  currentWeather?: boolean
}

const bgAnim = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const MainWrapperStyled = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 340px;
  background: ${({ bg }: StyledProps) => `100% 100% / cover url('./assets/background/${bg}.jpg')`};
  animation: 0.5s ${bgAnim};

  @media (max-width: 800px) {
    height: fit-content;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-gap: ${({ calendar }: StyledProps) => (calendar ? '0px' : '100px')};
  }
`

export const CalendarWrapperStyled = styled.div`
  max-height: 375px;
  display: ${({ calendar }: StyledProps) => (calendar ? 'flex' : 'none')};
  flex-direction: column;
  row-gap: 15px;
  margin: 20px 0 20px 40px;
  overflow: auto;
  color: #fff;

  @media (max-width: 800px) {
    margin: 110px 0 20px 40px;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #607d8b;
    border-radius: 3px;
  }
`

export const InfoWrapperStyled = styled.div`
  position: absolute;
  top: 0;
  left: ${({ currentWeather }: StyledProps) => (currentWeather ? '0' : '-320px')};
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  row-gap: 10px;
  color: #fff;
  padding: 20px;
  overflow: auto;
  transition: 0.5s ease-in-out;

  ::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #607d8b;
    border-radius: 3px;
  }
`

export const FormStyled = styled.form`
  position: relative;
  margin: 30px auto;
  padding: 0 20px;
`

export const InputStyled = styled.input`
  background: transparent;
  border: none;
  padding-bottom: 5px;
  border-bottom: 2px solid #fff;
  color: #fff;
  font-size: 20px;
  padding: 10px;
  transition: 0.3s;

  &:focus,
  &:focus-visible {
    border: none;
    padding-bottom: 5px;
    border-bottom: 2px solid #fff;
    outline: none;
    padding: 10px;
    box-shadow: 0px 10px 10px 2px rgba(255, 255, 255, 0.5);
  }
`

export const ErrorMessageStyled = styled.span`
  position: absolute;
  color: #f44336;
  top: 50px;
  left: 20px;
`

export const DateStyled = styled.h5``

export const LoadingStyled = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 40px;
`

export const MainWeatherContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2a282870;

  @media (max-width: 800px) {
    background: none;
  }
`

export const WeatherContainerStyled = styled.div`
  position: relative;
  display: grid;
  width: 320px;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 145px);
  overflow: hidden;

  @media (max-width: 800px) {
    width: 290px;
    height: calc(100vh - 300px);
    margin: 0 auto;
  }
`

export const SwitchBtnStyled = styled.button`
  background-color: transparent;
  border: 1px solid white;
  padding: 5px;
  border: #fff 1px solid;
  border-radius: 4px;
  margin: 0 auto 10px auto;
  color: #fff;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.6) inset;
  }
`

export const SignBtnStyled = styled.button`
  background-color: transparent;
  padding: 5px;
  color: #fff;
  border: #fff 2px solid;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.6) inset;
  }
`

export const SignBtnWrapperStyled = styled.div`
  display: flex;
  column-gap: 5px;
  margin: 15px;
`

export const SwitchIconStyled = styled.button`
  position: absolute;
  display: flex;
  top: 4px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 40px;
  color: #fff;
  opacity: 0.7;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`

export const ErrorSignMessageStyled = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ff5722;
  font-size: 30px;

  @media (max-width: 800px) {
    top: 135px;
    font-size: 16px;
    transform: translate(-50%, 0%);
  }
`

export const LeftWrapperStyled = styled.div`
  position: relative;
`
