import sqlite3 from 'sqlite3';

export default async function handler(req, res) {
    const db = new sqlite3.Database('db/test.sqlite');

    try {
        const query = `
            SELECT COUNT(*) AS totalCount 
            FROM note;
        `;

        const result = await new Promise((resolve, reject) => {
            db.get(query, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });

        const totalCount = result ? result.totalCount : 0;
        res.status(200).json({ totalCount });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        db.close();
    }
}
