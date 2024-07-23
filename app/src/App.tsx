
import React from 'react';
import Login from './pages/Login';
import Nav from './components/login/NavBar';
import Profile from './pages/Profile';



const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      
      <Profile/>
    </div>
  );
};

export default App;

