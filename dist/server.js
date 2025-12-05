import { app } from './app.js';
import { PORT } from './config.js';
import { ensureDatabase } from './lib/ensureDatabase.js';
const startServer = async () => {
    await ensureDatabase();
    app.listen(PORT, () => console.log(`Server läuft auf http://localhost:${PORT}`));
};
startServer().catch(console.error);
//# sourceMappingURL=server.js.map