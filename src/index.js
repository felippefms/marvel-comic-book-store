import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from './App';
import GlobalStyle from './styles/Global';

import Home from './pages/Home';
import Characters from './pages/Characters';
import Hqs from './pages/Hqs';
import About from './pages/About';

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Hqs",
    element: <Hqs />
  },
  {
    path: "/Personagens",
    element: <Characters />
  },
  {
    path: "/Sobre",
    element: <About />
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <RouterProvider router={router} />
        <App></App>
    </Provider>
  </React.StrictMode>
);