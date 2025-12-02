import express, { Request, Response } from 'express'
import { emitter } from './events.js'
import { readFile } from 'fs/promises'
import { join } from 'path'

// Cars routes import from src/routes/cars.ts
import carsRouter from './routes/cars.js'
// Files routes import from src/routes/files.ts
import filesRouter from './routes/files.js'

const filePath = join(process.cwd(), 'data', 'mytext.txt')

const app = express()
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const PORT = 5000

// Standard-Route (Achtung mit publiuc nicht ueberschneiden)
/* app.get('/', (req: Request, res: Response) => {
  res.status(200).send('OK')
}) */

// getCar routes
app.use('/getCar', carsRouter)

// file routes
app.use('/files', filesRouter)


// Emit custom event
app.get('/myemit', (req: Request, res: Response) => {
  emitter.emit('begruessung', 'Hallo Herr Harald Muster')
  res.status(200).send('myemit event emitted')
})

// Asynchronen Dateiinhalt lesen und senden
app.get('/file', async (req, res, next) => {
  try {
    const text = await readFile(filePath) // nicht-blockierend
    res.type('text/plain').send(text)
  } catch (err) {
    next(err) // sauber an den Fehler-Handler weitergeben
  }
})

app.listen(PORT, () => {
  console.log(`Server laeuft auf http://localhost:${PORT}`)
})
