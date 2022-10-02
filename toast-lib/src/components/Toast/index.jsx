import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import {
  StyledCloseBtn,
  StyledNotification,
  StyledTitle,
  StyledWrapper,
  StyledIconContainer,
  StyledSubtitle,
  StyledDescriptionBox,
} from './components'

import {
  defaultToastProps,
  defaultParams,
} from '../../constants/defaultSettings'

const Toast = ({
  toastList = defaultToastProps,
  position = defaultParams.position,
  delay = defaultParams.delay,
  isAutoClean = false,
  animation = defaultParams.animation,
  indent = {
    firstIndent: defaultParams.indentY,
    secondIndent: defaultParams.indentX,
  },
  updateToastList,
}) => {
  const [list, setList] = useState(toastList)

  useEffect(() => {
    setList([...toastList])
  }, [toastList])

  const handleDelete = (id) => () => {
    const index = list.findIndex((el) => el.id === id)
    const currentList = [...list]
    currentList.splice(index, 1)

    setList(currentList)
    updateToastList(currentList)
  }

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
    document.getElementById('docs-root'),
  )
}

export default Toast

Toast.propTypes = {
  toastList: PropTypes.array,
  position: PropTypes.string,
  delay: PropTypes.number,
  isAutoClean: PropTypes.bool,
  animation: PropTypes.string,
  indent: PropTypes.string,
  updateToastList: PropTypes.func,
}
