import express from 'express';
import { emitter } from './events.js';
const app = express();
const PORT = 5000;
app.get('/', (req, res) => {
    res.status(200).send('OK');
});
app.get('/myemit', (req, res) => {
    emitter.emit('begruessung', 'Hallo Herr Harald Muster');
    res.status(200).send('myemit event emitted');
});
app.listen(PORT, () => {
    console.log(`Server laeuft auf http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map