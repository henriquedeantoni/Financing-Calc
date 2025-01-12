import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles.ts';
import { theme } from './styles/theme.ts';
import { Button } from './components/atoms/Button/Button.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div>
      <Button>Clique Aqui</Button>
    </div>
  </ThemeProvider>
  );
}

export default App;
