import React, { CSSProperties, useState } from 'react'

const buttonStyle: CSSProperties = {
  cursor: 'pointer',
  margin: '25px',
  padding: '15px',
  color: 'white',
  backgroundColor: '#282c34',
  fontSize: '24px',
  borderRadius: '25px',
  borderColor: 'white'
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
        backgroundColor: isActive ? '#414754' : '#313640'
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
