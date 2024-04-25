import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
  const folderId = req.query.folderId;

  try {
    const db = await open({
      filename: './db/test.sqlite',
      driver: sqlite3.Database,
    });

    const query = `SELECT password, username, app FROM password WHERE folder_id = ?`;
    const passwords = await db.all(query, [folderId]);

    res.json({ success: true, passwords });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
}
