import path from 'node:path';
import fs from 'node:fs/promises';
import { readdir, readFile, access } from 'node:fs/promises';
import { constants as fsConstants } from 'node:fs';
import sqlite3 from 'sqlite3';
import { DB_PATH, PROJECT_ROOT } from '../config.js';
export async function ensureDatabase(dbRel = DB_PATH) {
    const dbDir = path.dirname(DB_PATH);
    const exists = await fileExists(DB_PATH);
    if (!exists) {
        console.log('Erstelle neue leere Datenbank...');
        console.log('Datenbank existiert nicht. Initialisiere...');
        await fs.writeFile(DB_PATH, '');
        await ensureMigrations();
        await ensureSeeders();
    }
    else {
        console.log('Datenbank existiert bereits. Keine Initialisierung nötig.');
    }
}
async function ensureMigrations() {
    const migrationsDir = PROJECT_ROOT + '/data/migrations';
    const sqlFiles = (await readdir(migrationsDir))
        .filter((f) => f.endsWith('.sql'))
        .sort();
    const db = await openDb();
    try {
        for (const file of sqlFiles) {
            await runSqlFile(db, path.join(migrationsDir, file));
            console.log(`✅ Migration ausgeführt: ${file}`);
        }
    }
    finally {
        db.close();
    }
}
async function ensureSeeders() {
    const seedersDir = PROJECT_ROOT + '/data/seeders';
    const sqlFiles = (await readdir(seedersDir))
        .filter((f) => f.endsWith('.sql'))
        .sort();
    const db = await openDb();
    try {
        for (const file of sqlFiles) {
            await runSqlFile(db, path.join(seedersDir, file));
            console.log(`✅ Seeder ausgeführt: ${file}`);
        }
    }
    finally {
        db.close();
    }
}
async function fileExists(absPath) {
    try {
        await access(absPath, fsConstants.F_OK);
        return true;
    }
    catch {
        return false;
    }
}
async function runSqlFile(db, filePath) {
    const sql = await readFile(filePath, 'utf-8');
    return new Promise((resolve, reject) => db.exec(sql, (err) => (err ? reject(err) : resolve())));
}
async function openDb() {
    const db = new sqlite3.Database(DB_PATH);
    return new Promise((resolve, reject) => {
        db.exec('PRAGMA foreign_keys = ON;', (err) => {
            if (err)
                reject(err);
            else
                resolve(db);
        });
    });
}
//# sourceMappingURL=ensureDatabase.js.map