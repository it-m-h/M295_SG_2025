import { raw, Router } from 'express'
import type { Request, Response } from 'express'
const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.status(200).send('Alle Cars anzeigen ')
})

router.get('/:id', (req: Request, res: Response) => {
  res.status(200).send('Car mit id ' + req.params.id)
})

router.post('/', (req: Request, res: Response) => {
  let htmlText = 'Ich will neues Auto mnachen<br>'

  // felder aus req.body lesen und ausgeben
  console.log(req.body)
  let Name = req.body.name
  htmlText += `Name: ${Name} <br>`
  res.status(200).send(htmlText)

  /* TIPP: in Postman bei Body als raw und JSON formatieren
    {
        "name": "Hans Muster"
    } 
    */
})

router.put('/:id', (req: Request, res: Response) => {
  res.status(200).send('Ich will update machen mit id ' + req.params.id)
})

router.delete('/:id', (req: Request, res: Response) => {
  res.status(200).send('Ich will delete machen mit id ' + req.params.id)
})

export default router
