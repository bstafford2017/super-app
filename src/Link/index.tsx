import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
interface LinkProps {
  to: string
  text: string
}

const Link = ({ to = '', text = '' }: LinkProps): JSX.Element => {
  const [hover, setHover] = useState(false)

  const onEnter = () => {
    setHover(true)
  }

  const onLeave = () => {
    setHover(false)
  }

  const active = to === window.location.pathname

  return (
    <RouterLink
      to={to}
      style={{
        color: hover ? '#aaa' : 'white',
        textDecoration: active ? 'underline 2px' : 'none',
        padding: '25px',
        fontSize: '20px'
      }}
    >
      {text}
    </RouterLink>
  )
}

export default Link
