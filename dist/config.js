import path from 'node:path';
const PROJECT_ROOT = path.resolve(process.cwd());
const DB_RELATIVE = 'data/database.sqlite3';
function absFromProject(relativePath) {
    return path.join(PROJECT_ROOT, relativePath);
}
export const PORT = 5000;
export const DB_PATH = absFromProject(DB_RELATIVE);
//# sourceMappingURL=config.js.map