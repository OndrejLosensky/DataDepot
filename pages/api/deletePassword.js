import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    const { passwordId, folderId } = req.body;

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

        if (folder.item_count <= 0) {
            await db.close();
            return res.status(400).json({ error: 'Folder item count is already at minimum' });
        }

        // Delete the password
        await db.run('DELETE FROM password WHERE id = ? AND folder_id = ?', [passwordId, folderId]);

        // Decrement the item count for the folder
        await db.run('UPDATE folder SET item_count = item_count - 1 WHERE id = ?', [folderId]);

        await db.close();

        return res.status(200).json({ success: true, message: 'Password deleted successfully' });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
