import pool from '../config/db';

export interface Hotel {
  id?: number;
  name: string;
  location: string;
  price: number;
  availability: boolean;
}

export const getAllHotels = async (): Promise<Hotel[]> => {
    // Get a client from the pool
    const client = await pool.connect();
    // Execute a query
    const res = await client.query('SELECT * FROM hotels');
    // Release the client back to the pool
    client.release();
    return res.rows as Hotel[];
};

export const findHotelById = async (id: number): Promise<Hotel | null> => {
    const client = await pool.connect();
    const res = await client.query('SELECT * FROM hotels WHERE id = ?', [id]);
    const hotels = res.rows as Hotel[];
    client.release();
    return hotels.length ? hotels[0] : null;
};

export const updateHotelAvailability = async (id: number, availability: boolean): Promise<void> => {
  await pool.query('UPDATE hotels SET availability = ? WHERE id = ?', [availability, id]);
};
