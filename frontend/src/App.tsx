// src/App.tsx
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import NonLoggedInNav from './components/NonLoggedInNav.tsx';
import LoggedInNav from './components/LoggedInNav';
import Login from './pages/Login';
import Booking from './pages/Booking';

// Create a wrapper component to conditionally render the correct navigation
const NavigationBar: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <LoggedInNav /> : <NonLoggedInNav />;
};

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Router>
          {/* Conditionally render the correct navigation bar */}
          <NavigationBar />
          <Routes>
            <Route path="/" element={<div>Welcome to the hotel booking portal</div>} />
            <Route path="/login" element={<Login />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
