// pages/api/getSnippets.js

import sqlite3 from 'sqlite3';

export default function handler(req, res) {
    if (req.method === 'GET') {
        const db = new sqlite3.Database('./db/test.sqlite');

        db.all('SELECT * FROM snippet', (err, snippets) => {
            if (err) {
                console.error(err.message);
                res.status(500).json({ error: 'Internal Server Error' });
                db.close();
                return;
            }
            
            res.status(200).json(snippets);
            db.close();
        });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
