import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { useAuthHook } from '../hooks/useAuth';

interface AuthFormProps {
  isLogin?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin = true }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, handleRegister, error } = useAuthHook();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin(email, password);
    } else {
      handleRegister(email, password);
    }
  };

  return (
    <Box width="400px" p="6" m="auto" mt="50px" boxShadow="md" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb="4">
          <FormLabel>Email</FormLabel>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} required />
        </FormControl>
        <FormControl id="password" mb="4">
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full" mt="4">
          {isLogin ? 'Login' : 'Register'}
        </Button>
        {error && <Text color="red.500" mt="4">{error}</Text>}
      </form>
    </Box>
  );
};

export default AuthForm;
