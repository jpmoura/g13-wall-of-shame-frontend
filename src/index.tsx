import 'fontsource-roboto';
import React from 'react';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import HomePage from './components/pages/home';

const theme = createTheme();
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Container>
          <HomePage />
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
