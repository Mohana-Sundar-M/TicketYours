import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';


interface AuthContextType {
  user: string | null; // Store the mobile number
  token: string | null; // Authentication token
  setUser: (user: string | null) => void;
  setToken: (token: string | null) => void; // Updated to only accept token
  isLoggedIn: boolean; // Boolean to check login status
  logout: () => void; // Function to clear user session
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setTokenState] = useState<string | null>(null);

  // Load user and token from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      // If both are available, set them in state
      setUser(storedUser);
      setTokenState(storedToken);
    }
  }, []);  // This runs only once when the component mounts

  const updateUser = (newUser: string | null) => {
    setUser(newUser);
    if (newUser) {
      localStorage.setItem('user', newUser); // Save user to localStorage
    } else {
      localStorage.removeItem('user'); // Remove user from localStorage
    }
  };

  const updateToken = (newToken: string | null) => {
    setTokenState(newToken);
    if (newToken) {
      localStorage.setItem('token', newToken); // Save token to localStorage
    } else {
      localStorage.removeItem('token'); // Remove token from localStorage
    }
  };

  const logout = () => {
    updateUser(null); // Remove user from state and localStorage
    updateToken(null); // Remove token from state and localStorage
  };

  const isLoggedIn = !!user && !!token; // Check if the user is logged in

  return (
    <AuthContext.Provider value={{ user, token, setUser: updateUser, setToken: updateToken, isLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
