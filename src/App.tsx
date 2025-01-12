import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles.ts';
import { theme } from './styles/theme.ts';
import {HomePage} from './pages/HomePage/HomePage.tsx'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
