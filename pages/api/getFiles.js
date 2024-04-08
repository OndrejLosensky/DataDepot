import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const { fileType, sortOption, labels } = req.query;
            const db = await open({
                filename: './db/data.sqlite',
                driver: sqlite3.Database,
            });

            let query = `
                SELECT 
                    files.*, 
                    COALESCE(GROUP_CONCAT(labels.name), '') AS labelNames 
                FROM 
                    files 
                    LEFT JOIN file_labels ON files.id = file_labels.file_id 
                    LEFT JOIN labels ON file_labels.label_id = labels.id`;

            const params = [];

            if (labels) {
                const labelNames = labels.split(',');
                query += ' WHERE labels.name IN (' + labelNames.map(() => '?').join(',') + ')';
                params.push(...labelNames);
            }

            if (fileType) {
                query += labels ? ' AND files.name LIKE ?' : ' WHERE files.name LIKE ?';
                params.push(`%${fileType}`);
            }

            // Group by file ID to aggregate label names
            query += ' GROUP BY files.id';

            // Add sorting based on sortOption
            if (sortOption === 'asc') {
                query += ' ORDER BY files.name ASC';
            } else if (sortOption === 'desc') {
                query += ' ORDER BY files.name DESC';
            }

            const files = await db.all(query, params);
            res.status(200).json(files);
        } catch (error) {
            console.error('Error fetching files:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
