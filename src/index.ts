import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';  // or import pg from 'pg' if using ESM

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const connectionString = process.env.DATABASE_URL!;  // Make sure ! asserts non-null
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

// Added this route
app.get('/test-db', async (req, res) => {
  try {
    const userCount = await prisma.user.count();
    res.json({ message: 'DB connected!', userCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'DB connection failed' });
  }
});

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});