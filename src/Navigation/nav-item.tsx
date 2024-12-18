import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Divider } from '@mui/material';
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

const NavItemText = styled.span<{ $selected?: boolean }>`
  padding-left: 16px;
  color: ${(props) => (props.$selected ? 'grey' : 'white')};
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
  let location = useLocation();

  const selected = location.pathname === link.link;

  return (
    <NavLinkItem to={link.link}>
      <IconWrapper>
        <div>{link.icon}</div>
        <NavItemText $selected={selected}>{link.text}</NavItemText>
      </IconWrapper>
      <Divider color="grey" />
    </NavLinkItem>
  );
};

export default NavItem;
