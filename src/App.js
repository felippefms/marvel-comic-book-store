import React from 'react';
import GetApiInfo from './api/requests';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';

function App() {
  GetApiInfo();

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
