import pool from '../config/db';

export interface User {
  id?: number;
  email: string;
  password: string;
}

export const findUserByEmail = async (email: string): Promise<User | null> => {
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    
    const client = await pool.connect();
    const result = await client.query(query, values);
    const users = result.rows as User[];
    client.release();
  return users.length ? users[0] : null;
};

export const createUser = async (user: User): Promise<void> => {
  const query = 'INSERT INTO users (email, password) VALUES ($1, $2) ';
  const values = [user.email, user.password];
  
  const client = await pool.connect();
  await client.query(query, values);
  client.release();
};
