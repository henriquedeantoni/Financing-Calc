import React from 'react';
import { NavLink } from '../../atoms/NavLink/NavLink.tsx';
import { NavLinksWrapper } from './NavigationLinks.Styes.ts';

export const NavigationLinks = () => (
  <NavLinksWrapper>
    <NavLink href="#home">Home</NavLink>
    <NavLink href="#about">About</NavLink>
    <NavLink href="#contact">Contact</NavLink>
  </NavLinksWrapper>
);