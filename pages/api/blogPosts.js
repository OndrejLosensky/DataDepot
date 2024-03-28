import sqlite3 from 'sqlite3';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const db = new sqlite3.Database('./db/db.sqlite'); // Replace with your database path

    db.serialize(() => {
      db.all('SELECT * FROM blog_posts', (err, rows) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.status(200).json(rows);
        }
      });
    });

    db.close();
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
