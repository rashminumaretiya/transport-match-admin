import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
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
