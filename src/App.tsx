import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import createTheme from '@mui/material/styles/createTheme';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Hero />
        <Skills />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
