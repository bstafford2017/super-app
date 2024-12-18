import React from 'react';
import styled from 'styled-components';
import navData from './navData';
import NavItem from './nav-item';

const NavWrapper = styled.nav<{ $isOpen?: boolean }>`
  height: 100vh;
  padding: 15px;
  background-color: #001d85;
  transition: width 1s ease-in-out;
  border-radius: 0px 4px 4px 0px;
`;

const Navigation = () => {
  return (
    <NavWrapper>
      {navData.map((n) => (
        <NavItem link={n} />
      ))}
    </NavWrapper>
  );
};

export default Navigation;
