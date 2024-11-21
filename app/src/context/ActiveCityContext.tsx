import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ActiveCityContextType {
  activeCity: string;
  activeCityId: number;
  setActiveCity: (city: string, cityId: number) => void;
}

const ActiveCityContext = createContext<ActiveCityContextType | undefined>(undefined);

export const ActiveCityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeCity, setActiveCity] = useState<string>('');
  const [activeCityId, setActiveCityId] = useState<number>(0);

  // Retrieve city data from localStorage on mount
  useEffect(() => {
    const storedCity = localStorage.getItem('activeCity');
    const storedCityId = localStorage.getItem('activeCityId');
    if (storedCity && storedCityId) {
      setActiveCity(storedCity);
      setActiveCityId(Number(storedCityId));
    } else {
      // Default values if nothing is found in localStorage
      setActiveCity('Bengalur');
      setActiveCityId(1);
    }
  }, []);

  // Save city data to localStorage whenever it changes
  const setCity = (city: string, cityId: number) => {
    setActiveCity(city);
    setActiveCityId(cityId);
    localStorage.setItem('activeCity', city);
    localStorage.setItem('activeCityId', cityId.toString());
  };

  return (
    <ActiveCityContext.Provider value={{ activeCity, activeCityId, setActiveCity: setCity }}>
      {children}
    </ActiveCityContext.Provider>
  );
};

export const useActiveCity = (): ActiveCityContextType => {
  const context = useContext(ActiveCityContext);
  if (!context) {
    throw new Error('useActiveCity must be used within an ActiveCityProvider');
  }
  return context;
};
