import pool from '../config/db';

export interface User {
  id?: number;
  email: string;
  password: string;
}

export const findUserByEmail = async (email: string): Promise<User | null> => {
    const client = await pool.connect();
    const res = await client.query('SELECT * FROM users WHERE email = ?', [email]);
    const users = res.rows as User[];
  return users.length ? users[0] : null;
};

export const createUser = async (user: User): Promise<void> => {
  await pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [user.email, user.password]);
};
