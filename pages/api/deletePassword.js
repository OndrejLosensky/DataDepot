// pages/api/deletePassword.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { passwordId, folderId } = req.body;

  try {
    const db = await open({
      filename: './db/test.sqlite',
      driver: sqlite3.Database
    });

    await db.run(
      `DELETE FROM password WHERE id = ? AND folder_id = ?`,
      passwordId,
      folderId
    );

    await db.close();

    return res.status(200).json({ message: 'Password deleted successfully' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
