import { BackgroundContext } from '../Contexts';
import React, { CSSProperties, useContext, useState } from 'react';

const buttonStyle: CSSProperties = {
  cursor: 'pointer',
  margin: '25px',
  padding: '15px',
  fontFamily: 'Roboto',
  fontSize: '24px',
  borderRadius: '25px',
  borderStyle: 'solid',
};

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onClick(e: any): void;
}

const Button = ({
  title = '',
  disabled = false,
  onClick,
}: ButtonProps): JSX.Element => {
  const backgroundColor = useContext(BackgroundContext);

  const [isActive, setIsActive] = useState(false);

  const onEnter = () => {
    setIsActive(true);
  };

  const onLeave = () => {
    setIsActive(false);
  };

  return (
    <button
      style={{
        ...buttonStyle,
        color: isActive ? '#e6e6e6' : 'white',
        borderColor: isActive ? '#e6e6e6' : 'white',
        backgroundColor: 'rgba(0,0,0,0)',
      }}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {title}
    </button>
  );
};

export default Button;
