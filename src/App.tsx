import React from 'react';
import {GlobalStyles} from './shared/globalStyles';
import {Home} from './pages';
export const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
};
