import React from 'react';
import GetApiInfo from './api/requests';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Hqs from './pages/Hqs';
import Characters from './pages/Hqs';
import About from './pages/Hqs';

function App() {
  GetApiInfo();

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hqs" element={<Hqs />} />
          <Route path="/Characters" element={<Characters />} />
          <Route path="/About" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
