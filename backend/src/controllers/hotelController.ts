import { Request, Response } from 'express';
import { getAllHotels, findHotelById, updateHotelAvailability } from '../models/hotelModel';

export const getHotels = async (req: Request, res: Response) => {
  const hotels = await getAllHotels();
  res.json(hotels);
};

export const bookHotel = async (req: Request, res: Response) => {
  const { id } = req.params;
  const hotel = await findHotelById(parseInt(id));

  if (!hotel || !hotel.availability) {
    return res.status(404).json({ message: 'Hotel not available' });
  }

  await updateHotelAvailability(hotel.id!, false);
  res.json({ message: 'Hotel booked successfully' });
};
