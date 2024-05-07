import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    const { folderId, username, password, app } = req.body;

    try {
        const db = await open({
            filename: './db/test.sqlite',
            driver: sqlite3.Database
        });

        // Get the current item count for the folder
        const folder = await db.get('SELECT item_count FROM folder WHERE id = ?', [folderId]);
        if (!folder) {
            await db.close();
            return res.status(404).json({ error: 'Folder not found' });
        }

        const maxItemCount = 100; // Set your maximum item count here
        if (folder.item_count >= maxItemCount) {
            await db.close();
            return res.status(400).json({ error: 'Folder item count limit exceeded' });
        }

        // Insert the password into the database with the current date
        const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
        await db.run(
            'INSERT INTO password (folder_id, username, password, app, creation_date) VALUES (?, ?, ?, ?, ?)',
            [folderId, username, password, app, currentDate]
        );

        // Increment item_count for the folder
        await db.run('UPDATE folder SET item_count = item_count + 1 WHERE id = ?', [folderId]);

        await db.close();

        return res.status(201).json({ success: true, message: 'Password added successfully' });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
