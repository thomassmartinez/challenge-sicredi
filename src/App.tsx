import React from 'react';
import {GlobalStyles} from './shared/globalStyles';
import {LoginProvider} from 'shared/context';
import {Routes} from 'routes';
import {BrowserRouter} from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <LoginProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </LoginProvider>
  );
};
