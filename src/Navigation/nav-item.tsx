import { Divider } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const IconWrapper = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`;

const NavLinkItem = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

const NavItemText = styled.span<{ $isOpen?: boolean }>`
  padding-left: 16px;
  color: white;
  bottom: 10px;
  &:hover {
    color: grey;
  }
`;

export interface NavItemProps {
  link: {
    id: number;
    icon: any;
    link: string;
    text: string;
  };
}

export const NavItem = ({ link }: NavItemProps) => {
  return (
    <NavLinkItem to={link.link}>
      <IconWrapper>
        <div>{link.icon}</div>
        <NavItemText>{link.text}</NavItemText>
      </IconWrapper>
      <Divider color="grey" />
    </NavLinkItem>
  );
};

export default NavItem;
