import sqlite3 from 'sqlite3';

export default function handler(req, res) {
    const db = new sqlite3.Database('db/test.sqlite');

    const query = `
        SELECT COUNT(*) AS totalCount 
        FROM folder;
    `;

    db.get(query, (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        const totalCount = result ? result.totalCount : 0;

        res.status(200).json({ totalCount });
        db.close();
    });
}
