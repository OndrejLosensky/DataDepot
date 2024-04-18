import sqlite3 from 'sqlite3';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { folderName } = req.body;

    if (!folderName || folderName.trim() === '') {
      return res.status(400).json({ error: 'Folder name is required' });
    }

    const db = new sqlite3.Database('./db/passwords.sqlite');

    db.run('INSERT INTO folders (name) VALUES (?)', [folderName], function (err) {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Failed to create folder' });
      }

      return res.status(201).json({ message: 'Folder created successfully' });
    });

    db.close();
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
