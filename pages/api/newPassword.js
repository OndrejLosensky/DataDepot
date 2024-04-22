import sqlite3 from 'sqlite3';

// Function to open the SQLite database
function openDB() {
  return new sqlite3.Database('./db/test.sqlite');
}

const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = currentDate.getFullYear();
    const dateCreated = `${year}–${month}-${day}`;

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { folderId, username, password, app } = req.body;

    const db = openDB();

    // Insert the password into the database
    db.run(
      'INSERT INTO password (folder_id, username, password, app, creation_date) VALUES (?, ?, ?, ?, ?)',
      [folderId, username, password, app,dateCreated],
      function(err) {
        if (err) {
          console.error('Error inserting password:', err.message);
          res.status(500).json({ success: false, error: 'Server error' });
        } else {
          res.status(201).json({ success: true, data: { id: this.lastID } });
        }
        db.close(); // Close the database connection after the operation is complete
      }
    );
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
