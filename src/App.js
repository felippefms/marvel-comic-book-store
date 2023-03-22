import React from 'react';
import GetApiInfo from './api/requests';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  GetApiInfo();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
