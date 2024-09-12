import { useState } from 'react';
import { login, register } from '../services/api';
import { useAuth } from '../context/AuthContext';

export const useAuthHook = () => {
  const [error, setError] = useState<string | null>(null);
  const { login: loginContext } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    try {
      const { data } = await login(email, password);
      loginContext(data.token);
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  const handleRegister = async (email: string, password: string) => {
    try {
      const { data } = await register(email, password);
      loginContext(data.token);
    } catch (error) {
      setError('Registration failed');
    }
  };

  return {
    handleLogin,
    handleRegister,
    error,
  };
};
