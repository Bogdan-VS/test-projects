import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children }) => {
  const mount = document.getElementById('docs-root')

  const [el] = useState(() => document.createElement('div'))

  useEffect(() => {
    mount.appendChild(el)

    return () => {
      mount.removeChild(el)
    }
  }, [])

  return createPortal(children, el)
}

export default Portal
