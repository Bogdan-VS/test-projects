import { useCallback, useEffect, useState } from 'react'

import uniqid from 'uniqid'

import ToastBtn from 'components/ToastBtn'
import {
  buttonList,
  defaultParams,
} from 'constants/defaultSettings'
import { Toast } from 'components/Toast'
import { Singelton } from 'utils/singelton'
import Portal from 'Portal'

import {
  StyledBtnBox,
  StyledInput,
  StyledLabel,
  StyledPosition,
  StyledWrapper,
  StyledBtn,
  StyledTitle,
  StyledPositionWrapper,
  StyledInputNum,
  StyledPositionOpt,
} from './styled'

const ToastSettings = () => {
  const [toastList, setToastList] = useState([])
  const [toastTitle, setToastTitle] = useState('')
  const [toastSubtitle, setToastSubtitle] = useState('')
  const [animation, setAnimation] = useState(
    defaultParams.animation,
  )
  const [firstIndent, setFirstIndent] = useState(
    defaultParams.indentY,
  )
  const [secondIndent, setSecondIndent] = useState(
    defaultParams.indentX,
  )
  const [colorToast, setColorToast] = useState(
    defaultParams.color,
  )
  const [position, setPosition] = useState(
    defaultParams.position,
  )
  const [delay, setDelay] = useState(defaultParams.delay)
  const [isAutoClean, setAutoClean] = useState(false)
  const [toastLimit, setToastLimit] = useState(false)
  const [toastCount, setToastCount] = useState(
    defaultParams.toastCount,
  )

  const handleCreateToast = useCallback(
    (name, icon, color, subtitle) => () => {
      const example = new Singelton()

      example.changeTitle(toastTitle ? toastTitle : name)
      example.changeColor(
        colorToast !== defaultParams.color ? colorToast : color,
      )
      example.changeSubtitle(
        toastSubtitle ? toastSubtitle : subtitle,
      )
      example.changeDelay(delay)
      example.changePosition(position)
      example.changeAnimation(animation)
      example.changeFirstIndent(firstIndent)
      example.changeSecondIndent(secondIndent)
      example.changeToastCount(toastCount)

      const data = {
        ...example.getData(),
        id: uniqid(),
        icon,
      }
      const toast = example.generateToast(data)
      example.addToast(toast)
      setToastList(example.getAllToasts())
    },
    [
      toastTitle,
      colorToast,
      toastSubtitle,
      delay,
      position,
      animation,
      firstIndent,
      secondIndent,
      toastCount,
      toastList,
    ],
  )

  const handleTitle = (e) => {
    setToastTitle(e.target.value)
  }

  const handleSubtitle = (e) => {
    setToastSubtitle(e.target.value)
  }

  const handleColor = (e) => {
    setColorToast(e.target.value)
  }

  const handleReset = () => {
    setColorToast(defaultParams.color)
    setToastTitle('')
    setToastSubtitle('')
  }

  const handlePosition = (e) => {
    setPosition(e.target.value)
  }

  const handleDelay = (e) => {
    setDelay(+e.target.value)
  }

  const handleToastCounter = (e) => {
    setToastCount(+e.target.value)
  }

  const handleCheckedClean = () => {
    setAutoClean(!isAutoClean)
  }

  const handleCheckedLimit = () => {
    const example = new Singelton()

    example.changeToastLimit(!toastLimit)
    setToastLimit(!toastLimit)
  }

  const updateToastList = (id) => {
    const example = new Singelton()

    example.removeToast(id)
    setToastList(example.getAllToasts())
  }

  const handleAnimation = (e) => {
    setAnimation(e.target.value)
  }

  const handleFirstIndent = (e) => {
    setFirstIndent(e.target.value)
  }

  const handleSecondIndent = (e) => {
    setSecondIndent(e.target.value)
  }

  return (
    <>
      <StyledWrapper>
        <StyledBtnBox>
          {buttonList.map(
            ({ name, id, icon, color, subtitle }) => (
              <ToastBtn
                key={id}
                onClick={handleCreateToast(
                  name,
                  icon,
                  color,
                  subtitle,
                )}
                color={color}
                name={name}
              />
            ),
          )}
        </StyledBtnBox>
        <StyledLabel>
          <StyledInput
            value={toastTitle}
            type="text"
            placeholder="Change title..."
            onChange={handleTitle}
          />
          <StyledInput
            value={colorToast}
            type="color"
            placeholder="Change color..."
            onChange={handleColor}
          />
          <StyledBtn onClick={handleReset}>Reset</StyledBtn>
        </StyledLabel>
        <StyledLabel>
          <StyledInput
            value={toastSubtitle}
            type="text"
            placeholder="Change subtitle..."
            onChange={handleSubtitle}
          />
        </StyledLabel>
        <StyledPositionWrapper>
          <StyledTitle>Toast position:</StyledTitle>
          <StyledPosition
            value={position}
            onChange={handlePosition}>
            <StyledPositionOpt value="top-right">
              top-right
            </StyledPositionOpt>
            <StyledPositionOpt value="bottom-right">
              bottom-right
            </StyledPositionOpt>
            <StyledPositionOpt value="top-left">
              top-left
            </StyledPositionOpt>
            <StyledPositionOpt value="bottom-left">
              bottom-left
            </StyledPositionOpt>
          </StyledPosition>
          <StyledInputNum
            value={firstIndent}
            type="number"
            onChange={handleFirstIndent}
          />
          <StyledInputNum
            value={secondIndent}
            type="number"
            onChange={handleSecondIndent}
          />
        </StyledPositionWrapper>
        <StyledPositionWrapper>
          <StyledTitle>Toast animation:</StyledTitle>
          <StyledPosition
            value={animation}
            onChange={handleAnimation}>
            <StyledPositionOpt value="transition">
              transition
            </StyledPositionOpt>
            <StyledPositionOpt value="opasity">
              opasity
            </StyledPositionOpt>
          </StyledPosition>
        </StyledPositionWrapper>
        <StyledLabel>
          <StyledTitle>Animation time:</StyledTitle>
          <StyledInput
            value={delay}
            type="number"
            onChange={handleDelay}
          />
        </StyledLabel>
        <StyledLabel>
          <StyledTitle>Auto clean</StyledTitle>
          <StyledInput
            type="checkbox"
            checked={isAutoClean}
            onChange={handleCheckedClean}
          />
        </StyledLabel>
        <StyledLabel>
          <StyledTitle>Toast limit:</StyledTitle>
          <StyledInput
            type="checkbox"
            checked={toastLimit}
            onChange={handleCheckedLimit}
          />
          <StyledInput
            value={toastCount}
            type="number"
            onChange={handleToastCounter}
          />
        </StyledLabel>
      </StyledWrapper>
      <Portal>
        <Toast
          toastList={toastList}
          position={position}
          delay={delay}
          isAutoClean={isAutoClean}
          animation={animation}
          indent={{ firstIndent, secondIndent }}
          updateToastList={updateToastList}
        />
      </Portal>
    </>
  )
}

export default ToastSettings
