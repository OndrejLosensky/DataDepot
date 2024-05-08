// pages/api/passwords.js

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const db = await open({
      filename: './db/test.sqlite',
      driver: sqlite3.Database
    });

    // Get total count
    const totalCount = await db.get('SELECT COUNT(*) as count FROM folder');

    // Get number of passwords added today
    const todayCount = await db.get('SELECT COUNT(*) as count FROM folder WHERE date_created = DATE("now")');

    // Get number of passwords added yesterday
    const yesterdayCount = await db.get('SELECT COUNT(*) as count FROM folder WHERE date_created = DATE("now", "-1 day")');

    res.status(200).json({
      totalCount: totalCount.count,
      todayCount: todayCount.count,
      yesterdayCount: yesterdayCount.count
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
