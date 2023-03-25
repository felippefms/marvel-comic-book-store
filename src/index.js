import React from 'react';
import { createRoot } from 'react-dom/client';
import { store } from '../src/app/store';
import { Provider } from 'react-redux';
import App from './App';
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