import sqlite3 from 'sqlite3';

export default function handler(req, res) {

  const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    const dateCreated = `${day}-${month}-${year}`;


  if (req.method === 'POST') {
    const { folderName } = req.body;

    if (!folderName || folderName.trim() === '') {
      return res.status(400).json({ error: 'Folder name is required' });
    }

    const db = new sqlite3.Database('./db/test.sqlite');

    db.run('INSERT INTO folder (name, date_created) VALUES (?, ?)', [folderName, dateCreated], function (err) {
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
