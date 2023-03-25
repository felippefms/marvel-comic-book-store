import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Hqs from './pages/Hqs';
import Characters from './pages/Characters';
import About from './pages/About';
import HqViewer from './pages/HqViewer';

const router = createBrowserRouter([
  {
    path: "/marvel-comic-book-store",
    element: <Home />
  },
  {
    path: "/marvel-comic-book-store/Hqs",
    element: <Hqs />
  },
  {
    path: "/marvel-comic-book-store/Personagens",
    element: <Characters />
  },
  {
    path: "/marvel-comic-book-store/Sobre",
    element: <About />
  },
  {
    path: "/marvel-comic-book-store/HqViwer/:id",
    element: <HqViewer />
  },
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;