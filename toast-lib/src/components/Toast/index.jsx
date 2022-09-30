import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import {
  StyledCloseBtn,
  StyledNotification,
  StyledTitle,
  StyledWrapper,
  StyledIconContainer,
  StyledSubtitle,
  StyledDescriptionBox,
} from './components'

export const Toast = ({
  toastList,
  position,
  delay,
  isAutoClean,
  animation,
  indent,
  updateToastList,
}) => {
  const [list, setList] = useState(toastList)

  useEffect(() => {
    setList([...toastList])
  }, [toastList])

  useEffect(() => {
    const autoClean = setInterval(() => {
      if (list.length && toastList.length && isAutoClean) {
        handleDelete(list[0].id)()
      }
    }, delay)

    return () => {
      clearInterval(autoClean)
    }
  }, [list, toastList, isAutoClean, delay])

  const handleDelete = (id) => () => {
    const index = list.findIndex((el) => el.id === id)
    const currentList = [...list]
    currentList.splice(index, 1)

    setList(currentList)
    updateToastList(currentList)
  }

  const handleDragEnd = (id) => () => {
    handleDelete(id)()
  }

  if (toastList.length === 0) return null

  return ReactDOM.createPortal(
    <StyledWrapper
      className={position}
      animation={animation}
      indent={indent}>
      {list.map(({ name, id, icon, color, subtitle }) => (
        <StyledNotification
          className={`toast ${position}`}
          key={id}
          bgColor={color}
          animation={animation}
          indent={indent}
          draggable={true}
          onDragEnd={handleDragEnd(id)}>
          <StyledIconContainer>{icon}</StyledIconContainer>
          <StyledDescriptionBox>
            <StyledTitle>{name}</StyledTitle>
            <StyledSubtitle>{subtitle}</StyledSubtitle>
          </StyledDescriptionBox>
          <StyledCloseBtn onClick={handleDelete(id)}>
            &#10006;
          </StyledCloseBtn>
        </StyledNotification>
      ))}
    </StyledWrapper>,
    document.getElementById('popap'),
  )
}
