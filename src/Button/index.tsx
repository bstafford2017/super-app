import { BackgroundContext } from '../Contexts'
import React, { CSSProperties, useContext, useState } from 'react'

const buttonStyle: CSSProperties = {
  cursor: 'pointer',
  margin: '25px',
  padding: '15px',
  fontSize: '24px',
  borderRadius: '25px'
}

interface ButtonProps {
  title: string
  disabled?: boolean
  onClick(e: any): void
}

const Button = ({
  title = '',
  disabled = false,
  onClick
}: ButtonProps): JSX.Element => {
  const backgroundColor = useContext(BackgroundContext)

  const [isActive, setIsActive] = useState(false)

  const onEnter = () => {
    setIsActive(true)
  }

  const onLeave = () => {
    setIsActive(false)
  }

  return (
    <button
      style={{
        ...buttonStyle,
        backgroundColor,
        color: isActive ? '#aaa' : 'white',
        borderColor: isActive ? '#aaa' : 'white'
      }}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {title}
    </button>
  )
}

export default Button
