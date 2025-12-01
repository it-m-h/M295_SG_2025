import express from 'express'
const app = express()
const PORT = 5000
app.get('/', (req: any, res: any) => {
  res.status(200).send('OK')
})
app.listen(PORT, () => {
  console.log(`Server laeuft auf http://localhost:${PORT}`)
})
