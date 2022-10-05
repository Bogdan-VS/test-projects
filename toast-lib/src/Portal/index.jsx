import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children }) => {
  const mount = document.getElementById('docs-root')
  const el = document.createElement('div')

  useEffect(() => {
    mount.appendChild(el)

    return () => {
      mount.removeChild(el)
    }
  }, [mount, el])

  return createPortal(children, el)
}

export default Modal
