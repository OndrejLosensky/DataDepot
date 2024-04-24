import sqlite3 from 'sqlite3';

export default function handler(req, res) {
    if (req.method !== 'DELETE') {
        res.status(405).json({ error: 'Method Not Allowed' });
        return;
    }

    const { id } = req.query;

    if (!id) {
        res.status(400).json({ error: 'Folder ID is required' });
        return;
    }

    const db = new sqlite3.Database('db/test.sqlite');

    db.run('DELETE FROM folder WHERE id = ?', [id], function(err) {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
            db.close();
            return;
        }

        if (this.changes === 0) {
            res.status(404).json({ error: 'Folder not found' });
            db.close();
            return;
        }

        res.status(200).json({ message: 'Folder deleted successfully' });
        db.close();
    });
}
