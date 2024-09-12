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
    const query = 'SELECT * FROM hotels WHERE id = $1';
    const values = [id];
    
    const client = await pool.connect();
    const  result = await client.query(query, values);
    const hotels = result.rows as Hotel[];
    client.release();
    return hotels.length ? hotels[0] : null;
};

export const updateHotelAvailability = async (id: number, availability: boolean): Promise<void> => {
  const query = 'UPDATE hotels SET availability = $1 WHERE id = $2';
  const values = [availability, id];
  
  const client = await pool.connect();
  await client.query(query, values);
  client.release();
};
