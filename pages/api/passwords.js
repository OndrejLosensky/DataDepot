// pages/api/passwords.js

import sqlite3 from 'sqlite3';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Open the SQLite database
  const db = new sqlite3.Database('./db/test.sqlite');

  // Calculate the date 7 days ago
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const formattedDate = sevenDaysAgo.toISOString().split('T')[0]; // Format as YYYY-MM-DD

  // Fetch data from the password table for the last 7 days
  db.all('SELECT creation_date, COUNT(*) AS count FROM password WHERE creation_date >= ? GROUP BY creation_date', [formattedDate], (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    // Close the database connection
    db.close();

    return res.status(200).json(rows);
  });
}
