import { useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children }) => {
  const mount = document.getElementById('docs-root')
  const el = useRef(document.createElement('div'))

  useLayoutEffect(() => {
    mount.appendChild(el.current)

    return () => {
      mount.removeChild(el.current)
    }
  }, [])

  return createPortal(children, el.current)
}

export default Portal
