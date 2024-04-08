import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import multiparty from 'multiparty';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false, // Disables built-in bodyParser
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new multiparty.Form();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing form data:', err);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      
      const file = files.file[0]; // Access the first file if there are multiple files

       // Check file size
       const maxFileSize = 4194304; // 4MB in bytes
       if (file.size > maxFileSize) {
         res.status(400).json({ message: 'File size exceeds the maximum allowed limit' });
         return;
       }

      // Extract additional metadata
      const filePath = file.path;
      const fileSize = file.size;

      const db = await open({
        filename: './db/data.sqlite',
        driver: sqlite3.Database,
      });

      await db.run('CREATE TABLE IF NOT EXISTS files (id INTEGER PRIMARY KEY, name TEXT, data BLOB, path TEXT, size INTEGER, date TEXT)');
      
      // Read file data as buffer
      const fileData = fs.readFileSync(filePath);

      // Get current date and time
      const currentDate = new Date();
      
      // Format date components
      const day = currentDate.getDate().toString().padStart(2, '0');
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const year = currentDate.getFullYear();
      
      // Format time components
      const hours = currentDate.getHours().toString().padStart(2, '0');
      const minutes = currentDate.getMinutes().toString().padStart(2, '0');
      const seconds = currentDate.getSeconds().toString().padStart(2, '0');
      
      // Combine date and time components into the desired format
      const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;

      // Insert file data, additional metadata, and formatted current date into the database
      await db.run('INSERT INTO files (name, data, path, size, date) VALUES (?, ?, ?, ?, ?)', [file.originalFilename, fileData, filePath, fileSize, formattedDate]);

      // Remove the uploaded file from the temp directory
      fs.unlinkSync(filePath);

      res.status(200).json({ message: 'File uploaded successfully' });
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}