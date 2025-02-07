import React from 'react';
import { BrowserRouter  } from 'react-router-dom';
import AppRoutes from './routes'; // Import your routes configuration
import { Provider } from 'react-redux';
import { store } from './stores';
import { ActiveCityProvider } from './context/ActiveCityContext';
import { AuthProvider } from './context/AuthContext';



const App: React.FC = () => {
  return (
  <Provider store={store}>
    <AuthProvider>
      <ActiveCityProvider>
    <BrowserRouter>
      <div className=""> {/* Optional: Add a background color and ensure full height*/}
        <AppRoutes /> {/* Render the routes defined in your AppRoutes component*/ }
      </div>
    </BrowserRouter>
    </ActiveCityProvider>
    </AuthProvider>
    </Provider>
 
   
  );
};

export default App;
