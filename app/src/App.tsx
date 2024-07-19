// src/App.tsx

import React from 'react';
import Login from './pages/Login';
import logo from './assets/logo.png'

const App: React.FC = () => {
  return (
    <div>
      <nav className="bg-white p-4  drop-shadow-xl">
        <div className="contain-size mx-auto flex items-center justify-between p-4">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Nearo Logo" className="h-12 w-auto" />
          </a>
        </div>
      </nav>
      <div className='p-6 bg-white'>
      <a href='#' className='text-teal-400 text-xl'>&#x2190; Back</a>
      </div>
      
      <Login />
    </div>
  );
};

export default App;

