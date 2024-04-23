import sqlite3 from 'sqlite3';

export default function handler(req, res) {
    const db = new sqlite3.Database('db/test.sqlite');

    db.all('SELECT * FROM folder', (err, folders) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
            db.close();
            return;
        }

        Promise.all(
            folders.map(folder => {
                return new Promise((resolve, reject) => {
                    db.all('SELECT * FROM password WHERE folder_id = ?', [folder.id], (err, passwords) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        folder.passwords = passwords;
                        resolve();
                    });
                });
            })
        )
            .then(() => {
                res.status(200).json(folders);
            })
            .catch(error => {
                console.error(error.message);
                res.status(500).json({ error: 'Internal Server Error' });
            })
            .finally(() => {
                db.close();
            });
    });
}
