import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Configure the connection pool
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432,                   // your PostgreSQL port (default is 5432)
    max: 10,                      // maximum number of clients in the pool
    idleTimeoutMillis: 3000000,     // how long a client is allowed to remain idle before being closed
    connectionTimeoutMillis: 200000 // how long to wait for a connection before timing out
  });
  
  export default pool;
