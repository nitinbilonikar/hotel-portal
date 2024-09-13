// src/components/NonLoggedInNav.tsx
import React from 'react';
import { Box, Button, Flex, Heading, Container } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NonLoggedInNav: React.FC = () => {
  return (
    <Box bg="teal.500" color="white" p={4}>
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between">
          <Heading size="lg">Hotel Booking Portal</Heading>
          <Flex>
           
            <Button as={RouterLink} to="/login" colorScheme="teal">
              Login
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default NonLoggedInNav;
