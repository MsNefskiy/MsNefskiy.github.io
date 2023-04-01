import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Content } from './components/Content';
import { createContext, useState } from 'react';
import { darkTheme, lightTheme } from './theme';

export interface IThemeContext {
  mode: string;
  toggleTheme?: () => void;
}

const defaultState = {
  mode: localStorage.getItem('darkMode') || 'light',
};

export const ThemeContext = createContext<IThemeContext>(defaultState);

function App() {
  const [mode, setMode] = useState(localStorage.getItem('darkMode') || 'light');

  const toggleTheme = () => {
    setMode(() => (mode === 'dark' ? 'light' : 'dark'));
  };

  const selectedTheme = mode === 'dark' ? darkTheme : lightTheme;

  return (
    <>
      <ThemeContext.Provider value={{ mode, toggleTheme }}>
        <ThemeProvider theme={selectedTheme}>
          <CssBaseline />
          <Header />
          <Hero />
          <Content />
          <Footer />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
