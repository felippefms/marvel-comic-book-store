import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {HashRouter} from "react-router-dom";
import App from './App';
import GlobalStyle from './styles/Global';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <HashRouter>
      <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);