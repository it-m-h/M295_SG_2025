import path from 'node:path'
import fs from 'node:fs/promises'
import { readdir, readFile, access } from 'node:fs/promises'
import { constants as fsConstants } from 'node:fs'
import sqlite3 from 'sqlite3'
import { DB_PATH } from "@src/config.js";

export async function ensureDatabase(
  dbRel: string = DB_PATH
): Promise<void> {
    const dbDir = path.dirname(DB_PATH)
    const exists = await fileExists(DB_PATH)
    if (!exists) {
    console.log('Erstelle neue leere Datenbank...')
        console.log('Datenbank existiert nicht. Initialisiere...')
    } else {
        console.log('Datenbank existiert bereits. Keine Initialisierung nötig.')
    }
}


export async function fileExists(absPath: string): Promise<boolean> {
  try {
    await access(absPath, fsConstants.F_OK)
    return true
  } catch {
    return false
  }
}