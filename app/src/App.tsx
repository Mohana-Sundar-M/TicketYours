//Here you can Place Any Component and See that How It looks 
import React from 'react';
/*import Login from './pages/Login';*/
/*import Nav from './components/login/NavBar';*/
import Profile from './pages/Profile';
/*import Search from './pages/Search'*/
import { BrowserRouter } from 'react-router-dom';


const App: React.FC = () => {
  return (

    <div className="">
      <BrowserRouter>
      <Profile/>
      </BrowserRouter>
     
    </div>
  );
};

export default App;

