import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { PaletteMode } from '@mui/material';
import styled from 'styled-components';
import Fact from 'components/pages/ask';
import NationalToday from 'components/pages/national-today';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from 'components/layout/navigation';

const AppWrapper = styled.div``;

const queryClient = new QueryClient();

const CLIENT_ID = 'bf8cdaqjoqh3o5fu7fd3brc20';
// const REDIRECT_URI = 'https://the-super-app.com';
const REDIRECT_URI = 'http://localhost:8080/';
const COGNITO_LOGIN_URL =
  'https://super-app-user-domain.auth.us-east-1.amazoncognito.com/login?client_id=bf8cdaqjoqh3o5fu7fd3brc20&response_type=code&scope=email+openid+profile&redirect_uri=' +
  encodeURIComponent(REDIRECT_URI);
const COGNITO_TOKEN_URL =
  'https://super-app-user-domain.auth.us-east-1.amazoncognito.com/oauth2/token';

const App = (): JSX.Element => {
  const [accessToken, setAccessToken] = useState<string | null>(() =>
    sessionStorage.getItem('access_token')
  );
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const mode: PaletteMode = prefersDarkMode ? 'dark' : 'light';

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#dc004e',
          },
        },
      }),
    [mode]
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (!code && !accessToken) {
      window.location.replace(COGNITO_LOGIN_URL);
      return;
    }
    if (accessToken) return; // Already have token
    // If code exists, exchange it for an access token
    const fetchToken = async () => {
      try {
        const body = new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: CLIENT_ID,
          code: code!,
          redirect_uri: REDIRECT_URI,
        });
        const response = await fetch(COGNITO_TOKEN_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body,
        });
        if (!response.ok) throw new Error('Token request failed');
        const data = await response.json();
        if (data.access_token) {
          setAccessToken(data.access_token);
          sessionStorage.setItem('access_token', data.access_token);
        }
      } catch (err) {
        window.location.replace(COGNITO_LOGIN_URL);
      }
    };
    if (code) fetchToken();
  }, [location.search, accessToken]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppWrapper className="App">
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<Fact accessToken={accessToken} />} />
                <Route path="/national-today" element={<NationalToday />} />
              </Routes>
            </main>
          </AppWrapper>
        </BrowserRouter>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
