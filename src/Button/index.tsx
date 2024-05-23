import styled from 'styled-components';
import { BackgroundContext } from '../Contexts';
import React, { CSSProperties, useContext, useState } from 'react';

const CustomButton = styled.button`
  cursor: pointer;
  margin: 25px;
  padding: 15px;
  font-family: 'Roboto';
  font-size: 24px;
  border-radius: 25px;
  border-style: solid;
`;

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
    <CustomButton
      style={{
        color: isActive ? '#707070' : 'black',
        borderColor: isActive ? '#707070' : 'black',
        backgroundColor: 'rgba(0,0,0,0)',
      }}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {title}
    </CustomButton>
  );
};

export default Button;
