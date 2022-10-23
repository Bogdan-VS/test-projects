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
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: #2a282870;
  padding: 20px;
`

export const FormStyled = styled.form`
  margin: 30px 0;
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

export const DateStyled = styled.h5``

export const LoadingStyled = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 40px;
`
