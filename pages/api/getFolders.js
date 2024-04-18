import sqlite3 from 'sqlite3';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const db = new sqlite3.Database('./db/passwords.sqlite');

    db.all('SELECT * FROM folders', (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Failed to fetch folders' });
      } else {
        res.status(200).json(rows);
      }
      
      // Close the database connection after the query execution is complete
      db.close();
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
