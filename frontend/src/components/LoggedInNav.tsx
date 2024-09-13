// src/components/LoggedInNav.tsx
import React from 'react';
import { Box, Button, Flex, Heading, Container } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoggedInNav: React.FC = () => {
  const { logout } = useAuth();

  return (
    <Box bg="teal.500" color="white" p={4}>
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between">
          <Heading size="lg">Hotel Booking Portal</Heading>
          <Flex>
            <Button as={RouterLink} to="/booking" variant="outline" colorScheme="teal" mr={4}>
              Book a Hotel
            </Button>
            <Button onClick={logout} colorScheme="teal">
              Logout
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default LoggedInNav;
