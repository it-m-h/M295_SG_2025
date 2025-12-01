import express from 'express';
import { emitter } from './events.js';
import { readFile } from 'fs/promises';
import { join } from 'path';
const filePath = join(process.cwd(), 'data', 'mytext.txt');
const app = express();
const PORT = 5000;
// Standard-Route
app.get('/', (req, res) => {
    res.status(200).send('OK');
});
// Emit custom event
app.get('/myemit', (req, res) => {
    emitter.emit('begruessung', 'Hallo Herr Harald Muster');
    res.status(200).send('myemit event emitted');
});
// Asynchronen Dateiinhalt lesen und senden
app.get('/file', async (req, res, next) => {
    try {
        const text = await readFile(filePath); // nicht-blockierend
        res.type('text/plain').send(text);
    }
    catch (err) {
        next(err); // sauber an den Fehler-Handler weitergeben
    }
});
app.listen(PORT, () => {
    console.log(`Server laeuft auf http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map