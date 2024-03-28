import sqlite3 from 'sqlite3';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const db = new sqlite3.Database('./db/db.sqlite');

    db.serialize(() => {
      const postId = req.query.id; 
      db.all('SELECT * FROM comments WHERE post_id = ?', [postId], (err, rows) => {
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