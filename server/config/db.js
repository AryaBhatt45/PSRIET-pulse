import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is required to connect to PostgreSQL.');
}

let parsedDatabaseUrl;
try {
  parsedDatabaseUrl = new URL(databaseUrl);
} catch {
  throw new Error('DATABASE_URL must be a valid PostgreSQL connection string.');
}

if (!['postgres:', 'postgresql:'].includes(parsedDatabaseUrl.protocol)) {
  throw new Error('DATABASE_URL must use the PostgreSQL protocol.');
}

// Yahan hum smart check laga rahe hain: Agar Supabase ya production hai toh SSL on, warna off
const isCloudOrSupabase = databaseUrl.includes('supabase.co') || process.env.NODE_ENV === 'production';

const pool = new Pool({
  connectionString: databaseUrl,
  ssl: isCloudOrSupabase 
    ? { rejectUnauthorized: false } // Supabase ke liye flexible SSL
    : false                        // Local ke liye bilkul band
});

pool.on('error', (error) => {
  console.error('Unexpected error on idle PostgreSQL client:', error.message);
  process.exitCode = 1;
});

export default pool;