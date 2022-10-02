import uniqid from 'uniqid'

import {
  BsFillExclamationCircleFill,
  BsCheckCircleFill,
  BsFillExclamationTriangleFill,
  BsFillInfoCircleFill,
} from 'react-icons/bs'

export const buttonList = [
  {
    name: 'Error',
    subtitle: 'This is error',
    id: 1,
    icon: (
      <BsFillExclamationCircleFill size="40px" color="#ffffff" />
    ),
    color: '#ed143d',
  },
  {
    name: 'Success',
    subtitle: 'This is success',
    id: 2,
    icon: <BsCheckCircleFill size="40px" color="#ffffff" />,
    color: '#4ba256',
  },
  {
    name: 'Warning',
    subtitle: 'This is warning',
    id: 3,
    icon: (
      <BsFillExclamationTriangleFill
        size="40px"
        color="#ffffff"
      />
    ),
    color: '#de954b',
  },
  {
    name: 'Info',
    subtitle: 'This is info',
    id: 4,
    icon: <BsFillInfoCircleFill size="40px" color="#ffffff" />,
    color: '#3eabc6',
  },
]

export const defaultParams = {
  animation: 'transition',
  indentY: '12',
  indentX: '12',
  color: '#ffffff',
  position: 'top-right',
  delay: 2000,
  toastCount: 3,
}

export const defaultToastProps = [
  {
    name: 'Title',
    position: 'top-right',
    delay: 2000,
    color: '#ed143d',
    subtitle: 'Subtitle',
    animation: 'transition',
    firstIndent: '12',
    secondIndent: '12',
    toastCount: 3,
    id: uniqid(),
    icon: (
      <BsFillExclamationCircleFill size="40px" color="#ffffff" />
    ),
  },
]
