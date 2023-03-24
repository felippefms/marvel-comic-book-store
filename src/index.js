import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import GlobalStyle from './styles/Global';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <GlobalStyle></GlobalStyle>
      <App></App>
    </Provider>
  </React.StrictMode>
);