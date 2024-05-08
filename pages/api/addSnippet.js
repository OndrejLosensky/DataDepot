// pages/api/addSnippet.js

import sqlite3 from 'sqlite3';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { text, code } = req.body;
        const currentDate = new Date();
        const creationDate = currentDate.toISOString().split('T')[0];

        const db = new sqlite3.Database('./db/test.sqlite');

        db.run('INSERT INTO snippet (text, code, creation_date) VALUES (?, ?, ?)', [text, code, creationDate], function(err) {
            if (err) {
                console.error(err.message);
                res.status(500).json({ error: 'Internal Server Error' });
                db.close();
                return;
            }
            
            res.status(200).json({ message: 'Snippet added successfully', snippetId: this.lastID });
            db.close();
        });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
