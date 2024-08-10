import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes'; // Import your routes configuration

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className=""> {/* Optional: Add a background color and ensure full height */}
        <AppRoutes /> {/* Render the routes defined in your AppRoutes component */}
      </div>
    </BrowserRouter>
  );
};

export default App;

