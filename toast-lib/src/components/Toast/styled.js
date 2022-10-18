import styled, { keyframes } from 'styled-components'

const rightAnim = keyframes`
  from {
	  transform: translateX(100%);
	  
	}
	to {
	  transform: translateX(0);
	}
`

const leftAnim = keyframes`
	from {
		transform: translateX(-100%);
		
	}
	to {
		transform: translateX(0);
	}
`

const opasity = keyframes`
	from {
		opacity: 0;
		
	}
	to {
		opacity: 1;
	}
`

export const StyledWrapper = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  position: fixed;
  z-index: 999999;

  &.top-right {
    top: ${({ indent }) => indent.firstIndent}px;
    right: ${({ indent }) => indent.secondIndent}px;
    transition: transform 0.6s ease-in-out;
    animation: ${({ animation }) =>
        animation === 'opasity' ? opasity : rightAnim}
      0.7s;
  }

  &.bottom-right {
    bottom: ${({ indent }) => indent.firstIndent}px;
    right: ${({ indent }) => indent.secondIndent}px;
    transition: transform 0.6s ease-in-out;
    animation: ${({ animation }) =>
        animation === 'opasity' ? opasity : rightAnim}
      0.7s;
  }

  &.top-left {
    top: ${({ indent }) => indent.firstIndent}px;
    left: ${({ indent }) => indent.secondIndent}px;
    transition: transform 0.6s ease-in-out;
    animation: ${({ animation }) =>
        animation === 'opasity' ? opasity : leftAnim}
      0.7s;
  }

  &.bottom-left {
    bottom: ${({ indent }) => indent.secondIndent}px;
    left: ${({ indent }) => indent.secondIndent}px;
    transition: transform 0.6s ease-in-out;
    animation: ${({ animation }) =>
        animation === 'opasity' ? opasity : leftAnim}
      0.7s;
  }
`

export const StyledNotification = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  transition: 0.3s ease;
  position: relative;
  pointer-events: auto;
  overflow: hidden;
  margin: 0 0 6px;
  padding: 20px;
  margin-bottom: 15px;
  min-width: 220px;
  max-height: 100px;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 0 10px #999;
  color: #ffffff;
  opacity: 0.9;
  background-position: 15px;
  background-repeat: no-repeat;
  cursor: grab;

  .toast {
    height: 50px;
    width: 365px;
    color: #fff;
    padding: 20px 15px 10px 10px;
  }

  &.top-right {
    top: ${({ indent }) => indent.firstIndent}px;
    right: ${({ indent }) => indent.secondIndent}px;
    transition: transform 0.6s ease-in-out;
    animation: ${({ animation }) =>
        animation === 'opasity' ? opasity : rightAnim}
      0.7s;
  }

  &.bottom-right {
    bottom: ${({ indent }) => indent.firstIndent}px;
    right: ${({ indent }) => indent.secondIndent}px;
    transition: transform 0.6s ease-in-out;
    animation: ${({ animation }) =>
        animation === 'opasity' ? opasity : rightAnim}
      0.7s;
  }

  &.top-left {
    top: ${({ indent }) => indent.firstIndent}px;
    left: ${({ indent }) => indent.secondIndent}px;
    transition: transform 0.6s ease-in-out;
    animation: ${({ animation }) =>
        animation === 'opasity' ? opasity : leftAnim}
      0.7s;
  }

  &.bottom-left {
    bottom: ${({ indent }) => indent.firstIndent}px;
    left: ${({ indent }) => indent.secondIndent}px;
    transition: transform 0.6s ease-in-out;
    animation: ${({ animation }) =>
        animation === 'opasity' ? opasity : leftAnim}
      0.7s;
  }
`

export const StyledTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 20px;
`

export const StyledSubtitle = styled.p`
  display: flex;
  justify-content: center;
  font-size: 14px;
`

export const StyledDescriptionBox = styled.div`
  display: flex;
  margin: 0 10px 0 50px;
  flex-direction: column;
  justify-content: center;
  row-gap: 5px;
`

export const StyledCloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s;
  color: #ffffff;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`

export const StyledIconContainer = styled.div`
  position: absolute;
  top: 52%;
  left: 20px;
  transform: translateY(-50%);
`
