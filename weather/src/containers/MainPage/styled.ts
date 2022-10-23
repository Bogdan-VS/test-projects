import styled, { keyframes } from 'styled-components'

interface StyledProps {
  bg: string | null
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
  display: flex;
  width: 100vw;
  height: 100%;
  justify-content: flex-end;
  background: ${({ bg }: StyledProps) => `100% 100% / cover url('./assets/background/${bg}.jpg')`};
  animation: 0.5s ${bgAnim};
`

export const InfoWrapperStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  row-gap: 10px;
  color: #fff;
  padding: 20px;
  overflow: auto;
  transition: 0.5s ease-in-out;

  &.activeLeft {
    visibility: hidden;
    left: -320px;
  }

  &.activeRight {
    visibility: hidden;
    left: 320px;
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

export const FormStyled = styled.form`
  position: relative;
  margin: 30px 0;
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
`

export const WeatherContainerStyled = styled.div`
  position: relative;
  display: grid;
  width: 320px;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 105px);
  overflow: hidden;
`

export const SwitchBtnStyled = styled.button`
  background: #607d8b;
  border: 1px solid white;
  padding: 5px;
  border-radius: 4px;
  margin: 0 auto 10px auto;
  color: white;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    border: 1px solid #607d8b;
    background: white;
    color: #607d8b;
  }
`
