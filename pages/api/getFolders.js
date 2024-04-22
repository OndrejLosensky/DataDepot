// pages/api/passwords.js

import sqlite3 from 'sqlite3';

export default function handler(req, res) {
    const db = new sqlite3.Database('db/test.sqlite');

    db.all('SELECT * FROM folder', (err, folders) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        folders.forEach((folder, index) => {
            db.all('SELECT * FROM password WHERE folder_id = ?', [folder.id], (err, passwords) => {
                if (err) {
                    console.error(err.message);
                    res.status(500).json({ error: 'Internal Server Error' });
                    return;
                }
                folders[index].passwords = passwords;
                if (index === folders.length - 1) {
                    // If this is the last folder, send the response
                    res.status(200).json(folders);
                }
            });
        });
    });

    db.close();
}
