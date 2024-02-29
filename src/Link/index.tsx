import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
interface LinkProps {
  to: string;
  text: string;
}

const Link = ({ to = '', text = '' }: LinkProps): JSX.Element => {
  const location = useLocation();

  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const onEnter = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    setActive(to === location.pathname);
  }, [location.pathname]);

  return (
    <RouterLink
      to={to}
      style={{
        color: hover ? '#e6e6e6' : 'white',
        textDecoration: 'none',
        fontWeight: active ? 'bold' : 'none',
        padding: '25px',
        fontSize: '20px',
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {text}
    </RouterLink>
  );
};

export default Link;
