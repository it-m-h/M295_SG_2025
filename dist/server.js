import { app } from './app.js';
import { PORT } from './config.js';
const startServer = async () => {
    app.listen(PORT, () => console.log(`Server läuft auf http://localhost:${PORT}`));
};
startServer().catch(console.error);
//# sourceMappingURL=server.js.map