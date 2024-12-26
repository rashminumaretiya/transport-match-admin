import { ThemeProvider } from '@emotion/react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import theme from './shared/theme';
import AllRoutes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <AllRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
