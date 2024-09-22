import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes"; // Import your routes configuration
import { Provider } from "react-redux";
import { store } from "./stores";
import { ActiveCityProvider } from "./context/ActiveCityContext";

const App: React.FC = () => {
  const content = useRoutes(routes);

  return (
    <Provider store={store}>
      <ActiveCityProvider>
        <div className="">
          {/* Optional: Add a background color and ensure full height*/}
          {content}
          {/* Render the routes defined in your AppRoutes component*/}
        </div>
      </ActiveCityProvider>
    </Provider>
  );
};

export default App;
