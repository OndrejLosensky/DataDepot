// pages/api/getLabels.js

// Import the necessary modules
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open the SQLite database connection
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Connect to SQLite database
  const db = await open({
    filename: './db/data.sqlite',
    driver: sqlite3.Database,
  });

  try {
    // Fetch all labels from the database
    const labels = await db.all('SELECT * FROM labels');
    // Return the labels
    res.json(labels);
  } catch (error) {
    console.error('Error fetching labels:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    // Close the database connection
    await db.close();
  }
}