// pages/api/snippets-v2.js

import sqlite3 from 'sqlite3';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Open the SQLite database
  const db = new sqlite3.Database('./db/test.sqlite');

  // Fetch all data from the snippet table
  db.all('SELECT creation_date, COUNT(*) AS count FROM snippet GROUP BY creation_date', (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    // Close the database connection
    db.close();

    return res.status(200).json(rows);
  });
}
