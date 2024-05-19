import React, { useState } from 'react';
import styled from 'styled-components';
import navData from './navData';
import { NavLink } from 'react-router-dom';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const NavWrapper = styled.nav<{ $isOpen?: boolean }>`
  height: 100vh;
  padding: 15px;
  background-color: #001d85;
  transition: width 0.3s ease-in-out;
`;

const IconWrapper = styled.div`
  padding: 3px;
`;

const NavItem = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

const NavItemText = styled.span<{ $isOpen?: boolean }>`
  padding-left: 16px;
  color: white;
  display: ${(props) => (props.$isOpen ? 'initial' : 'none')};
  position: relative;
  bottom: 10px;
`;

const ArrowButton = styled.button<{ $isOpen?: boolean }>`
  background-color: transparent;
  color: white;
  border-style: none;
  padding-bottom: 15px;
  padding-left: ${(props) => (props.$isOpen ? '120px' : '10px')};
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavWrapper $isOpen={isOpen}>
      <ArrowButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <KeyboardDoubleArrowLeftIcon />
        ) : (
          <KeyboardDoubleArrowRightIcon />
        )}
      </ArrowButton>
      {navData.map((n) => (
        <NavItem to={n.link}>
          <IconWrapper>
            {n.icon}
            <NavItemText $isOpen={isOpen}>{n.text}</NavItemText>
          </IconWrapper>
        </NavItem>
      ))}
    </NavWrapper>
  );
};

export default Navigation;
