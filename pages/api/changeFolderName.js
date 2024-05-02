// pages/api/changeFolderName.js

import sqlite from 'sqlite';
import { open } from 'sqlite';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Open the database
      const db = await open({
        filename: './db/test.sqlite',
        driver: sqlite.Database
      });

      // Get the new folder name from the request body
      const { folderId, newName } = req.body;

      // Update the folder name in the database
      await db.run('UPDATE folder SET name = ? WHERE id = ?', [newName, folderId]);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error updating folder name:', error.message);
      res.status(500).json({ success: false, error: 'Failed to update folder name' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
