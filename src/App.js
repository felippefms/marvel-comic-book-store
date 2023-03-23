import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Hqs from './pages/Hqs';
import Characters from './pages/Characters';
import About from './pages/About';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Hqs" element={<Hqs />} />
          <Route path="/Personagens" element={<Characters />} />
          <Route path="/Sobre" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
