import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Auth from './components/Auth';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
        {!user ? (
          <Auth setUser={setUser} />
        ) : (
          <Routes>
            <Route path="/" element={<ProductPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
