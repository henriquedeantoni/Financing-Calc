import React from 'react';
import { HeaderWrapper, TopRow } from './Header.Styles.ts';
import { Logo } from '../../atoms/Logo/Logo.tsx';
import { NavigationSearch } from '../../molecules/NavigationSearch/NavigationSearch.tsx';
import { Title } from '../../atoms/Title/Title.tsx';
import { NavigationLinks } from '../../molecules/NavigationLinks/NavigationLinks.tsx';

export const Header = () => (
  <HeaderWrapper>
    <TopRow>
      <Logo />
      <NavigationSearch />
    </TopRow>
    <Title />
    <NavigationLinks />
  </HeaderWrapper>
);