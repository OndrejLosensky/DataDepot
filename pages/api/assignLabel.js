// pages/api/assignLabel.js

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fileId, labelId } = req.body;
    try {
      const db = await open({
        filename: './db/data.sqlite',
        driver: sqlite3.Database,
      });

      // Insert a record into the file_labels table
      await db.run('INSERT INTO file_labels (file_id, label_id) VALUES (?, ?)', [fileId, labelId]);
      
      res.status(200).json({ message: 'Label assigned successfully' });
    } catch (error) {
      console.error('Error assigning label:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}