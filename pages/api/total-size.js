import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await open({
        filename: './db/test.sqlite',
        driver: sqlite3.Database,
      });

      const result = await db.get('SELECT SUM (size) AS total_size FROM files');
      const totalSize = result.total_size || 0;

      res.status(200).json({ totalSize });
    } catch (error) {
      console.error('Error fetching total size:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}