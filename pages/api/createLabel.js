// api/createLabel.js

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, color } = req.body;
    try {
      const db = await open({
        filename: './db/data.sqlite',
        driver: sqlite3.Database,
      });

      const query = 'INSERT INTO labels (name, color) VALUES (?, ?)';
      await db.run(query, [name, color]);
      
      res.status(201).json({ message: 'Label created successfully' });
    } catch (error) {
      console.error('Error creating label:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}