import React from 'react';
import { Box, Flex, Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { token, logout } = useAuth();

  return (
    <Box bg="teal.500" p="4" color="white">
      <Flex justify="space-between">
        <Link as={RouterLink} to="/">
          Hotel Booking
        </Link>
        <Box>
          {!token ? (
            <>
              <Link as={RouterLink} to="/login" mr="4">
                Login
              </Link>
              <Link as={RouterLink} to="/register">
                Register
              </Link>
            </>
          ) : (
            <Button onClick={logout}>Logout</Button>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
