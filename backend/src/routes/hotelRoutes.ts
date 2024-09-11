// hotelRoutes.ts
import { Router } from 'express';
import { getHotels, bookHotel } from '../controllers/hotelController';
import { protect } from '../middleware/authMiddleware';

export const router = Router();

router.get('/', getHotels);
router.post('/book/:id', protect, bookHotel);

export default router;
