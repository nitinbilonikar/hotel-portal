import React from 'react';
import { Box, Text, Button, Image } from '@chakra-ui/react';
import { Hotel } from '../types/Hotel';  // Assuming we define Hotel type

interface HotelCardProps {
  hotel: Hotel;
  onBook: (id: number) => void;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel, onBook }) => {
  return (
    <Box p="5" shadow="md" borderWidth="1px">
      <Image src="/hotel-placeholder.jpg" alt={hotel.name} mb="4" />
      <Text fontWeight="bold">{hotel.name}</Text>
      <Text>{hotel.location}</Text>
      <Text>${hotel.price}/night</Text>
      <Button onClick={() => onBook(hotel.id)} colorScheme="teal" mt="4">
        Book Now
      </Button>
    </Box>
  );
};

export default HotelCard;
