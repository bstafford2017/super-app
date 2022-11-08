import React, { useEffect, useState } from 'react'

interface LinkProps {
  text: string
  active: boolean
  onClick(): void
}

const Link = ({
  text = '',
  active = false,
  onClick
}: LinkProps): JSX.Element => {
  const [hover, setHover] = useState(false)

  const onEnter = () => {
    setHover(true)
  }

  const onLeave = () => {
    setHover(false)
  }

  return (
    <div
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        cursor: 'pointer',
        color: hover ? '#aaa' : 'white',
        textDecoration: active ? 'underline 2px' : 'none',
        padding: '25px',
        fontSize: '20px'
      }}
    >
      {text}
    </div>
  )
}

export default Link
