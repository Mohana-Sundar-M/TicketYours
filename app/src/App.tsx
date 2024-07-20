
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
    
      
      <Login />
    </div>
  );
};

export default App;

