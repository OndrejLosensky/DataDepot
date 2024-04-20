// pages/api/pass-chart.js

import sqlite3 from 'sqlite3';

export default function handler(req, res) {
    const db = new sqlite3.Database('db/test.sqlite');

    const query = `
        SELECT 
            date(creation_date) AS date, 
            count(*) AS count 
        FROM 
            password 
        WHERE 
            creation_date >= date('now', '-7 days') 
        GROUP BY 
            date(creation_date)
        ORDER BY 
            date(creation_date);
    `;

    db.all(query, (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        const data = rows.map(row => ({
            date: row.date,
            count: row.count
        }));

        res.status(200).json(data);
    });

    db.close();
}
