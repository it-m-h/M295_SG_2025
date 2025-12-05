import path from 'node:path';
import { access } from 'node:fs/promises';
import { constants as fsConstants } from 'node:fs';
import { DB_PATH } from "../config.js";
export async function ensureDatabase(dbRel = DB_PATH) {
    const dbDir = path.dirname(DB_PATH);
    const exists = await fileExists(DB_PATH);
    if (!exists) {
        console.log('Erstelle neue leere Datenbank...');
        console.log('Datenbank existiert nicht. Initialisiere...');
    }
    else {
        console.log('Datenbank existiert bereits. Keine Initialisierung nötig.');
    }
}
export async function fileExists(absPath) {
    try {
        await access(absPath, fsConstants.F_OK);
        return true;
    }
    catch {
        return false;
    }
}
//# sourceMappingURL=ensureDatabase.js.map