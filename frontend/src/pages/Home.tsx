import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@chakra-ui/react';
import HotelCard from '../components/HotelCard';
import { getHotels, bookHotel } from '../services/api';

const Home = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const { data } = await getHotels();
      setHotels(data);
    };
    fetchHotels();
  }, []);

  const handleBook = async (id: number) => {
    try {
      await bookHotel(id);
      alert('Hotel booked successfully!');
    } catch (error) {
      alert('Failed to book the hotel.');
    }
  };

  return (
    <Box p="5">
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {hotels.map((hotel) => (
          <HotelCard key={hotel} hotel={hotel} onBook={handleBook} />
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
