import React from 'react';
import styled from 'styled-components';
import { NavLink } from '../../atoms/NavLink/NavLink';

const NavLinksWrapper = styled.div`
  display: flex;
`;

export const NavigationLinks = () => (
  <NavLinksWrapper>
    <NavLink href="#home">Home</NavLink>
    <NavLink href="#about">About</NavLink>
    <NavLink href="#contact">Contact</NavLink>
  </NavLinksWrapper>
);