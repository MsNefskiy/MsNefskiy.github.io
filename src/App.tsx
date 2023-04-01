import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import createTheme from '@mui/material/styles/createTheme';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { ThemeOptions } from '@mui/material/styles';
import { createContext, useState } from 'react';

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

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: 'rgba(0,199,255,255)',
      },
      secondary: {
        main: '#a892ff',
      },
      background: {
        default: 'rgba(0, 10, 31, 255)',
        paper: 'rgba(0, 10, 31, 255)',
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#0a2af3',
      },
      secondary: {
        main: 'rgba(0,199,255,255)',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorInherit: {
            backgroundColor: 'rgba(0, 10, 31, 255)',
            color: '#fff',
          },
        },
      },

      MuiLink: {
        styleOverrides: {
          root: {
            color: 'rgba(0,199,255,255)',
          },
        },
      },
    },
  });

  const selectedTheme = mode === 'dark' ? darkTheme : lightTheme;

  return (
    <>
      <ThemeContext.Provider value={{mode, toggleTheme}}>
        <ThemeProvider theme={selectedTheme}>
          <CssBaseline />
          <Header />
          <Hero />
          <Skills />
          <Contacts />
          <Footer />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
