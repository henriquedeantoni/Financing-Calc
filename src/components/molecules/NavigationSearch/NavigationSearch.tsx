import React from 'react';
import { StyledWrapper, StyledButton } from './NavigationSearch.styles.ts';
import { SearchBar } from '../../atoms/SearchBar/SearchBar.tsx';

export const NavigationSearch = () => (
  <StyledWrapper>
    <SearchBar />
    <StyledButton>Search</StyledButton>
  </StyledWrapper>
);