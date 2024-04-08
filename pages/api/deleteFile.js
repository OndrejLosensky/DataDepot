import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const fileId = String(req.query.id); // Ensure fileId is treated as a string
    console.log('Deleting file with ID:', fileId); // Log the file ID

    const db = await open({
      filename: './db/data.sqlite',
      driver: sqlite3.Database,
    });

    try {
      await db.run('DELETE FROM files WHERE id = ?', [fileId]);
      console.log('File deleted successfully');
      res.status(200).json({ message: 'File deleted successfully' });
    } catch (error) {
      console.error('Error deleting file:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
