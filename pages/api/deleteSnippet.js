// pages/api/deleteSnippet.js

import sqlite3 from 'sqlite3';

export default function handler(req, res) {
    if (req.method === 'DELETE') {
        const { id } = req.body;

        const db = new sqlite3.Database('db/test.sqlite');

        db.run('DELETE FROM snippet WHERE id = ?', [id], function(err) {
            if (err) {
                console.error(err.message);
                res.status(500).json({ error: 'Internal Server Error' });
                db.close();
                return;
            }
            
            if (this.changes === 0) {
                res.status(404).json({ message: 'Snippet not found' });
            } else {
                res.status(200).json({ message: 'Snippet deleted successfully' });
            }
            
            db.close();
        });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
