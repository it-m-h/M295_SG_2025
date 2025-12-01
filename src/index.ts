import express, { Request, Response } from 'express'

const app = express()
const PORT = 5000

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('OK')
})

app.listen(PORT, () => {
  console.log(`Server laeuft auf http://localhost:${PORT}`)
})
