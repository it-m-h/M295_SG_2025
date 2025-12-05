import path from 'node:path'
export const PROJECT_ROOT = path.resolve(process.cwd())
export const DB_RELATIVE = 'data/database.sqlite3'

function absFromProject(relativePath: string): string {
  return path.join(PROJECT_ROOT, relativePath)
}

export const PORT = 5000
export const DB_PATH = absFromProject(DB_RELATIVE)